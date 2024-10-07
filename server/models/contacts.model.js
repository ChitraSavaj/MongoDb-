import mongoose from "mongoose";
const ContactsSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    hobbies: {
        type: String
    }
})

export default ContactsSchema