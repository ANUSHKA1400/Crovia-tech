/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const demoRoutes = require("./routes/demoRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// --------------------------------------------------
// Middleware
// --------------------------------------------------

const allowedOrigins = [
  "http://localhost:5173",
  "https://crovia-frontend.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("Blocked CORS origin:", origin);
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options(/.*/, cors());



// --------------------------------------------------
// Test route
// --------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    message: "CROVIA Backend is running",
  });
});

// --------------------------------------------------
// Routes
// --------------------------------------------------

app.use("/api/auth", authRoutes);

app.use("/api/demo", demoRoutes);

// --------------------------------------------------
// MongoDB Connection
// --------------------------------------------------

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");

    app.listen(PORT, () => {
      console.log(
        `CROVIA Backend running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed ❌:",
      error.message
    );
  });
