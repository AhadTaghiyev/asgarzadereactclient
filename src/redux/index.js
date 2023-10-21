import { configureStore } from "@reduxjs/toolkit";
import testimonialReducer from "./reducers/testimonialsReducer";
import subscribeReducer from "./reducers/subscribeReducer";
import questionReducer from "./reducers/questionReducer";
import { AuthReducer } from "./reducers/authReducers";
import settingsReducer from "./reducers/settingsReducer";
import coursesReducer from './reducers/coursesReducer'
export const store = configureStore({
  reducer: {
    testimonials: testimonialReducer,
    subscribe: subscribeReducer,
    questions: questionReducer,
    courses: coursesReducer,
    settings: settingsReducer,
    auth: AuthReducer,
  },
});
