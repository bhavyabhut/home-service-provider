const Cities = require('../schemas/City');
const NewServices = require('../schemas/NewServices');

const { resourceError, serverError } = require('../helper/errorHandler');
const { success } = require('../helper/successHandler');

exports.getServices = async (req, res) => {
  let newSer = [];
  try {
    newSer = await NewServices.find();
  } catch (error) {
    serverError(res, error);
  }
  if (req.body) {
    if (req.body.category && req.body.category !== 'all') {
      newSer = newSer.filter((ser) => ser.type === req.body.category);
    }
    if (req.body.state && req.body.state !== 'all') {
      newSer = newSer.filter((ser) => ser.addressObj.state === req.body.state);
    }
    if (req.body.city) {
      newSer = newSer.filter((ser) =>
        ser.addressObj.newCity.city
          .toLocaleLowerCase()
          .includes(req.body.city.toLocaleLowerCase()),
      );
    }
    if (req.body.name) {
      newSer = newSer.filter((ser) =>
        ser.name
          .toLocaleLowerCase()
          .includes(req.body.name.toLocaleLowerCase()),
      );
    }
    success(res, newSer);
  } else {
    success(res, newSer);
  }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const newSer = await NewServices.find();
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

exports.addService = async (req, res) => {
  try {
    const service = new NewServices(req.body);
    const s = await service.save();
    success(res, s);
  } catch (e) {
    resourceError(res, e);
  }
};
