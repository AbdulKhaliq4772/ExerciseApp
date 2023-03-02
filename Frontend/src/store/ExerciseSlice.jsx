import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercises",
  initialState: [],
  reducers: {
    addExercise(state, action) {
      return action.payload;
      // console.log(action.payload);
    },
    // deleteExercise(state, action) {
    //   //   return state.filter();
    // },
  },
});

export const { addExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
