const user = require('../models/user')
const hospital_user = require('../models/hospital')
const admin_user = require('../models/admin')
const asyncHandler = require('express-async-handler')
const register = asyncHandler((req, res, next) => {
    console.log(req.body)
    res.status(201).json({ msg: 'success' })
})