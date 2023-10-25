

const express = require('express')
const NewOwnTask = require('../models/MyOwnTaskModel')
const router = express.Router()

// API METHODS
// GET METHOD 
router.get('/', async(req, res) => {
    try{
        const ownTask = await NewOwnTask.find()
        res.status(201).json(ownTask)
    }catch(e){
        res.status(404).json({message : "Can not get task"})
    }
})

// POST METHOD 
router.post('/' , async(req, res) => {
    try{
        const NewTask = new NewOwnTask(req.body)
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
        const updatedTask = await NewOwnTask.findByIdAndUpdate(taskId , req.body, {
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
        const getById = await NewOwnTask.findById(taskId, req.body)
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

// DELETE 
router.delete('/:id' , async(req, res) => {
    const taskId = req.params.id
    try{
        const deleteTask = await NewOwnTask.findByIdAndRemove(taskId)
        res.status(201).json({message : "Task Successfully deleted"})
    }catch(e){
        res.status(404).json({message : "Task not deleted"})
    }
})




module.exports = router