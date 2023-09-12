const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, 'Veuillez entrer une adresse email valide']
    },
    password: {
        type: String,
        required: true
    }
},    
    {
        timestamps: true,
    }   

);

const User = mongoose.model('User', userSchema)

module.exports = User