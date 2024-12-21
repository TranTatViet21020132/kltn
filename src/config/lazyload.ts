import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));

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

export { HomePage, lazyLoad };