/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("croviaUser")));

    if (localStorage.getItem("croviaLoginSuccess") === "true") {
      localStorage.removeItem("croviaLoginSuccess");
      setPopupMessage("You have successfully logged in!");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("croviaUser");
    localStorage.removeItem("croviaLoginSuccess");
    setIsLoggedIn(false);
    setPopupMessage("You have successfully logged out!");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top crovia-navbar">
        <div className="container">
          {/* Logo and company branding */}
          <a className="navbar-brand" href="#home">
            <img
              src={logo}
              alt="Crovia Logo"
              width="65"
              height="65"
              className="crovia-logo"
            />

            <div className="brand-text">
              <span className="brand-name">CROVIA TECH</span>
              <span className="brand-tagline">Pvt. Ltd.</span>
            </div>
          </a>

          {/* Mobile menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Technologies", "#technology"],
                ["Projects", "#projects"],
                ["Partners", "#partners"],
                ["Why Choose US", "#whychooseus"],
              ].map(([label, href]) => (
                <li className="nav-item" key={label}>
                  <a className="nav-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}

              {/* Navbar Book Meeting button */}
              <li className="nav-item nav-action">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSctD2_nIBmQvmfC97X-Ly1X2XIbfCRUUV4pNd3MA42tCcKP6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn crovia-meeting-btn"
                >
                  Book Meeting
                </a>
              </li>

              {/* Sign In / Log Out */}
              <li className="nav-item nav-action">
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn crovia-auth-btn"
                  >
                    Log Out
                  </button>
                ) : (
                  <a href="/signin" className="btn crovia-auth-btn">
                    Sign In
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login / Logout popup */}
      {popupMessage && (
        <div
          className="crovia-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Login status"
        >
          <div className="crovia-popup bg-white shadow p-4 text-center">
            <div className="crovia-popup-icon">✓</div>

            <h4 className="fw-bold mt-2" style={{ color: "#102F4F" }}>
              {popupMessage.includes("logged in")
                ? "Login Successful!"
                : "Logged Out"}
            </h4>

            <p className="text-muted">{popupMessage}</p>

            <button
              type="button"
              className="btn crovia-meeting-btn"
              onClick={() => setPopupMessage("")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;