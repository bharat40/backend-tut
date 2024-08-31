const { uniqueId } = require("lodash");
const mongoose = require("mongoose");
// define the person schema
const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ["waiter", "chef", "manager"],
        required: true,
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
    }
})

// creating person model
const person = mongoose.model("person", personSchema);
module.exports = person;