import { body } from 'express-validator';

export const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

export const validateSignup = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  
  body('role')
    .notEmpty()
    .withMessage('Role is required')
    .isIn(['field_officer', 'reviewer', 'administrator', 'case_manager', 'auditor'])
    .withMessage('Invalid role selected'),
  
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Full name is required'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^\+?[\d\s-]{10,}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('station_id')
    .trim()
    .notEmpty()
    .withMessage('Station ID is required')
]; 