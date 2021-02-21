const category = require("express").Router();
const {
  getCategories,
  categoriesDashboard,
} = require("../controller/category");
category.route("/").get(getCategories);
category.route("/dashboard").get(categoriesDashboard);

module.exports = category;
