import mongoose, { Mongoose } from "mongoose";

const taskSchema = new mongoose.Schema({

    title: {
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    date:{
        type: 'Date',
        default: Date.now
    },
    user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    timestamps:true
});
 export default mongoose.model('Task',taskSchema);
