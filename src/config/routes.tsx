import { Route } from "@/config/config-type";
import { HOME_ROUTE, LOG_IN_ROUTE, SIGN_UP_ROUTE, VERIFY_2FA_ROUTE } from "@/config/path-consts";
import LoginPage from "@/pages/LoginPage/LoginPage";
import Verify2FA from "@/core/pages/Authentication/VerifyPage";
import { HomePage, SignupPage } from "@/config/lazyload";

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
  {
    path: SIGN_UP_ROUTE,
    element: <SignupPage />,
  }
];

const privateRoutes: Route[] = [

  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
];

export { publicRoutes, privateRoutes };
