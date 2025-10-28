const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (split "Bearer" and "TOKEN_STRING")
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID from the decoded token payload and exclude the password
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        res.status(401); // Unauthorized
        throw new Error('Not authorized, user not found');
      }

      next(); // Move to the next middleware or controller function
    } catch (error) {
      console.error(error);
      res.status(401); // Unauthorized
      throw new Error('Not authorized, token failed');
    }
  }

  // 2. If no token is found
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = { protect };