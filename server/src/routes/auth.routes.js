import express from 'express';
import {
    signInController,
    signUpController,
} from '../controllers/auth.controller.js';
import {
    signInValidations,
    signUpValidations,
} from '../middlewares/validations.middleware.js';

const router = express.Router();

router.post('/sign-up', signUpValidations, signUpController);

router.post('/sign-in', signInValidations, signInController);

export default router;
