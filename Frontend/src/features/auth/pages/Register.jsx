import React from "react";
import "../styles/register.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register Page</h1>
        <form>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="email" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />
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
