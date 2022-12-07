import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  hospitalUserInfor: [],
};

const hospitalUserReducer = createSlice({
  name: "hospital_user_reducer",
  initialState: initalState,
  reducers: {
    getHospitalUserInfor: (state, action) => {
      const { hospitalUserInfor } = action.payload;
      return { ...state, hospitalUserInfor: hospitalUserInfor };
    },
  },
});

export const { getHospitalUserInfor } = hospitalUserReducer.actions;
export default hospitalUserReducer.reducer;
