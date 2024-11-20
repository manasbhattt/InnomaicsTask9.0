let mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    Task: {
        type:String,
        required:true
    }
});
module.exports = {Todo}
