const mongoose = require('mongoose');
const MerchantSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    phone: String,
    gender: String,
    address: String,
    services: [String],
    addressObj: {},
  },
  { timestamp: true },
  { collection: 'merchant' },
);

const Merchants = mongoose.model('merchant', MerchantSchema);

module.exports = Merchants;
