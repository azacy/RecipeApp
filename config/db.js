import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_DEV)
        console.log(`Connected to MongoDB Successfully`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};
