const mongoose = require('mongoose');

const { Schema } = mongoose;
const taskSchema = new Schema({
  content: {
    type: String,
    // required : true,
    // unique : true,
    // default : 'default Task',
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', taskSchema);
