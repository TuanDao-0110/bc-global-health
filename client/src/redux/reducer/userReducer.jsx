import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  userProfile: {},
};

const userReducer = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    setUserProfile: (state, action) => {
      const { data } = action.payload;
      return { ...state, userProfile: data };
    },
  },
});

export const { setUserProfile } = userReducer.actions;

export default userReducer.reducer;
