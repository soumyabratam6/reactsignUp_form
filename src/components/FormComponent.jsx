// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function FormComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(password, value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError && passwordError && confirmPasswordValid) {
      alert("Can't submit the form");
    } else {
      alert("Form submitted successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="form-container p-4 bg-light border rounded">
        <h2 className="mb-4 text-center">SignUp Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className={`form-control ${
                emailError ? "is-invalid" : "is-valid"
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="invalid-feedback">{emailError}</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${
                passwordError ? "is-invalid" : "is-valid"
              }`}
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="invalid-feedback">{passwordError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${
                confirmPasswordValid === null
                  ? ""
                  : confirmPasswordValid
                  ? "is-valid"
                  : "is-invalid"
              }`}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <div className="invalid-feedback">Passwords do not match.</div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
