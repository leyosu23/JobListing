const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    Company: {
        type: String,
        required: true,
    },
    Position: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Duration: {
        type: String,
        required: true,
    },
    Deadline: {
        type: String,
        required: true,
    },
})

const Job = mongoose.model("Job", JobSchema)
module.exports = Job