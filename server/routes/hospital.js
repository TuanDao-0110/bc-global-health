const express = require('express')
const router = express.Router()
const { getHospitalInfo, editHospitalBooking } = require('../controller/hospital_user')
const requestLogin = require('../middleware/requestLogin')
const verifyJWT = require('../middleware/verifyJWT')
router.use(verifyJWT, requestLogin)

router.route('/')
    .get(getHospitalInfo)
    .patch(editHospitalBooking)
module.exports = router