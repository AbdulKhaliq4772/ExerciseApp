import { configureStore } from "@reduxjs/toolkit";
import ExerciseReducer from "./ExerciseSlice";
import SingleExerciseReducer from "./SingleExerciseSlice";

const store = configureStore({
  reducer: {
    exercises: ExerciseReducer,
    singleExercise: SingleExerciseReducer,
  },
});

export default store;
