const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema(
  {
    id: String,

    state: String,
  },
  { timestamp: true },
  {
    collection: 'state',
  },
);
const States = mongoose.model('state', StateSchema);
module.exports = States;
