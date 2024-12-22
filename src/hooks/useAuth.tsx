import { createContext, useContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { HOME_ROUTE } from "@/config/path-consts";
import { LoginData } from "@/types/Data/Data";
import { SignupData } from "@/types/Data/Data";

type User = {
  email?: string;
  password?: string;
  is2FAVerified?: boolean;
};

type AuthContextType = {
  user: User;
  login: (data: LoginData) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  verify2FACode: (code: string) => Promise<boolean>;
};

type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage("user", {
    email: "",
    is2FAVerified: false,
  });

  const navigate = useNavigate();

  const login = useCallback(async (data: LoginData) => {
    if (data.email === "testuser@example.com" && data.password === "password123") {
      const isVerified = user.is2FAVerified;
      setUser({ email: data.email, is2FAVerified: isVerified });
      navigate(isVerified ? HOME_ROUTE : "/verify-2fa");
      console.log(isVerified);
    } else {
      throw new Error("Wrong username or password!");
    }
  }, [navigate, setUser, user.is2FAVerified]);

  const signup = useCallback(async (data: SignupData) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 2000);
    });

    navigate("/login", { replace: true });
  }, [navigate]);

  const logout = useCallback(() => {
    setUser({ email: "", is2FAVerified: user.is2FAVerified });
    navigate("/login", { replace: true });
  }, [navigate, setUser, user.is2FAVerified]);

  const verify2FACode = useCallback(async (code: string) => {
    if (code === "123456") {
      setUser({ email: user.email, is2FAVerified: true });
      navigate(HOME_ROUTE);
      console.log(user.email);
      return true;
    }
    return false;
  }, [setUser, user.email, navigate]);

  const value = useMemo(() => ({
    user,
    login,
    signup,
    logout,
    verify2FACode
  }), [user, login, signup, logout, verify2FACode]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
