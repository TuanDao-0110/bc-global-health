import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import hospitalReducer from "./hospitalReducer";
import userReducer from "./userReducer";
const store = configureStore({
  reducer: {
    modalReducer,
    hospitalReducer,
    userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
