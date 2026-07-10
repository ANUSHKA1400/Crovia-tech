// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"; 
import { Navigate, useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary Admin Credentials
    if (username === "admin" && password === "violet123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/leadership");
    } else {
      setError("Invalid Username or Password");
    }
  };
  if (localStorage.getItem("isAdmin")) {
    return <Navigate to="/admin/leadership" replace />;
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2">
              {error}
            </div>
          )}

          <button className="btn btn-violet w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}