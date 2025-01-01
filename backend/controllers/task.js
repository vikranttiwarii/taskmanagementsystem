const e = require('express');
const taskmodel = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        let taskObj = {
            title: req.body.title,
            discription: req.body.discription,
            status: 'Pending',
            taskOwnerId: req._id,
            assignTo: req.body.assignTo
        }
        await taskmodel.create(taskObj);

        res.status(201).json({
            error: false
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.getTask = async (req, res) => {
    try {
        let roleId = req.body.roleId
        let status = req.body.status
        let userdata
        if (roleId == '1') {
            if (status&&status!='Both') {
                userdata = await taskmodel.find({ status: status })
            }else if(status=='Both') {
                userdata = await taskmodel.find({ $or: [{ status: 'Pending' }, { status: 'Completed' }] })
            }
            else {
                userdata = await taskmodel.find()
            }
        } else if (roleId == '2') {
            if (status && status != 'Both') {
                userdata = await taskmodel.find({
                    $and: [
                        { status: status },
                        {
                            $or: [
                                { taskOwnerId: req._id },
                                { assignTo: req._id }
                            ]
                        }
                    ]
                })
            } else if(status=='Both') {
                userdata = await taskmodel.find({
                    $and: [
                        {  $or: [{ status: 'Pending' }, { status: 'Completed' }]},
                        {
                            $or: [
                                { taskOwnerId: req._id },
                                { assignTo: req._id }
                            ]
                        }
                    ]
                })
            }
            else {
                userdata = await taskmodel.find({ $or: [{ taskOwnerId: req._id }, { assignTo: req._id }] })
            }
        } else {
            if (status && status != 'Both') {
                userdata = await taskmodel.find({
                    $and: [
                        { status: status },
                        {
                            $or: [
                                { taskOwnerId: req._id },
                                { assignTo: req._id }
                            ]
                        }
                    ]
                })
            } else if(status=='Both') {
                userdata = await taskmodel.find({
                    $and: [
                        {  $or: [{ status: 'Pending' }, { status: 'Completed' }]},
                        {
                            $or: [
                                { taskOwnerId: req._id },
                                { assignTo: req._id }
                            ]
                        }
                    ]
                })
            }
            else {
                userdata = await taskmodel.find({ $or: [{ taskOwnerId: req._id }, { assignTo: req._id }] })
            }
        }
        res.status(200).json({
            error: false,
            data: userdata
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        let result
        if (req.body.title) {
            result = await taskmodel.updateOne(
                { _id: req.body.taskId },
                { $set: { title: req.body.title, discription: req.body.discription, assignTo: req.body.assignTo, status: 'Pending', updatedAt: new Date() } }
            );
        } else {
            result = await taskmodel.updateOne(
                { _id: req.body.taskId },
                { $set: { status: 'Completed', updatedAt: new Date() } }
            );
        }
        res.status(200).json({
            error: false,
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await taskmodel.deleteOne({ _id: req.params.id });
        res.status(200).json({
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}