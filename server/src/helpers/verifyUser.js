import jwt from 'jsonwebtoken';
import config from '../config.js';

const { jwtSecretKey } = config;

const handlerError = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return next(handlerError(401, 'Unauthorized'));
    }

    jwt.verify(token, jwtSecretKey, (error, user) => {
        if (error) {
            return next(handlerError(401, 'Unauthorized'));
        }

        req.user = user;
        next();
    });
};