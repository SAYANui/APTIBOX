const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); 

router.post('/signup', registerUser);
router.post('/login', authUser);    

router.route('/profile').get(protect, getUserProfile); 

module.exports = router;