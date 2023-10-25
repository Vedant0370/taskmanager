

const express = require('express')
const newEmployeeTask = require('../models/EmployeeModel')
const router = express.Router()

// API METHODS
// GET METHOD 
router.get('/', async(req, res) => {
    try{
        const employeeTask = await newEmployeeTask.find()
        res.status(201).json(employeeTask)
    }catch(e){
        res.status(404).json({message : "Can not get task"})
    }
})

// POST METHOD 
router.post('/' , async(req, res) => {
    try{
        const NewTask = new newEmployeeTask(req.body)
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
        const updatedTask = await newEmployeeTask.findByIdAndUpdate(taskId , req.body, {
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
        const getById = await newEmployeeTask.findById(taskId, req.body)
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
        const deleteTask = await newEmployeeTask.findByIdAndRemove(taskId)
        res.status(201).json({message : "Task Successfully deleted"})
    }catch(e){
        res.status(404).json({message : "Task not deleted"})
    }
})




module.exports = router