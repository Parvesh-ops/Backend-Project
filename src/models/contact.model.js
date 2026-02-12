import mongoose from "mongoose";

//schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'contact number is required']
    },
},
    {
        timestamps: true // adds createdAt & updatedAt
    }
);

//model
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;