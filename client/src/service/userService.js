
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getUserProfile } from "../redux/reducer/userReducer.jsx";
import { setUpToken } from "./tokenService.js";



export const handleRegister = async (userInfo) => {
    try {
        const data = await axios.post({
            url: `${BASE_URL}/register`,
            data: userInfo
        })
        const { msg } = data
        alert(`${msg}`)
    } catch (error) {
        console.log(error)
    }
}

export const handleLogin = async (userInfo, dispatch) => {
    try {
        const { token, msg } = await axios.post({
            url: `${BASE_URL}/login`,
            data: userInfo
        })
        setUpToken()
        alert(msg)
    } catch (error) {
        console.log(error)
    }
}