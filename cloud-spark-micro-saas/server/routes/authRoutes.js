import express from 'express';
// Import controllers
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Actual routes using controller functions
router.post('/register', registerUser);

router.post('/login', loginUser);

export default router;
