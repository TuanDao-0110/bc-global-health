import { closeLoading, openLoading } from "../redux/reducer/loadingReducer"

export const openLoadingService = (dispatch) => {
    return dispatch(openLoading())
}
export const closeLoadingService = (dispatch) => {
    return dispatch(closeLoading())
}