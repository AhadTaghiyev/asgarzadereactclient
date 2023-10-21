// import { LOGIN_SUCCESS } from "../constants/authConstants";
// import { api } from "./../../API/HttpClient";

// export const login = (credentials) => async (dispatch) => {
//     try {
//         console.log(credentials+"authActions");
//         const response = await api.login(credentials);
//         const { user, token } = response.data;
//         dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });
//     } catch (error) {
//         console.error("Login failed:", error);
//     }
// };
