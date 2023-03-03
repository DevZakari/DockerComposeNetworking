const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});




exports.Todo = mongoose.model('Todo',todoSchema);