require('dotenv').config(); // Load env variables here too just in case

const jwt = require('jsonwebtoken');

const generateUserToken = (id) => {
  return jwt.sign({ id }, process.env.FITHUB_USER, {
    expiresIn: '30d',
  });
};

const generateTrainerToken = (id) => {
  return jwt.sign({ id }, process.env.FITHUB_TRAINER, {
    expiresIn: '30d',
  });
};

module.exports = { generateUserToken, generateTrainerToken };
