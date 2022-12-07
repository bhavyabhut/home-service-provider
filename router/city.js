const city = require('express').Router();
const { getAllCity } = require('../controller/city.js');
city.route('/').get(getAllCity);

module.exports = city;
