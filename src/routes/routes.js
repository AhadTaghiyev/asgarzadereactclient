import MainRoot from "./../pages/MainRoot";
import Home from "./../pages/Home";
import AboutUs from "./../pages/AboutUs";
import Courses from "./../pages/Courses";
import Downloads from "./../pages/Downloads";
import Login from "./../pages/Login";
import ForgotPassword from "./../pages/ForgotPassword";
import ResetPassword from "./../pages/ResetPassword";
import Signup from "./../pages/Signup";
import Course from "./../pages/Course";
import UserProfile from "./../pages/UserProfile";
import Payment from "./../pages/Payment";
import Video from "../pages/Video";
import CoursesRoot from "../pages/CoursesRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "courses/",
        element: <CoursesRoot />,
        children: [
          {
            path: "",
            element: <Courses />,
          },
          {
            path: ":_id",
            element: <Course />,
          },
        ],
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "downloads",
        element: <Downloads />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "video/:id",
        element: <Video />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      
      
    ],
  },
];
