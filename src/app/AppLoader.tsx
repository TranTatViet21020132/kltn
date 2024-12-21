import React, { Suspense } from "react";
import i18nTranslation from "@/core/config/i18n";
import LoadingPage from "@/core/pages/LoadingPage/LoadingPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage, { errorHandler } from "@/core/pages/ErrorPage/ErrorPage";

const App = React.lazy(async () => {
  await Promise.all([i18nTranslation.initialize()]);
  return import("./App");
});

const AppLoader = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={errorHandler}>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
    </ErrorBoundary>
  );
};

export default AppLoader;
