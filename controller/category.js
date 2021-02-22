const Categories = require("../schemas/Category");
const Services = require("../schemas/Services");

const { resourceError, serverError } = require("../helper/errorHandler");
const { success } = require("../helper/successHandler");
const category = require("../router/category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    success(res, categories);
  } catch (error) {
    serverError(res, error);
  }
};

exports.categoriesDashboard = async (req, res) => {
  try {
    const categories = await Categories.find();
    const services = await Services.find();
    let countCategories = {};
    let finalCategories = [];
    services.map((service) => {
      if (countCategories[service.type]) {
        countCategories[service.type] = countCategories[service.type] + 1;
      } else {
        countCategories[service.type] = 1;
      }
    });
    // console.log(categories, services, countCategories);
    finalCategories = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        count: countCategories[category.id],
      };
    });
    // console.log(finalCategories);
    success(res, finalCategories);
  } catch (error) {
    serverError(res, error);
  }
};
