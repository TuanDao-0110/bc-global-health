const express = require('express')
const router = express.Router()


router.route('/')

    // get profile information
    .get()
    // edit profile 
    .path()

router.route('/booking')
    // get booking
    .get()
    // create booking 
    .post()
    // edit booking
    .patch()
    // delete booking
    .delete()

export default router