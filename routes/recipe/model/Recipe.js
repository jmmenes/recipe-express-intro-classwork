const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    recipeType: {
      type: String,
    },
    recipePrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('recipe', recipeSchema);

// In the schema it should have the following
// recipe - type String, date, price - type Number
