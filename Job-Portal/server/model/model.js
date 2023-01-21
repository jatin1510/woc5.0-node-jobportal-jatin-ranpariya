var mongoose = require('mongoose');
var Double = require('mongodb').Double;
 
var schema1 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    batch: {
        type: Number,
        required: true,
    },
    cpi: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    techstack: String,
})

var schema2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    req_age: {
        type: Number,
        required: true,
    },
    req_cpi: {
        type: Number,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    package: {
        type: Number,
        required: true,
    },
    description: String,
})

const student = mongoose.model('student', schema1);
const company = mongoose.model('company', schema2);

module.exports = { student, company };