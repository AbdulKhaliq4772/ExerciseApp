import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "../store/exerciseSlice";

export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
