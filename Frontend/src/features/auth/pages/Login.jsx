import React from "react";
import "../styles/login.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login Page</h1>
        <form>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="password" name="password" placeholder="Enter password" />
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
