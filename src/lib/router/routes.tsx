import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import DriverSignup from "lib/pages/Signup_Login/Driver";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/driversignup",
    element: <DriverSignup />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
