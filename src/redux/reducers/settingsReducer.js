import { createSlice } from "@reduxjs/toolkit";
import { fetchSettingss } from "../actions/settingsActions";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettingss.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSettingss.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSettingss.rejected, (state, action) => {
        console.error("Error: ", action.error.message);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default settingsSlice.reducer;
