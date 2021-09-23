const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    animalType: {
      type: String,
    },
    animalName: {
      type: String,
    },
    animalAge: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('animal', animalSchema);
