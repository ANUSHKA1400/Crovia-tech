import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton({ onLoginSuccess }) {
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      if (!credentialResponse?.credential) {
        console.error("No Google credential received.");
        return;
      }

      // Send Google's credential to your backend
      const response = await fetch(
        "http://localhost:5000/api/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: credentialResponse.credential,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Backend Google login failed:", data);
        alert(data.message || "Google login failed.");
        return;
      }

      console.log("Google login successful:", data);

      // Save logged-in user in browser
      localStorage.setItem(
        "croviaUser",
        JSON.stringify(data.user)
      );

      // Send user information back to the parent component
      if (onLoginSuccess) {
        onLoginSuccess(data.user);
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Unable to connect to the CROVIA backend.");
    }
  };

  const handleGoogleError = () => {
    console.error("Google Sign-In failed.");
    alert("Google Sign-In failed. Please try again.");
  };

  return (
    <div className="google-login">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap={false}
      />
    </div>
  );
}

export default GoogleLoginButton;