
const mongoose = require('mongoose');

const MyTeamTaskSchema = new mongoose.Schema({

    title : String,
    description : String,
    priority : String,
    teamMember : String,
    teamMemberId : String
});

const NewTeamTask = mongoose.model('Team-Task' , MyTeamTaskSchema)

module.exports = NewTeamTask

