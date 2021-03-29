const category = require("express").Router();
let multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, `\categoryImages`);
//   },
//   filename: function (req, file, cb) {
//     console.log(req.body.name, "hahaha");
//     cb(null, req.body.name + ".png");
//   },
// });
var upload = multer();

const {
  getCategories,
  categoriesDashboard,
  addCategory,
} = require("../controller/category");
category.route("/").get(getCategories);
category.route("/addCategory").post(upload.single("image"), addCategory);
category.route("/dashboard").get(categoriesDashboard);

module.exports = category;
