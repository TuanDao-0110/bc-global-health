import axios from "axios"
import { getHospitalBooking, getHospitalUserInfor } from "../redux/reducer/hospitalUserReducer"
import { BASE_URL } from "../util/url"
import { closeLoadingService, openLoadingService } from "./loadingService"
import { setUpHeader } from "./tokenService"

export const getHospitalUserInfoService = async (dispatch) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_user`,
            headers: {
                Authorization: setUpHeader()
            },
            method: 'get'
        })
        if (data) {
            dispatch(getHospitalUserInfor({ hospitalUserInfor: data?.data }))
        }
    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)
}
export const getHospitalBookingInfoService = async (dispatch) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            method: 'get',
            headers: {
                Authorization: setUpHeader()
            },
            url: `${BASE_URL}/hospital_user/booking_list`
        })
        if (data) {
            dispatch(getHospitalBooking({ hospitalBookingList: data.data }))
        }

    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)
}

export const editHospitalBooking = async (dispatch, editInfo) => {
    let newBookingInfo = {}
    const { date, time, customerId, userConfirm, hospitalConfirm, userVisitConfirm, customerNote, hospitalNote, bookingId } = editInfo
    Object.assign(newBookingInfo, {
        date, time, customerId, userConfirm, hospitalConfirm, userVisitConfirm, customerNote, hospitalNote
    })
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_user?bookingId=${String(bookingId)}`,
            method: 'patch',
            headers: {
                Authorization: setUpHeader()
            },
            data:{
                bookingEdit:newBookingInfo
            }
        })
        if (data) {
            const { msg } = data
            alert(msg)
            await getHospitalBookingInfoService(dispatch)
        }
        window.location.reload()
    } catch (error) {
        alert('edit fail')
        console.log(error)
    }
    closeLoadingService(dispatch)
}