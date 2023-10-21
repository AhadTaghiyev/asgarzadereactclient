import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    try {
      const response = await fetch(
        "http://bashirja-005-site10.etempurl.com/api/v1/Question/GetAllQuestions/1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
