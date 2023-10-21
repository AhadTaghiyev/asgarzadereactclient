import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const response = await fetch(
        "http://bashirja-005-site10.etempurl.com/api/v1/Course/GetAllCourses/1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
