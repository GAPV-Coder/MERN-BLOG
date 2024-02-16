import express from 'express';
import {
    signInController,
    signInWithGoogleController,
    signUpController,
} from '../controllers/auth.controller.js';
import {
    signInValidations,
    signUpValidations,
} from '../middlewares/validations.middleware.js';

const router = express.Router();

router.post('/sign-up', signUpValidations, signUpController);

router.post('/sign-in', signInValidations, signInController);

router.post('/sign-in-google', signInWithGoogleController);

export default router;
