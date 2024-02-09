import mongoose from 'mongoose';
import config from '../config.js';

const { mongoUri } = config;

mongoose.connection.setMaxListeners(0);

const connectionDB = async () => {
    try {
        const connection = await mongoose.connect(mongoUri);
        console.log('Successful database connection');
    } catch (error) {
        console.error(`Connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectionDB;