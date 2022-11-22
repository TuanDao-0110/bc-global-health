

import axios from 'axios'
import { newHospital } from '../redux/reducer/hospitalReducer'


const getAlldata = async (dispatch) => {
    try {
        const {data} = await axios({
            method: 'GET',
            url: `http://localhost:4000/hospital_data`
        })

        const hospital_data = data.data
        dispatch(
            newHospital({ hospital_data })
        )
    } catch (error) {
        console.log(error)

    }
}

export default getAlldata