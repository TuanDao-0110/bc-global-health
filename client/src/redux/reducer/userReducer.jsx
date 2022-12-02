import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  userProfile: {
    _id: "63840f84f53b37e04f8eea55",
    fullname: "tuan",
    nickname: "tuan",
    role: "client",
    password: "tuan",
    email: "tuan@gmail.com",
    bookingList: {
      day: [
        {
          time: "",
          hospitalId: null,
          userConfirm: false,
          hospitalConfirm: false,
          userVisitConfirm: false,
          customerNote: "",
          hospitalNote: "",
        },
      ],
      "27/11/2022": [
        {
          time: 800,
          customerId: "63840f84f53b37e04f8eea55",
          userConfirm: true,
          hospitalConfirm: false,
          userVisitConfirm: false,
          customerNote: "update tuan",
          hospitalNote: "",
          hospitalId: "63775326dfd6ff0292a4e67f",
        },
        {
          time: 830,
          customerId: "63840f84f53b37e04f8eea55",
          userConfirm: true,
          hospitalConfirm: false,
          userVisitConfirm: false,
          customerNote: "change",
          hospitalNote: "",
          hospitalId: "63775326dfd6ff0292a4e67f",
        },
        {
          time: 900,
          customerId: "63840f84f53b37e04f8eea55",
          userConfirm: true,
          hospitalConfirm: false,
          userVisitConfirm: false,
          customerNote: "headache",
          hospitalNote: "",
          hospitalId: "63775326dfd6ff0292a4e67f",
        },
      ],
    },
  },
};

const userReducer = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    getUserProfile: (state, action) => {
      const { data } = action.payload;
      return { ...state, userProfile: data };
    },
  },
});

export const { getUserProfile } = userReducer.actions;

export default userReducer.reducer;
