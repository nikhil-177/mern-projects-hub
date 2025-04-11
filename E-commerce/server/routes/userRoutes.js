import express from 'express';
import { signupValidator } from '../middlewares/validators/userValidator.js';
import { signupController } from '../controllers/auth.controller.js';
import { ValidationResult } from '../middlewares/validateResult.js';

const router = express.Router()

router.post('/auth/signup', signupValidator, ValidationResult , signupController);

// router.post('/auth/login', )


export const userRoutes = router
