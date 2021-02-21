const service = require("express").Router();
const { getServices } = require("../controller/service.js");
service.route("/").get(getServices);

module.exports = service;
