import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import About from "../pages/About";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/terms",
        Component: TermsAndConditions,
      },
      {
        path: "/privacy",
        Component: PrivacyPolicy,
      },
    ],
  },
]);
