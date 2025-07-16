const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {  // e.g., fruit, vegetable, protein, wholegrain
    type: String,
    required: true
  },
  condition: {  // e.g., diabetes, hypertension, cardiovascular
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  nutritionalBenefit: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 100
  }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
