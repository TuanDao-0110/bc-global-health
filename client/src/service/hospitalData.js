
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getHospital, getHospitalById } from '../redux/reducer/hospitalReducer'
import { closeLoadingService, openLoadingService } from "./loadingService.js";



export const getAllHospitalList = async (dispatch) => {
    openLoadingService(dispatch)
    console.log('get all hospital')
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_list`,
        });

        dispatch(getHospital(data))

        setTimeout(() => {
            closeLoadingService(dispatch)
        }, 1000)
    } catch (error) {
        closeLoadingService(dispatch)
        console.log(error)
    }
}

export const getHospitaBookingListById = async (dispatch, id) => {
    openLoadingService(dispatch)
    try {
        const { data } = await axios({
            url: `${BASE_URL}/hospital_data/hospital_booking?id=${id}`
        })

        dispatch(getHospitalById(data))
        setTimeout(() => {
            closeLoadingService(dispatch)
        }, 1000)
    } catch (error) {
        closeLoadingService(dispatch)
        console.log(error)
    }
}


