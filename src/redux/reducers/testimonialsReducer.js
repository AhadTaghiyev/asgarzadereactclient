import { createSlice } from "@reduxjs/toolkit";
import { fetchTestimonials } from "../actions/testimonialsActions";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        console.error("Error: ", action.error.message);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default testimonialsSlice.reducer;
