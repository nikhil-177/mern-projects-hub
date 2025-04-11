import express from 'express';
import { loginValidator, signupValidator } from '../middlewares/validators/userValidator.js';
import { loginController, signupController } from '../controllers/auth.controller.js';
import { ValidationResult } from '../middlewares/validateResult.js';

const router = express.Router();

// auth
router.post('/auth/signup', signupValidator, ValidationResult, signupController);
router.post('/auth/login', loginValidator, ValidationResult, loginController);

export const userRoutes = router;
