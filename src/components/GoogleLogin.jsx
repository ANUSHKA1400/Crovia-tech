import { useEffect, useRef, useState } from "react";
import { GoogleLogin as GoogleButton } from "@react-oauth/google";

export default function GoogleLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    // Reset loading if the component is mounted again.
    setLoading(false);
  }, []);

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      setError("Google did not return a credential. Please try again.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://crovia-backend.onrender.com/api/auth/google",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            credential: credentialResponse.credential,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Google sign-in failed.");
      }

      if (!data.user) {
        throw new Error("The backend did not return user details.");
      }

      localStorage.setItem("croviaUser", JSON.stringify(data.user));
      localStorage.setItem("croviaLoginSuccess", "true");
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f7fc" }}
    >
      <div
        className="card shadow p-4 p-md-5 text-center"
        style={{ maxWidth: "440px", width: "100%", borderRadius: "20px" }}
      >
        <h2 className="fw-bold mb-2" style={{ color: "#2A165D" }}>
          Welcome Back
        </h2>

        <p className="text-muted mb-4">
          Sign in to CROVIA TECH
        </p>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {loading ? (
          <p>Please wait, signing you in...</p>
        ) : (
          <div className="d-flex justify-content-center">
            <GoogleButton
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google sign-in was unsuccessful.")}
              useOneTap={false}
              text="signin_with"
              shape="pill"
              width="280"
            />
          </div>
        )}

        <a
          href="/"
          className="mt-4 text-decoration-none"
          style={{ color: "#2A165D" }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
