const usermodel = require('../models/user');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
    try {
        let existUser = await usermodel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(200).json({
                error: true
            })
        } else {
            const hashPassword = await bcrypt.hash(req.body.password, 10);

            const userObj = {
                username: req.body.Username,
                email: req.body.email,
                password: hashPassword,
                roleId: req.body.roleId
            }

            await usermodel.create(userObj);

            res.status(201).json({
                error: false
            })
        }
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.getUser = async (req, res) => {
    try {

        let data = await usermodel.find()

        res.status(200).json({
            data: data,
            error: false
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        productId = req.params.id

        const updateData = {
            fullName: req.body.fullName,
            email: req.body.email,
            contactNumber: req.body.contactNumber
        }

        await usermodel.findByIdAndUpdate(productId, updateData)

        res.status(200).json({
            error: false
        })

    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        productId = req.params.id
        console.log(productId, 'productId')

        await usermodel.deleteOne({ _id: productId })

        res.status(200).json({
            error: false
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.getSingleData = async (req, res) => {
    try {
        const singleData = await usermodel.findOne({ _id: req._id })

        res.status(200).json({
            error: false,
            data: singleData
        })
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.getuserlistacctorole = async (req, res) => {
    try {
        roleId = req.params.roleId
        let userdata
        if (roleId == '1') {
            userdata = await usermodel.find()
        }else if(roleId == '2'){
            userdata = await usermodel.find({$or:[{roleId:2}, {roleId:3}]})
        }else{
            userdata = await usermodel.find({_id: req._id})
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

