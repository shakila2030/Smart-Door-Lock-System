// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create user API
router.post('/createuser', async (req, res) => {
  const { username, email } = req.body;

  // Basic validation
  if (!username || !email) {
    return res.status(400).json({ message: 'Username and email are required' });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const newUser = new User({ username, email });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
