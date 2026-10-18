
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google Sign-In
const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body || {};

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: "Google credential is required.",
      });
    }

    if (!process.env.GOOGLE_CLIENT_ID) {
      console.error("GOOGLE_CLIENT_ID is missing from .env");

      return res.status(500).json({
        success: false,
        message: "Google Sign-In is not configured.",
      });
    }

    // Verify the credential received from the frontend.
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.sub || !payload.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid Google account information.",
      });
    }

    if (!payload.email_verified) {
      return res.status(401).json({
        success: false,
        message: "Your Google email address is not verified.",
      });
    }

    const googleId = payload.sub;
    const name = payload.name || "";
    const email = payload.email;
    const profilePicture = payload.picture || "";

    // Find the user using Google's unique account ID.
    let user = await User.findOne({ googleId });

    if (!user) {
      user = await User.create({
        googleId,
        name,
        email,
        profilePicture,
        qualification: "",
      });
    } else {
      user.name = name;
      user.email = email;
      user.profilePicture = profilePicture;

      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: "Google login successful.",
      user: {
        id: user._id,
        googleId: user.googleId,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        qualification: user.qualification,
      },
    });
  } catch (error) {
    console.error("Google login error:", error.message);

    // Invalid credentials should not be reported as server errors.
    const isCredentialError =
      error.message?.toLowerCase().includes("token") ||
      error.message?.toLowerCase().includes("audience");

    return res.status(isCredentialError ? 401 : 500).json({
      success: false,
      message: isCredentialError
        ? "Google credential is invalid or expired."
        : "Google login failed. Please try again.",
    });
  }
};

module.exports = { googleLogin };
