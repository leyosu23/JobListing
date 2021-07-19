const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    }
})

const Auth = mongoose.model("Auth", AuthSchema)
module.exports = Auth