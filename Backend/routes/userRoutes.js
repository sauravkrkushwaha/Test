const express = require('express');
const { protectUser } = require('../middleware/authMiddleware');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');


const router = express.Router();

// Public Routes
router.post('/signup', registerUser);
router.post('/login', loginUser);

// Example Protected Route
// ✅ Clean profile route using controller
router.get('/profile', protectUser, getUserProfile);


module.exports = router;
