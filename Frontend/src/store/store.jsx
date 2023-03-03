import { configureStore } from "@reduxjs/toolkit";
import ExerciseReducer from "./ExerciseSlice";

const store = configureStore({
  reducer: {
    exercises: ExerciseReducer,
  },
});

export default store;
