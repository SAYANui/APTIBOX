import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'; // IMPORTANT: Note the .js extension for ES Modules

// @desc    Protect routes by verifying JWT
// @access  Private
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Check if token exists in the Authorization header (e.g., "Bearer TOKEN_STRING")
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (split "Bearer" and "TOKEN_STRING")
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
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

  // 2. If no token is found after checking the header
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
