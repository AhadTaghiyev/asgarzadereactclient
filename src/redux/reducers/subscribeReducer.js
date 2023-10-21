import { createSlice } from "@reduxjs/toolkit";
import { subscribeWithEmail } from "../actions/subscribeActions";

const initialState = {
  isSubscribing: false,
  isSuccess: false,
  isError: false,
};

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeWithEmail.pending, (state) => {
        state.isSubscribing = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(subscribeWithEmail.fulfilled, (state) => {
        state.isSubscribing = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(subscribeWithEmail.rejected, (state) => {
        state.isSubscribing = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default subscribeSlice.reducer;
