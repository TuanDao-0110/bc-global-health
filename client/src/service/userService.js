
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getUserProfile } from "../redux/reducer/userReducer.jsx";
import { setUpToken } from "./tokenService.js";
import { closeLoadingService, openLoadingService } from "./loadingService.js";

export const handleRegister = async (userInfo, dispatch, navigate) => {
    openLoadingService(dispatch)
    try {
        const {data} = await axios({
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

export const handleLogin = async (userInfo, dispatch) => {
    try {
        const { token, msg } = await axios({
            method: 'post',
            url: `${BASE_URL}/login`,
            data: userInfo,
        })
        setUpToken()
        alert(msg)
    } catch (error) {
        console.log(error)
    }
}