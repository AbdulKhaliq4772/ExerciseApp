import { createSlice } from "@reduxjs/toolkit";

const singleExerciseSlice = createSlice({
  name: "singleExercise",
  initialState: {},
  reducers: {
    addSingleExercise(state, action) {
      state = action.payload;
    },
  },
});

export const { addSingleExercise } = singleExerciseSlice.actions;

export default singleExerciseSlice.reducer;
