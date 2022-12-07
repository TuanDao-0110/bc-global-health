import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import hospitalReducer from "./hospitalReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import hospitalUserReducer from "./hospitalUserReducer";
const store = configureStore({
  reducer: {
    modalReducer,
    hospitalReducer,
    userReducer,
    loadingReducer,
    hospitalUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
