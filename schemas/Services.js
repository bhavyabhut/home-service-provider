const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema(
  {
    service_id: String,
    name: String,
    type: String,
    description: String,
    experiance: String,
    image: String,
    tag: [String],
    customer_served: String,
    address: String,
    owner: String,
    typeObj: {},
    addressObj: {},
    ownerObj: {},
  },
  { timestamps: true },
  { collection: 'service' },
);

const Services = mongoose.model('service', ServiceSchema);

module.exports = Services;
