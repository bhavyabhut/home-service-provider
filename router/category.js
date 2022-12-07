const category = require('express').Router();
let multer = require('multer');

var upload = multer();

const {
  getCategories,
  categoriesDashboard,
  addCategory,
} = require('../controller/category');
category.route('/').get(getCategories);
category.route('/addCategory').post(upload.single('image'), addCategory);
category.route('/dashboard').get(categoriesDashboard);

module.exports = category;
