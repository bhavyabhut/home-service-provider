const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
  {
    id: String,
    city: String,
    state: String,
    country: String,
  },
  { timestamp: true },
  {
    collection: 'city',
  },
);
const Cities = mongoose.model('city', CitySchema);
module.exports = Cities;
