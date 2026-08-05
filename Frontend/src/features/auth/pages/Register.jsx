import React, { useState } from "react";
import "../styles/register.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { user, loading, handleRegister } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  };

  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit" className="button primary-button">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
