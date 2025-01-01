const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    taskOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps:true})

module.exports = new mongoose.model('task',Schema)