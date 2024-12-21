import { Route } from "./config-type";
import { HOME_ROUTE, LOG_IN_ROUTE, VERIFY_2FA_ROUTE } from "./path-consts";
import LoginPage from "@/pages/LoginPage/LoginPage";
import Verify2FA from "@/core/pages/Authentication/VerifyPage";
import { HomePage } from "./lazyload";

/* Routes Component */
const publicRoutes: Route[] = [
  {
    path: LOG_IN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: VERIFY_2FA_ROUTE,
    element: <Verify2FA />,
  },
];

const privateRoutes: Route[] = [

  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
];

export { publicRoutes, privateRoutes };
