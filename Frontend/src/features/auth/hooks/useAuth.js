import { login, register, getMe, logout } from "../services/auth.api";
import { useContext } from "react";
import { AuthContext } from "../auth.context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setuser, loading, setLoading } = context;

  const handleRegister = async (username, email, password) => {
    setLoading(true);

    const data = await register(username, email, password);
    setUser(data.user);

    setLoading(false);
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    const data = await login(username, password);
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
};
