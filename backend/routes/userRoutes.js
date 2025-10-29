import express from 'express';

// IMPORTANT: We use the .mjs extension for relative paths in ES Modules
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes for registration and login
// POST /api/users/signup
router.post('/signup', registerUser);
// POST /api/users/login
router.post('/login', authUser);

// Private route for fetching user profile, requires the 'protect' middleware
// GET /api/users/profile
router.route('/profile').get(protect, getUserProfile);

// Export the router for use in the main application file
export default router;
