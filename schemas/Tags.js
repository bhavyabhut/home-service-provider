const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    id: String,
    tag: String,
  },
  {
    timestamp: true,
  },

  {
    collection: 'tag',
  },
);
const Tag = mongoose.model('tag', TagSchema);
module.exports = Tag;
