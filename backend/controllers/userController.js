const asyncHandler = require('express-async-handler'); // Simple middleware for handling exceptions inside async express routes
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Helper function to generate a JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

// @desc    Register a new user
// @route   POST /api/users/signup
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // 2. Create the user (password is automatically hashed by the model middleware)
  const user = await User.create({
    name,
    email,
    password,
  });

  // 3. Send back successful response with a token
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Send JWT for authentication
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. Find user by email
  const user = await User.findOne({ email });

  // 2. Check if user exists and the password matches
  if (user && (await user.matchPassword(password))) {
    // 3. Successful login
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Send JWT for authentication
    });
  } else {
    // 4. Failed login
    res.status(401); // Unauthorized
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerUser, authUser, getUserProfile };

const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user; 

  if (user) {
    // This is the data you would send to populate the user's dashboard/home page
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "Welcome to your Dashboard!", // Added a message for context
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { registerUser, authUser, getUserProfile }; 
// (Make sure to export getUserProfile)