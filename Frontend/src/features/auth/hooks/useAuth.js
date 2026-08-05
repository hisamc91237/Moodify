import { login, register, getMe, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";

/* Hook Layer */

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);

    const data = await register({ username, email, password });
    setUser(data.user);

    setLoading(false);
  };

  const handleLogin = async ({ username, email, password }) => {
    setLoading(true);
    const data = await login({ username, email, password });
    setUser(data.user);
    setLoading(false);
  };

  const handleGetMe = async () => {
    setLoading(true);
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    const data = await logout();
    setUser(data.user);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    loading,
    handleRegister,
    handleGetMe,
    handleLogin,
    handleLogout,
  };
};
