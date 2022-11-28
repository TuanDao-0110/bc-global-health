
import { BASE_URL } from "../util/url.js";
import axios from 'axios'
import { getHospital } from '../redux/reducer/hospitalReducer'



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