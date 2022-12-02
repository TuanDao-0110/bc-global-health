
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getHospital, getHospitalById } from '../redux/reducer/hospitalReducer'



export const getAllHospitalList = async (dispatch) => {


    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_list`,
        });

        dispatch(getHospital(data))
    } catch (error) {
        console.log(error)
    }
}

export const getHospitaBookingListById = async (dispatch, id) => {
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_booking?id=${id}`
        })
        dispatch(getHospitalById(data))
    } catch (error) {

    }
}


