import express from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { login, signup } from '../controllers/authController.js';
import { validateLogin, validateSignup } from '../middleware/validators.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateRegister = [
  body('username').trim().notEmpty().withMessage('Username is required')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('password').notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('role').isIn(['field_officer', 'reviewer', 'administrator', 'case_manager', 'auditor'])
    .withMessage('Invalid role'),
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('station_id').trim().notEmpty().withMessage('Station ID is required')
];

// Auth routes
router.post('/login', validateLogin, login);
router.post('/signup', validateSignup, signup);

// Get current user data
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password_hash');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    res.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        name: user.name,
        email: user.email,
        phone: user.phone,
        station_id: user.station_id,
        is_active: user.is_active
      }
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user data'
    });
  }
});

// Debug route to check if auth routes are working
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes are working' });
});

// Register route (protected, only for administrators)
router.post('/register', validateRegister, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const {
      username,
      password,
      role,
      name,
      email,
      phone,
      station_id
    } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Username or email already exists'
      });
    }

    // Create new user
    const user = await User.create({
      username,
      password_hash: password, // Will be hashed by the pre-save hook
      role,
      name,
      email,
      phone,
      station_id,
      is_active: true
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Error during registration'
    });
  }
});

export default router; 