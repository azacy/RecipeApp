import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export const connectDB = async() => {
    try {
        mongoose.connect("mongodb+srv://comm:85218521@cluster0.f6dvdlz.mongodb.net/test")
        console.log(`Connected to MongoDB Successfully`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};
