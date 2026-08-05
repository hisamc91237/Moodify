import React from "react";
import "../styles/login.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { user, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ username, password });
    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit" className="button primary-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
