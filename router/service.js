const service = require("express").Router();
const { getServices } = require("../controller/service.js");
service.route("/").post(getServices);

module.exports = service;
