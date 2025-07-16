const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET all foods
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new food
router.post('/', async (req, res) => {
  const { name, category, condition, imageUrl, nutritionalBenefit, price } = req.body;

  const newFood = new Food({
    name,
    category,
    condition,
    imageUrl,
    nutritionalBenefit,
    price
  });

  try {
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
