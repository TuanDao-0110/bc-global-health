const hospitaluser = require('../models/hospital')

const asyncHandler = require('express-async-handler')
const { da } = require('date-fns/locale')

const sendAllHospitalData = asyncHandler(async (req, res, next) => {
    const data = await hospitaluser.find().exec()
    res.status(200).json({ msg: 'success', data })
})



module.exports = sendAllHospitalData