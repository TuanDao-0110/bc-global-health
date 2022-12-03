
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { setUserProfile } from "../redux/reducer/userReducer.jsx";
import { setUpHeader, setUpToken } from "./tokenService.js";
import { closeLoadingService, openLoadingService } from "./loadingService.js";
import AlertSucces from "../component/alert/AlertSucces.jsx";
import { da, ms } from "date-fns/locale";

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
        const { token, msg } = data
        setUpToken(token)
        alert(msg)
        navigate('/')
        // closeLoadingService(dispatch)
    } catch (error) {
        alert('login fail')
        console.log(error)
    }
    closeLoadingService(dispatch)

}

export const handleGetUserProfile = async (dispatch) => {
    openLoadingService(dispatch)
    try {
        const { data, msg } = await axios({
            method: 'post',
            url: `${BASE_URL}/user`,
            headers: `${setUpHeader()}`
        })
        if (data) {
            dispatch(setUserProfile(data))
        }
    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)
}
export const handleBookingService = async (dispatch, bookingInfo,navigate) => {
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
    navigate('/portfolio')
    // window.location.reload()
}
