const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roleId:{
        type:Number,
        required:true
    }
})

module.exports = new mongoose.model('user',Schema)