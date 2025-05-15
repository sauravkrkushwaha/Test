const express = require('express');
const { registerTrainer, loginTrainer } = require('../controllers/authController');
const { protectTrainer } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', upload.single('profilePhoto'), (req, res, next) => {
  // multer error handling middleware is automatic here
  registerTrainer(req, res, next);
});

router.post('/login', loginTrainer);

// Protected route example
router.get('/profile', protectTrainer, (req, res) => {
  res.json({
    message: 'Trainer profile accessed',
    trainer: req.trainer,
  });
});

module.exports = router;
