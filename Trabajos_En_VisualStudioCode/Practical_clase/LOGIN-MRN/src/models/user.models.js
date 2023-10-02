import moongosee from "moongosee";

const userSchema = new moongosee.userSchema({
    username: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    password : {
        type: String,
        required: true,
    }
},{
        timestamps: true
});

export default moongosee.model("User", userSchema);