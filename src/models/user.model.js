import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the username"],
        },
        email: {
            type: String,
            required: [true, "Please add the email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add the password"],
        },
    },
    { timestamps: true }
);


//model
const User = ("User", userSchema);
export default User;
