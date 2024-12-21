import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { publicRoutes, privateRoutes } from "@/config/routes";
import MainLayout from "@/layouts/MainLayout";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
      <Route element={<MainLayout />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
