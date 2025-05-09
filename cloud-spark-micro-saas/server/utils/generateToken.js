import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load env vars if not already loaded (e.g., when run directly)
dotenv.config();

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    console.error('Error: JWT_SECRET is not defined in environment variables.');
    // In a real application, you might throw an error or handle this more gracefully
    return null; // Or throw new Error('JWT_SECRET not set');
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

export default generateToken;
