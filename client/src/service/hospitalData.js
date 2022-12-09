
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getHospital, getHospitalById } from '../redux/reducer/hospitalReducer'
import { closeLoadingService, openLoadingService } from "./loadingService.js";



export const getAllHospitalList = async (dispatch) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_list`,
        });
        dispatch(getHospital(data))
    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)

}

export const getHospitaBookingListById = async (dispatch, id) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_booking?id=${id}`
        })

        dispatch(getHospitalById(data))
    } catch (error) {
        console.log(error)
    }
    closeLoadingService(dispatch)

}


