
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    name : String,
    email : String,
    password:String,
    
});

const adminRegester = mongoose.model('admin-register' , adminSchema)

module.exports = adminRegester

