import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "../actions/questionsActions";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        console.error("Error: ", action.error.message);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default questionsSlice.reducer;
