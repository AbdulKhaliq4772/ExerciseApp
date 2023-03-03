import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: [],
  reducers: {
    addExercise(state, action) {
      return action.payload;
    },
    deleteExercise(state, action) {
      return state.filter((exercise) => exercise.id !== action.payload);
    },
    updateExercise(state, action) {},
  },
});

export const { addExercise, deleteExercise, updateExercise } =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
