const { client, hospital, admin, key } = require("../ultilities/role")
const user = require('../models/user')
const booking_hospital = require('../models/booking_hospital')
const asyncHandler = require('express-async-handler')
// 1.get user profile 

const userProfile = asyncHandler(async (req, res, next) => {
    const { id: _id } = req.body
    const data = await user.findOne({ _id }).exec()
    if (!data) {
        return res.status(401).json({ msg: 'user not found' })
    }
    return res.status(200).json({ msg: 'success', data })
})

// require log out when password success changed
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

const setBooking = asyncHandler(async (req, res, next) => {
    const { hospitalId: booking_hospital_id, id: _id
        , nickname, pwdToken, bookingDate, bookingTime, customerNote } = req.body
    // 1. find hospital vs find user information
    const data = await booking_hospital.findOne({ booking_hospital_id })
    const foundUser = await user.findOne({ _id })
    let { bookingList } = foundUser
    if (!data) {
        return res.status(401).json({ msg: 'hospital booking not found' })
    }
    // 2. find date and time to fixed
    let { booking_time: newBookingTime, booking_hospital_id: hospitalId } = data
    for (let date in newBookingTime) {
        if (date === bookingDate) {
            newBookingTime[date].map((list, index) => {
                if (list.time === bookingTime) {
                    // found the time on booking list 
                    // 1. changed it to user confirm
                    list.userConfirm = true
                    list.customerId = _id
                    // set to user profile
                    let temp = { ...list }
                    temp.hospitalId = booking_hospital_id
                    temp.customerNote = customerNote
                    if (Object.keys(bookingList).includes(bookingDate)) {
                        bookingList[bookingDate].push(temp)

                    } else {
                        bookingList[bookingDate] = []
                        bookingList[bookingDate].push(temp)
                    }

                }
            })
        }
    }

    // set update data to hospital booking 
    await data.updateOne({ booking_time: newBookingTime })
    await user.updateOne({ bookingList })
    return res.status(200).json({ msg: 'Booking added', bookingList })
})


const editBooking = asyncHandler(async (req, res, next) => {
    const { id: _id, hospitalId, userConfirm, time, customerNote } = req.body
    // 1. find user information vs booking systerm
    const foundUser = await user.findOne({ _id })
    const fountBooking = await booking_hospital.findOne({ hospitalId })
    // 2. check that some thing different compare to origin data
    const { time: oldTime, userConfirm: oldUserConfirm, customerNote: oldCustomerNote, date: oldDate } = foundUser
    
    return res.status(200).json({ msg: 'booking edited success' })

})

module.exports = { userProfile, editProfile, setBooking }