const login = require('express').Router();
const {
  singin,
  singup,
  auth,
  otp,
  verifyOtp,
  changePassword,
} = require('../controller/logincontrol.js');
login.route('/').post(singin);
login.route('/registration').post(singup);
login.route('/auth').get(auth);
login.route('/otp').post(otp);
login.route('/verifyOtp').post(verifyOtp);
login.route('/changePassword').post(changePassword);

module.exports = login;
