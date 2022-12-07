const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema(
  {
    id: String,
    street1: String,
    street2: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
    newState: {},
    newCity: {},
    newCountry: {},
  },
  { timestamp: true },
  { collection: 'addresses' },
);

const Addresses = mongoose.model('addresses', AddressSchema);

module.exports = Addresses;
