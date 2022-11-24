const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const { userProfile, editProfile } = require('../controller/user')
router.use(verifyJWT)

router.route('/')
    // get profile information
    .get(userProfile)
    // edit profile 
    .patch(editProfile)

router.route('/booking')
// get booking
// .get()
// create booking 
// .post()
// edit booking
// .patch()
// delete booking
// .delete()

module.exports = router