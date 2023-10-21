import axios from "axios";

export const api = async (credentials) => {
  try {
    // Replace with your actual login URL
    const response = await axios.post(
      "http://bashirja-005-site10.etempurl.com/api/v1/Identity/Login",
      credentials
    );

   

    // Assuming the API returns user data and a token
    const { user, token } = response.data;

    return { user, token };
  } catch (error) {
    throw error;
  }
};
