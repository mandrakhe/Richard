import mongoose from "mongoose";

export const connectDB = async ()=> {

    try {
        await mongoose.connect ("mongodb+srv://luisfernnandomb:KJvSvJXimFsyAbpS@cluster0.gclk8cj.mongodb.net/mernlogin")
        console.log(">> DB connect")

    } catch (error) { 
        console.log(error);
    } 
    
}
