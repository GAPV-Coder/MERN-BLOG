import {
    signInService,
    signInWithGoogleService,
    signUpService,
} from '../services/auth.services.js';

export const signUpController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const result = await signUpService(username, email, password);

        res.status(200).json({
            message: 'User registered successfully',
            data: result,
        });
    } catch (error) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }
};

export const signInController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { user, token } = await signInService(email, password);

        res.status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json({
                message: `Welcome back ${user.username}!`,
                data: user,
            });
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

export const signInWithGoogleController = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;

    try {
        const { token, userData } = await signInWithGoogleService(
            email,
            name,
            googlePhotoUrl,
        );

        res.status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(userData);
    } catch (error) {
        next(error);
    }
};
