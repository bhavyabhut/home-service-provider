const states = require('express').Router();
const { getstates } = require('../controller/state');
states.route('/').get(getstates);

module.exports = states;
