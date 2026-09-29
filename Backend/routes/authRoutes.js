const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const router = express.Router();

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required.",
      });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const googleId = payload.sub;
    const name = payload.name;
    const email = payload.email;
    const profilePicture = payload.picture || "";

    if (!googleId || !email) {
      return res.status(400).json({
        message: "Invalid Google account information.",
      });
    }

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
    console.error("Google login error:", error);

    return res.status(500).json({
      message: "Google login failed.",
    });
  }
});

module.exports = router;