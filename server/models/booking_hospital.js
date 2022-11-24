const mongoose = require('mongoose')

const hospital_booking_schema = new mongoose.Schema({
    "booking_hospital_id": {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'hospital_users'
    },
    booking_time: {
        type: Object,
    }

})

module.exports = mongoose.model('hospital_booking', hospital_booking_schema)

// 1. so idea get hospital id and set to this booking_hospital_id 
// 2. set booking_time on 7 days 
// 3. when hospital_user register to systerm --> it all auto set up. 