const express = require('express')
const router = express.Router()
const alldata = require('../controller/publicdata')
// send all public data

router.route('/').get(alldata)

module.exports = router




