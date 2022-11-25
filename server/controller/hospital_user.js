const booking_hospital = require('../models/booking_hospital')
const handlerAsync = require('express-async-handler')
const booking_list = handlerAsync(async (req, res) => {
    const { id: booking_hospital_id } = req.query
    const data = await booking_hospital.findOne({ booking_hospital_id })
    if (!data) {
        return res.status(401).json({ msg: 'booking id not found' })
    }
    return res.status(200).json({ msg: "success", data })
})


module.exports = booking_list