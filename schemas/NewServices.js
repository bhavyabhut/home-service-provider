const mongoose = require('mongoose');
const NewServicesSchema = new mongoose.Schema(
  {
    service_id: String,
    name: String,
    type: String,
    description: String,
    experiance: String,
    image: String,
    tag: [String],
    customers_served: String,
    address: String,
    owner: String,
    typeObj: {},
    addressObj: {},
    ownerObj: {},
  },
  { timestamps: true },
  { collection: 'newServices' },
);

const NewServices = mongoose.model('newServices', NewServicesSchema);

module.exports = NewServices;
