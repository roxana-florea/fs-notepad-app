const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  text: {
    type: String,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Note', noteSchema);
