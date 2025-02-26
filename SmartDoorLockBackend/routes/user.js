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

// Get all users API
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);  // Send back all users
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify user
router.put('/verify/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isVerified = 1;  // Set isVerified to 1
    await user.save();
    res.status(200).json(user);  // Return updated user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Block user (set osVerified to 2)
router.put('/block/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isVerified = 2;  // Set osVerified to 2
    await user.save();
    res.status(200).json(user);  // Return updated user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
