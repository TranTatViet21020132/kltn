import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { user } = useAuth();

  if (!user.email) {
    return <Navigate to="/login" />;
  }

  if (user.email && !user.is2FAVerified) {
    return <Navigate to="/verify-2fa" />;
  }
  
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
