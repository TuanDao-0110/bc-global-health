const { client, hospital, admin } = require("../ultilities/role")
const user = require('../models/user')
const hospital_user = require('../models/hospital')
const admin_user = require('../models/admin')
const asyncHandler = require('express-async-handler')
const { findOne } = require("../models/hospital")
const { use } = require("../routes/data")
const register = asyncHandler(async (req, res, next) => {
    //1. check role first 
    const { role } = req.body
    if (!role) {
        return res.status(400).json({ msg: 'role not found' })
    }
    let data
    //2. set up new user client vs admin
    if (role === client || role === admin) {
        const { fullname, nickname, password, email } = req.body
        // 2.1 check nickname vs email exist ? and create
        if (role === client) {
            data = await user.findOne({ nickname }).lean() || await user.findOne({ email }).lean()
            if (data) {
                return res.status(401).json({ msg: 'user or password have been used' })
            }
            else {
                data = await user.create({ fullname, nickname, password, email })
                return res.status(201).json({ msg: `user ${nickname} have been created`, data })
            }
        }
        // 2.2 check nickname vs email exist ? and create
        if (role === admin) {
            data = await admin_user.findOne({ nickname }).lean() || await admin_user.findOne({ email }).lean()
            if (data) {
                return res.status(401).json({ msg: 'user or password have been used' })
            }
            else {
                data = await admin_user.create({ fullname, nickname, password, email })
                return res.status(201).json({ msg: `user ${nickname} have been created`, data })
            }
        }
    }

    // 3. set up new hospital. 
    if (role ===hospital){ 
        // 3.1 hospital need only id and 
    }

    return res.status(201).json({ msg: 'success' })
})




module.exports = register