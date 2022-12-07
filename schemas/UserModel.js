const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'username not empty'],
    minlength: [4, 'name greater than 4 latter'],
  },
  email: {
    type: String,
    required: [true, 'email not empty'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password not empty'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  otp: {
    type: String,
  },
  otpTimeOut: {
    type: Date,
  },
  isOtpVerify: {
    type: Boolean,
  },
  profile: {
    type: Boolean,
    default: false,
  },
  number: String,
  city: String,
  state: String,
  fullname: String,
  country: String,
  bdate: Date,
  isMerchant: Boolean,
});

module.exports = mongoose.model('User', UserSchema);
