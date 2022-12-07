import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  hospitalUserInfor: [],
  hospitalBookingList: [],
};

const hospitalUserReducer = createSlice({
  name: "hospital_user_reducer",
  initialState: initalState,
  reducers: {
    getHospitalUserInfor: (state, action) => {
      const { hospitalUserInfor } = action.payload;
      return { ...state, hospitalUserInfor: hospitalUserInfor };
    },
    getHospitalBooking: (state, action) => {
      const { hospitalBookingList } = action.payload;
      return { ...state, hospitalBookingList: hospitalBookingList };
    },
  },
});

export const { getHospitalUserInfor, getHospitalBooking } = hospitalUserReducer.actions;
export default hospitalUserReducer.reducer;
