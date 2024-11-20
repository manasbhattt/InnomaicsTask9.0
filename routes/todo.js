const express = require('express');
const router = express.Router();
const { Todo } = require('../models/todo');


router.get('/api/todos', async (req, res) => {
    try {
      const data = await Todo.find({});
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  });


router.post('/api/todo/add',  async(req, res) => {
  try{
    const task = await Todo.create(req.body)
    res.status(200).json(task);
  }catch(err){
    console.log(err);
    res.status(500).json({message: error.message})
  }
})

router.get('/api/todo/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const task = await Todo.findById(id);
      res.status(200).json(task);
  } catch (err) {
      res.status(500).json({message: error.message})
  }
})


router.put('/api/todo/:id', async(req, res) => {
  try {
      const {id} = req.params;
      const task = await Todo.findByIdAndUpdate(id, req.body);
      if(!task){
          return res.status(404).json({message: `cannot find any task with ID ${id}`})
      }
      const updatedTask = await Todo.findById(id);
      res.status(200).json(updatedTask);
      
  } catch (err) {
      res.status(500).json({message: error.message})
  }
})


router.delete('/api/todo/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const task = await Todo.findByIdAndDelete(id);
      if(!task){
          return res.status(404).json({message: `cannot find any task with ID ${id}`})
      }
      res.status(200).json(task);
      
  } catch (err) {
      res.status(500).json({message: error.message})
  }
})
module.exports = router;