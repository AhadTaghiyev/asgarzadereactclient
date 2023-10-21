import { createAsyncThunk } from "@reduxjs/toolkit";

export const subscribeWithEmail = createAsyncThunk(
  "subscribe/subscribeWithEmail",
  async (email) => {
    try {
      const response = await fetch(
        "http://bashirja-005-site10.etempurl.com/api/v1/Subscriber/CreateSubscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
