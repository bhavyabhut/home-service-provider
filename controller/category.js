const Categories = require('../schemas/Category');

const fs = require('fs');
let multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `\categoryImages`);
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + '.png');
  },
});
var upload = multer({ storage: storage }).single('image');

const { resourceError, serverError } = require('../helper/errorHandler');
const { success } = require('../helper/successHandler');
const NewServices = require('../schemas/NewServices');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    success(res, categories);
  } catch (error) {
    serverError(res, error);
  }
};
exports.addCategory = async (req, res) => {
  try {
    const categories = await Categories.find();
    console.log(categories, req.body);
    if (
      categories.filter(
        (c) => c.name.toLowerCase() == req.body.name.toLowerCase(),
      ).length > 0
    ) {
      resourceError(res, 'Category Already Exits.');
    } else {
      try {
        fs.writeFileSync(
          `./categoryImages/${req.body.name}.png`,
          req.file.buffer,
          'base64',
        );
        const Category = new Categories();
        Category.name = req.body.name;
        Category.id = req.body.name;
        const newCategory = await Category.save();
        success(res, newCategory);
      } catch (e) {
        serverError(res, e);
      }
    }
  } catch (error) {
    serverError(res, error);
  }
};

exports.categoriesDashboard = async (req, res) => {
  try {
    const categories = await Categories.find();
    const services = await NewServices.find();
    let countCategories = {};
    let finalCategories = [];
    services.map((service) => {
      if (countCategories[service.type]) {
        countCategories[service.type] = countCategories[service.type] + 1;
      } else {
        countCategories[service.type] = 1;
      }
    });
    finalCategories = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        count: countCategories[category.id] || 0,
      };
    });
    success(res, finalCategories);
  } catch (error) {
    serverError(res, error);
  }
};
