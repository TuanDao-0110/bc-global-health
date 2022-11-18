import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import hospitalReducer from "./hospitalReducer";
const store = configureStore({
  reducer: {
    modalReducer,
    hospitalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
