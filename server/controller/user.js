const { client, hospital, admin, key } = require("../ultilities/role")
const user = require('../models/user')
const asyncHandler = require('express-async-handler')
// 1.get user profile 

const userProfile = asyncHandler(async (req, res, next) => {
    const { username } = req.body
    const data = await user.findOne({ username }).exec()
    return res.status(200).json({ msg: 'success', data })
})


const editProfile = asyncHandler(async (req, res, next) => {
    const { nickname, role, password, email, fullname, pwdToken } = req.body
    let data = await user.findOne({ nickname }).exec()
    let message = ''
    // 1. check that pwdtoken === database token or not 
    // 1.1 make sure that in case user changed password but he still using all token
    // 1.2 user have to login and get new token
    if (pwdToken !== data.password) {
        message += ' please login again'
        return res.status(401).json({ msg: message })
    }
    if (password && password !== data.password) {
        data.password = password
        data = await data.save()
        message += '--- user password updated please logout'
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