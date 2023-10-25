

const express = require('express')
const adminRegester = require('../models/AdminRegisterModel')
const router = express.Router()

// API METHODS
// GET METHOD 
router.get('/', async(req, res) => {
    try{
        const employeeTask = await adminRegester.find()
        res.status(201).json(employeeTask)
    }catch(e){
        res.status(404).json({message : "Can not get task"})
    }
})

// POST METHOD 
router.post('/' , async(req, res) => {
    try{
        const admin = new adminRegester(req.body)
        await admin.save()
        res.status(201).json({message : "Data post successfully"})
    }catch(e){
        res.status(404).json({message : "Can not post data"})
    }
})




// GET BY ID 
router.get('/:id' , async(req, res) => {

        const adminId = req.params.id
    try{
        const getById = await adminRegester.findById(adminId, req.body)
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
    const adminId = req.params.id
    try{
        const deleteAdmin = await adminRegester.findByIdAndRemove(adminId)
        res.status(201).json({message : "Task Successfully deleted"})
    }catch(e){
        res.status(404).json({message : "Task not deleted"})
    }
})




module.exports = router