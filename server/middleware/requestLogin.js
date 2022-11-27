const asyncHandler = require('express-async-handler')
const user = require('../models/user')


const requestLogin = asyncHandler(async (req, res, next) => {
    const { pwdToken, id: _id } = req.body
    let data = await user.findOne({ _id }).exec()
    let message = ''
    if (pwdToken !== data.password) {
        message += ' please login again/your infor have been changed or token expire'
        return res.status(401).json({ msg: message })
    }
    next()
})


module.exports = requestLogin