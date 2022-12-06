import { createSlice } from "@reduxjs/toolkit";

const initalState = false;

const loadingReducer = createSlice({
  name: "loading",
  initialState: initalState,
  reducers: {
    openLoading: (state) => {
      return true;
    },
    closeLoading: (state) => {
      return false;
    },
  },
});

export default loadingReducer.reducer;
export const { openLoading, closeLoading } = loadingReducer.actions;
