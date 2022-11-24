const mongoose = require('mongoose')

const hospital_booking_schema = new mongoose.Schema({
    "id": String,
    "booking_hospital_id": {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'hospital_users'
    },
    booking_time : {
        type:Object,
        default:[{time:''}]
    }

})

module.exports = mongoose.model('hospital_booking', hospital_booking_schema)

