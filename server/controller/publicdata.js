const hospital = require('../models/hospital')

const asyncHandler = require('express-async-handler')

const sendAllHospitalData = asyncHandler(async (req, res, next) => {
    const data = await hospital.find().exec()

    res.status(200).json({ msg: 'success', data })
})



module.exports = sendAllHospitalData