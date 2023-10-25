
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name : String,
    email : String,
    password:String,
    
});

const employeeTask = mongoose.model('employee' , employeeSchema)

module.exports = employeeTask

