import express from 'express';
import AuthController from '../controllers/authController.mjs';
import { check } from 'express-validator';

const router = express.Router();

router.post('/login', [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').exists()
], AuthController.login);

export default router;
