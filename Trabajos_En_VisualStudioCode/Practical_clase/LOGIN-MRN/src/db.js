import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("");
        console.log("mongodb://localhost:27017");
    } catch (error) {
        console.log(error)
    }
}