const { body, validationResult } = require('express-validator');

// Validation middleware for user register
exports.validateUserRegistration = [
  body('username').trim().notEmpty().withMessage('Username should have a value').escape(),
  body('email').trim().isEmail().withMessage('Email value is not valid').normalizeEmail(),
];

// Validation middleware for user signin
exports.validateUserSignIn = [
  body('email').trim().isEmail().withMessage('Invalid email format').normalizeEmail(),
  body('password').trim().notEmpty().withMessage('Password is required'),
];