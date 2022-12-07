const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema(
  {
    calling_code: String,
    country: String,
  },
  { timestamp: true },
  {
    collection: 'country',
  },
);
const Countries = mongoose.model('country', CountrySchema);
module.exports = Countries;
