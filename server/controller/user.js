const { client, hospital, admin, key } = require("../ultilities/role")
const user = require('../models/user')
const asyncHandler = require('express-async-handler')
const { use } = require("../routes/data")
const { el } = require("date-fns/locale")
// 1.get user profile 

const userProfile = asyncHandler(async (req, res, next) => {
    const { username } = req.body
    const data = await user.findOne({ username }).exec()
    return res.status(200).json({ msg: 'success', data })
})


const editProfile = asyncHandler(async (req, res, next) => {
    const { nickname, role, password, email, fullname } = req.body
    let data = await user.findOne({ nickname }).exec()
    let message = ''
    if (password && password !== data.password) {
        data.password = password
        data = await data.save()
        message += '--- user password updated'
    }
    if (email && email !== data.email) {
        let check = await user.findOne({ email }).lean()

        if (!check) {
            data.email = email
            data = await data.save()
            message += '--- user email updated'
        } else {
            message += '-- email have been used'
        }
    }
    if (fullname && fullname !== data.fullname) {
        data.fullname = fullname
        data = await data.save()
        message += '--- user full name updated'
    }

    return res.status(201).json({ msg: `update user ${nickname} updated as ${message.length > 5 ? message : 'nothing '}`, })

})




module.exports = { userProfile, editProfile }