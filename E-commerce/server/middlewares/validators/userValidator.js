import { body } from 'express-validator';

export const signupValidator = [
    body('name').notEmpty().withMessage('name field is required'),
    body('email').isEmail().withMessage('It should be Email'),
    body('password').notEmpty().isLength(6).withMessage('Must be at least 6 characters'),
    body('address').notEmpty().withMessage('address required for future purposes'),
    body('city').notEmpty().withMessage('city is required'),
    body('state').notEmpty().withMessage('state is required'),
    body('country').notEmpty().withMessage('country is required'),
    body('zipcode').notEmpty().withMessage('zipcode is required').isLength({min:6,max:6}).withMessage('must be of 6 digits only').isInt().withMessage('must contain numbers only'),
    body('phone').notEmpty().withMessage('phone number is required').isLength({min:10,max:10}).withMessage('must be of 10 digits only').isInt().withMessage('must contain numbers only')
]