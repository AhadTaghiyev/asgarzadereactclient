import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSettingss = createAsyncThunk(
  "settings/fetchSettingss",
  async () => {
    try {
      const response = await fetch(
        "http://bashirja-005-site10.etempurl.com/api/v1/Setting/GetSetting"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
