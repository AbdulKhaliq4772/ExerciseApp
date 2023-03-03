import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercises",
  initialState: [],
  reducers: {
    addExercise(state, action) {
      return action.payload;
    },
    deleteExercise(state, action) {
      return state.filter((exercise) => exercise.id !== action.payload);
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
