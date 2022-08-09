const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete : Boolean,
    quantity : Number
})

const Task = mongoose.model('task',TaskSchema)

module.exports = Task