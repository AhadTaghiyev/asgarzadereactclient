import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../redux/reducers/authReducers";
const storedUser = localStorage.getItem("user");
let parsedUser = null;

try {
  parsedUser = JSON.parse(storedUser);
} catch (error) {
  // Handle the JSON parsing error here, e.g., by setting parsedUser to null
  console.error("Error parsing user data from localStorage:", error);
}

const INITIAL_STATE = {
  user: parsedUser,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};