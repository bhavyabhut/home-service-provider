const Categories = require("../schemas/Category");
const Services = require("../schemas/Services");
const AddressSchema = require("../schemas/Address");
const Merchants = require("../schemas/Merchant");
const Cities = require("../schemas/City");
const States = require("../schemas/State");
const Countries = require("../schemas/Country");
const NewServices = require("../schemas/NewServices");

const fs = require("fs");

const { resourceError, serverError } = require("../helper/errorHandler");
const { success } = require("../helper/successHandler");
const Addresses = require("../schemas/Address");

exports.getServices = async (req, res) => {
  let newSer = [];
  try {
    newSer = await NewServices.find();
    // success(res, newSer);
  } catch (error) {
    serverError(res, error);
  }
  if (req.body) {
    // console.log(req.body);

    if (req.body.category && req.body.category !== "all") {
      newSer = newSer.filter((ser) => ser.type === req.body.category);
    }
    if (req.body.state && req.body.state !== "all") {
      newSer = newSer.filter((ser) => ser.addressObj.state === req.body.state);
      // console.log(newSer, "ha moj");
    }
    if (req.body.city) {
      newSer = newSer.filter((ser) =>
        ser.addressObj.newCity.city
          .toLocaleLowerCase()
          .includes(req.body.city.toLocaleLowerCase())
      );
    }
    if (req.body.name) {
      newSer = newSer.filter((ser) =>
        ser.name.toLocaleLowerCase().includes(req.body.name.toLocaleLowerCase())
      );
    }
    success(res, newSer);
  } else {
    success(res, newSer);
  }
  // try {
  //   const services = await Services.find();
  //   const categories = await Categories.find();
  //   const address = await Addresses.find();
  //   const merchants = await Merchants.find();
  //   const cities = await Cities.find();
  //   const states = await States.find();
  //   const countries = await Countries.find();
  //   services.forEach((s) => {
  //     let newAddress = address.find((c) => c.id === s.address);
  //     cities.forEach((city) => {
  //       if (city.id == newAddress.city) {
  //         newAddress.newCity = city;
  //       }
  //     });
  //     states.forEach((state) => {
  //       if (state.id == newAddress.state) newAddress.newState = state;
  //     });
  //     countries.forEach((country) => {
  //       if (country.calling_code == newAddress.country)
  //         newAddress.newCountry = country;
  //     });
  //     s.addressObj = newAddress;
  //     let owner = merchants.find((c) => c.id == s.owner);
  //     let merchantAddress = null;
  //     if (owner && owner.address) {
  //       merchantAddress = address.find((c) => c.id == owner.address);
  //     }
  //     if (merchantAddress) {
  //       cities.forEach((city) => {
  //         if (city.id == merchantAddress.city) merchantAddress.newCity = city;
  //       });
  //       states.forEach((state) => {
  //         if (state.id == merchantAddress.state)
  //           merchantAddress.newState = state;
  //       });
  //       countries.forEach((country) => {
  //         if (country.calling_code == merchantAddress.country)
  //           merchantAddress.newCountry = country;
  //       });
  //     }
  //     if (owner) owner.addressObj = merchantAddress;
  //     s.typeObj = new Object(categories.find((c) => c.id === s.type));
  //     s.ownerObj = owner;
  //   });
  //   fs.writeFileSync("myjsonfile.json", JSON.stringify(services), () => {
  //     console.log("dho");
  //   });
  //   success(res, services);
  // } catch (error) {
  //   serverError(res, error);
  // }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const newSer = await NewServices.find();
    // console.log(newSer);
    const ser = newSer.filter((service) => service.service_id === id);
    console.log(ser);
    success(res, ser);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getServicesChart = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let countCategories = {};
  let finalCategories = [];
  try {
    const newSer = await NewServices.find();
    const city = await Cities.find();
    newSer.map((service) => {
      if (countCategories[service.addressObj.newCity.city]) {
        countCategories[service.addressObj.newCity.city] =
          countCategories[service.addressObj.newCity.city] + 1;
      } else {
        countCategories[service.addressObj.newCity.city] = 1;
      }
    });
    // console.log(categories, services, countCategories);
    finalCategories = city.map((category) => {
      return {
        id: category.id,
        name: category.city,
        count: countCategories[category.city],
      };
    });
    console.log(finalCategories);
    success(res, finalCategories);
  } catch (error) {
    serverError(res, error);
  }
};

// exports.categoriesDashboard = async (req, res) => {
//   try {
//     const categories = await Categories.find();
//     const services = await Services.find();
//     let countCategories = {};
//     let finalCategories = [];
//     services.map((service) => {
//       if (countCategories[service.type]) {
//         countCategories[service.type] = countCategories[service.type] + 1;
//       } else {
//         countCategories[service.type] = 1;
//       }
//     });
//     // console.log(categories, services, countCategories);
//     finalCategories = categories.map((category) => {
//       return {
//         id: category.id,
//         name: category.name,
//         count: countCategories[category.id],
//       };
//     });
//     console.log(finalCategories);
//     success(res, finalCategories);
//   } catch (error) {
//     serverError(res, error);
//   }
// };

exports.addService = async (req, res) => {
  try {
    const service = new NewServices(req.body);
    const s = await service.save();
    success(res, s);
  } catch (e) {
    resourceError(res, e);
  }
};
