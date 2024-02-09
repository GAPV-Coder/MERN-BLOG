import jwt from 'jsonwebtoken';
import config from '../config.js';
import { errorHandler } from './errorHandler.js';

const { jwtSecretKey } = config;

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return next(errorHandler(401, 'Unauthorized'));
    }

    jwt.verify(token, jwtSecretKey, (error, user) => {
        if (error) {
            return next(errorHandler(401, 'Unauthorized'));
        }

        req.user = user;
        next();
    });
};