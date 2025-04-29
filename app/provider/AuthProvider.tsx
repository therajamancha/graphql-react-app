import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { authService } from "~/services/auth.services";
import type { User } from "~/types/auth";

const AuthContext = createContext<{
  user?: User;
  setUser: (user: User) => void;
}>({
  user: undefined,
  setUser: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await authService.getCurrentUser();
      if (response.user) {
        setUser(response.user);
      } else {
        setUser(undefined);
        navigate("/admin/login");
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
