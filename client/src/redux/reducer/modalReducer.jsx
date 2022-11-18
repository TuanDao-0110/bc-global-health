const {  createSlice } = require("@reduxjs/toolkit");
const initalState = {
  modal: false,
  infor: null,
};

const modalReducer = createSlice({
  name: "modal",
  initialState: initalState,
  reducers: {
    close_modal: (state) => {
      return { ...state, modal: false, infor: null };
    },
    open_modal: (state, action) => {
      console.log(action);
      const { infor } = action.payload;
      return { ...state, modal: true, infor: infor };
    },
  },
});

export const { close_modal, open_modal } = modalReducer.actions;
export default modalReducer.reducer;
