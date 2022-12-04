const booking_hospital = require('../models/booking_hospital')
const handlerAsync = require('express-async-handler')
const hospital = require('../models/hospital')
const booking_list = handlerAsync(async (req, res) => {
    const { id: booking_hospital_id } = req.query
    const data = await booking_hospital.findOne({ booking_hospital_id })
    if (!data) {
        return res.status(401).json({ msg: 'booking id not found' })
    }
    return res.status(200).json({ msg: "success", data })
})

const getHospitalInfo = handlerAsync(async (req, res, next) => {
    const { id: _id, pwdToken: password, role, hospitalId } = req.body

    // 1. find hospital  
    let foundHospitalUser = await hospital.find({ id: hospitalId })
    if (!foundHospitalUser) return res.status(401).json({ msg: 'fail to find hosital data' })
    return res.status(200).json({ msg: 'success', data: foundHospitalUser })
})

const editHospitalBooking = handlerAsync(async (req, res, next) => {
    const { id: _id, pwdToken: password, role, hospitalId } = req.body


})


module.exports = { booking_list, getHospitalInfo,editHospitalBooking }