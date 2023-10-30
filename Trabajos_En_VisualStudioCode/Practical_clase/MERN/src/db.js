import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://LOGIN-MRN:wnHGKsIQG3xsOZXV@cluster0.gclk8cj.mongodb.net/");
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
    }
}