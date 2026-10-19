
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
// Allowed frontend origins
// --------------------------------------------------

const allowedOrigins = [
  "http://localhost:5173",
  "https://crovia-frontend.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

// --------------------------------------------------
// Middleware and CORS
// --------------------------------------------------

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header, such as health checks.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("Blocked CORS origin:", origin);
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// --------------------------------------------------
// Health check
// --------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    message: "CROVIA Backend is running",
  });
});

// --------------------------------------------------
// API routes
// --------------------------------------------------

app.use("/api/auth", authRoutes);
app.use("/api/demo", demoRoutes);

// --------------------------------------------------
// MongoDB connection and server startup
// --------------------------------------------------

if (!process.env.MONGO_URI) {
  console.error("MongoDB connection failed: MONGO_URI is not configured.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");

    app.listen(PORT, () => {
      console.log(`CROVIA Backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌:", error.message);
    process.exit(1);
  });
