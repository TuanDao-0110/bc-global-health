
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { setUserProfile } from "../redux/reducer/userReducer.jsx";
import { clearToken, setUpHeader, setUpToken } from "./tokenService.js";
import { closeLoadingService, openLoadingService } from "./loadingService.js";

export const handleRegister = async (userInfo, dispatch, navigate) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            method: 'post',
            url: `${BASE_URL}/register`,
            data: userInfo
        })
        if (data) {
            const { msg } = data
            alert(`${msg} please login`)
        }
        closeLoadingService(dispatch)
        navigate('/login')
    } catch (error) {
        closeLoadingService(dispatch)
        alert('nickname or email have been used')
        console.log(error)
    }


}

export const handleLogin = async (userInfo, dispatch, navigate) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            method: 'post',
            url: `${BASE_URL}/login`,
            data: userInfo,
        })
        const { token, msg, role } = data
        setUpToken(token, role)
        alert(msg)
        await handleGetUserProfile(dispatch)
        navigate('/')
    } catch (error) {
        alert('login fail')
        console.log(error)
    }
    closeLoadingService(dispatch)

}

export const handleGetUserProfile = async (dispatch) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            method: 'get',
            url: `${BASE_URL}/user`,
            headers: {
                'Authorization': `${setUpHeader()}`
            }
        })
        if (data) {
            dispatch(setUserProfile(data))
        }
    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)
}
export const handleBookingService = async (dispatch, bookingInfo, navigate) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/user/booking`,
            method: "post",
            headers: {
                Authorization: setUpHeader()
            },
            data: bookingInfo
        })
        if (data) {
            const { msg } = data
            alert(msg)
        }

    } catch (error) {
        alert('booking fail')
        console.log(error)

    }
    closeLoadingService(dispatch)
    navigate('/user/userbooking')
    // window.location.reload()
}
export const handleEditBookingNote = async (dispatch, editInfo) => {
    const { date, hospitalName, time } = editInfo
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/user/booking`,
            headers: {
                Authorization: setUpHeader()
            },
            method: 'patch',
            data: editInfo
        })
        if (data) {
            alert(`your booking's note at ${hospitalName} on ${date} at ${time} have been edited`)
            await handleGetUserProfile(dispatch)
        }
    } catch (error) {
        alert(error)
        console.log(error)
    }
    closeLoadingService(dispatch)
}
export const handleDeleteBooking = async (dispatch, deleteInfo) => {
    const { date, hospitalName, time } = deleteInfo
    openLoadingService(dispatch)
    try {
        const { msg, data } = await axios({
            url: `${BASE_URL}/user/booking`,
            headers: {
                Authorization: setUpHeader()
            },
            method: 'delete',
            data: deleteInfo
        })
        if (data) {
            await handleGetUserProfile(dispatch)
        }
        alert(`your booking at ${hospitalName} on ${date} at ${time} have been deleted`)
    } catch (error) {
        alert('fail')
        console.log(error)
    }
    closeLoadingService(dispatch)
}

export const handleEditProfile = async (dispatch, userInfo) => {
    openLoadingService(dispatch)

    try {
        const { data } = await axios({
            url: `${BASE_URL}/user`,
            method: 'patch',
            data: userInfo,
            headers: {
                Authorization: setUpHeader()
            },
        })
        if (data) {
            alert('data edit success,please login again')
            clearToken()
        }
    } catch (error) {

    }

    closeLoadingService(dispatch)
}

export const handleLogOut = async (dispatch) => {
    try {
        await openLoadingService(dispatch)
        clearToken()
    } catch (error) {
    }
    closeLoadingService(dispatch)
}