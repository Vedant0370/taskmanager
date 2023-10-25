

const express = require('express')
const NewteamTask = require('../models/CreateTeamTaskModel')
const router = express.Router()

// API METHODS
// GET METHOD 
router.get('/', async(req, res) => {
    try{
        const teamTask = await NewteamTask.find()
        res.status(201).json(teamTask)
    }catch(e){
        res.status(404).json({message : "Can not get task"})
    }
})

// POST METHOD 
router.post('/' , async(req, res) => {
    try{
        const NewTask = new NewteamTask(req.body)
        await NewTask.save()
        res.status(201).json({message : "Data post successfully"})
    }catch(e){
        res.status(404).json({message : "Can not post data"})
    }
})

// PATCH 
router.patch('/:id' , async(req,res) => {
    const taskId = req.params.id
    try{
        const updatedTask = await NewteamTask.findByIdAndUpdate(taskId , req.body, {
            new :true
        })
        res.status(201).json(updatedTask)
    }catch(e){
        res.status(404).json({message : "Task Not Updated"})
    }
})

// GET BY ID 
router.get('/:id' , async(req, res) => {

        const taskId = req.params.id
    try{
        const getById = await NewteamTask.findById(taskId, req.body)
        if(!getById){
            return res.status(404).json({message : "No task found"})
        }
        else{
            res.status(201).json(getById)
        }
    }catch(e){
        res.status(404).json({message : "Can not get task by id"})
    }
})

// GET BY teamMemberId 
router.get('/teamMemberId/:id' , async(req, res) => {
    const teamMemberId = req.params.id;

    try {
        const tasks = await NewteamTask.find({ teamMemberId: teamMemberId });

        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for the given teamMemberId" });
        }

        res.status(201).json(tasks);
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
})

// DELETE 
router.delete('/:id' , async(req, res) => {
    const taskId = req.params.id
    try{
        const deleteTask = await NewteamTask.findByIdAndRemove(taskId)
        res.status(201).json({message : "Task Successfully deleted"})
    }catch(e){
        res.status(404).json({message : "Task not deleted"})
    }
})




module.exports = router