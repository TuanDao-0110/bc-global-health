
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getUserProfile } from "../redux/reducer/userReducer.jsx";



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
        const data = await axios.post({
            url: `${BASE_URL}/login`,
            data: userInfo
        })
    } catch (error) {

    }
}