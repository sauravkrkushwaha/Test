const express = require('express');
// const { registerTrainer, loginTrainer } = require('../controllers/authController');
const { protectTrainer } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { registerTrainer, loginTrainer, getTrainerProfile } = require('../controllers/authController');


const router = express.Router();

// Public routes
router.post('/signup', upload.single('profilePhoto'), (req, res, next) => {
  // multer error handling middleware is automatic here
  registerTrainer(req, res, next);
});

router.post('/login', loginTrainer);

// ✅ Clean profile route using controller
router.get('/profile', protectTrainer, getTrainerProfile);

module.exports = router;
