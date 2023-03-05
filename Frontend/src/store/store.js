import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "../store/exerciseSlice";
import toggleReducer from "../store/toggleSlice";

export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    toggle: toggleReducer,
  },
});
