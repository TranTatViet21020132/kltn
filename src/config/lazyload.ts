import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("@/pages/SignupPage/SignupPage"));

function lazyLoad(path: string, namedExport: string) {
  return lazy(async () => {
    const promise = import(/* @vite-ignore */ path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

export { HomePage, LoginPage, SignupPage, lazyLoad };