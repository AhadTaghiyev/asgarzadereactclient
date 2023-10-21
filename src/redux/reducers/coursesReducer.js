import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../actions/coursesActions";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        console.error("Error: ", action.error.message);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default coursesSlice.reducer;
