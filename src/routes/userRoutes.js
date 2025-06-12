import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/all', authenticate, getAllUsers);

export default router; 