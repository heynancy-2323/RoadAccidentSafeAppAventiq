import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/User.js';

// Login controller
export const login = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if user is active
    if (!user.is_active) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Send response
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Error during login'
    });
  }
};

// Signup controller
export const signup = async (req, res) => {
  console.log('Signup request received:', {
    body: req.body,
    headers: req.headers,
    url: req.url,
    method: req.method
  });

  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
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
      station_id,
      extra_data
    } = req.body;

    console.log('Checking for existing user with:', { 
      username, 
      email,
      query: { $or: [{ username }, { email }] }
    });

    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    console.log('Existing user check result:', existingUser ? {
      found: true,
      username: existingUser.username,
      email: existingUser.email,
      id: existingUser._id
    } : { found: false });

    if (existingUser) {
      const conflictType = existingUser.username === username ? 'username' : 'email';
      console.log('User already exists:', {
        conflictType,
        existingValue: existingUser[conflictType]
      });
      
      return res.status(409).json({
        success: false,
        message: `${conflictType === 'username' ? 'Username' : 'Email'} already exists`,
        conflictType
      });
    }

    console.log('Creating new user with data:', {
      username,
      role,
      name,
      email,
      phone,
      station_id
    });

    // Create new user
    const user = new User({
      username,
      password_hash: password, // Will be hashed by the pre-save middleware
      role,
      name,
      email,
      phone,
      station_id,
      extra_data: extra_data || {}
    });

    await user.save();
    console.log('User saved successfully:', { 
      userId: user._id,
      username: user.username,
      email: user.email
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    console.log('JWT token generated for user:', { userId: user._id });

    // Send response
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Signup error:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      name: error.name
    });
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `${field === 'username' ? 'Username' : 'Email'} already exists`,
        conflictType: field
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error during registration'
    });
  }
}; 