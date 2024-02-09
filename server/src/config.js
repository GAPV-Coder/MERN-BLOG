import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGODB_URI,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    expirationToken: process.env.JWT_EXPIRATION_TOKEN
};

export default config;