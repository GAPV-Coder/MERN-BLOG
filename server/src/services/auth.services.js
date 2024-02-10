import User from '../models/user.model.js';
import AppError from '../helpers/errorHandler.js';
import { comparePassword, encryptPassword } from '../helpers/bcrypt.js';
import config from '../config.js';
import jwt from 'jsonwebtoken';

const { jwtSecretKey } = config;

export const signUpService = async (username, email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new AppError('User with this email already exist', 400);
        }

        const hashedPassword = await encryptPassword(password);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return {
            user: { ...newUser._doc, password: undefined },
        };
    } catch (error) {
        throw new AppError(
            `Error registering user: ${error.message}`,
            500,
            error,
        );
    }
};

export const signInService = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new AppError('Email not found', 404);
        }

        const isMatchPassword = await comparePassword(password, user.password);
        if (!isMatchPassword) {
            throw new AppError('Password is incorrect', 401);
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            jwtSecretKey,
        );

        return {
            user: { _id: user.id, username: user.username, email: user.email },
            token,
        };
    } catch (error) {
        throw new AppError(`Sign in failed: ${error.message}`, 500, error);
    }
};
