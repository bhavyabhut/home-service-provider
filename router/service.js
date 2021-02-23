const service = require("express").Router();
const {
  getServices,
  getServiceById,
  getServicesChart,
} = require("../controller/service.js");
service.route("/").post(getServices);
service.route("/chart").get(getServicesChart);
service.route("/:id").get(getServiceById);

module.exports = service;
