import { body, validationResult } from 'express-validator';

export const signUpValidations = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Nickname is required'),
    body('email')
        .isEmail()
        .notEmpty()
        .withMessage('Invalid format'),
    body('password')
        .trim()
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];

export const signInValidations = [
    body('email')
        .isEmail()
        .notEmpty()
        .withMessage('Invalid format'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        next();
    }
];