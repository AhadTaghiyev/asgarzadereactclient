// actions/testimonialsActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    try {
      const response = await fetch(
        "http://bashirja-005-site10.etempurl.com/api/v1/Testimonial/GetAllTestimonials/1"
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
