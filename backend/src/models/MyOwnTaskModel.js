
const mongoose = require('mongoose');

const MyOwnTaskSchema = new mongoose.Schema({

    title : String,
    description : String
});

const NewOwnTask = mongoose.model('My-Task' , MyOwnTaskSchema)

module.exports = NewOwnTask

