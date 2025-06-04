require('dotenv').config(); // Make sure env variables are loaded if needed
const User = require('../models/User');
const Trainer = require('../models/Trainer');
const { generateUserToken, generateTrainerToken } = require('../utils/generateToken');

// USER CONTROLLERS
const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, email, phone, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        token: generateUserToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (err) {
    console.error('Register User Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        token: generateUserToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login User Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// TRAINER CONTROLLERS
const registerTrainer = async (req, res) => {
  try {
    const {
      name,
      type,
      speciality,
      aboutMe,
      certifications,
      packages,
      password,
    } = req.body;

    // Basic required field validation
    if (!name || !type || !password || !packages) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const trainerExists = await Trainer.findOne({ name });
    if (trainerExists) {
      return res.status(400).json({ message: 'Trainer already exists' });
    }

    // Profile photo path if uploaded
    const profilePhoto = req.file ? `/uploads/${req.file.filename}` : null;

    // Parse JSON fields if they come as strings
    const parsedSpeciality = typeof speciality === 'string' ? JSON.parse(speciality) : speciality;
    const parsedCertifications = typeof certifications === 'string' ? JSON.parse(certifications) : certifications;
    const parsedPackages = typeof packages === 'string' ? JSON.parse(packages) : packages;

    // Create trainer
    const trainer = await Trainer.create({
      name,
      type,
      password,
      profilePhoto,
      speciality: parsedSpeciality || [],
      aboutMe,
      certifications: parsedCertifications || [],
      packages: parsedPackages,
    });

    res.status(201).json({
      _id: trainer._id,
      name: trainer.name,
      token: generateTrainerToken(trainer._id),
    });
  } catch (err) {
    console.error('Register Trainer Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const loginTrainer = async (req, res) => {
  const { name, password } = req.body;

  try {
    const trainer = await Trainer.findOne({ name });
    if (!trainer || !(await trainer.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: trainer._id,
      name: trainer.name,
      token: generateTrainerToken(trainer._id),
    });
  } catch (err) {
    console.error('Login Trainer Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getUserProfile = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    phone: req.user.phone,
  });
};

const getTrainerProfile = async (req, res) => {
  if (!req.trainer) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  res.json({
    _id: req.trainer._id,
    name: req.trainer.name,
    type: req.trainer.type,
    profilePhoto: req.trainer.profilePhoto,
    speciality: req.trainer.speciality,
    aboutMe: req.trainer.aboutMe,
    certifications: req.trainer.certifications,
    packages: req.trainer.packages,
  });
};

module.exports = {
  registerUser,
  loginUser,
  registerTrainer,
  loginTrainer,
  getUserProfile,
  getTrainerProfile,
};


