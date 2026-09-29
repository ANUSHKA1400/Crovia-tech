const express = require("express");
const DemoRequest = require("../models/DemoRequest");

const router = express.Router();

// Submit Free Demo Request
router.post("/free-demo", async (req, res) => {
  try {
    const {
      googleId,
      schoolName,
      principalContact,
      principalName,
      schoolLocation,
      strength,
      preferredDemoDate,
      preferredDemoTime,
      programType,
      classesInterested,
      email,
      designation,
      schoolAddress,
      demoMode,
    } = req.body;

    // Validate required fields
    if (
      !googleId ||
      !schoolName ||
      !principalContact ||
      !principalName ||
      !schoolLocation ||
      strength === undefined ||
      !preferredDemoDate ||
      !preferredDemoTime ||
      !programType ||
      !Array.isArray(classesInterested) ||
      classesInterested.length === 0 ||
      !email ||
      !designation ||
      !schoolAddress ||
      !demoMode
    ) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    // Create demo request
    const demoRequest = await DemoRequest.create({
      googleId,
      schoolName,
      principalContact,
      principalName,
      schoolLocation,
      strength,
      preferredDemoDate,
      preferredDemoTime,
      programType,
      classesInterested,
      email,
      designation,
      schoolAddress,
      demoMode,
    });

    res.status(201).json({
      message: "Free demo request submitted successfully.",
      demoRequest,
    });
  } catch (error) {
    console.error("Free demo request error:", error);

    res.status(500).json({
      message: "Failed to submit free demo request.",
      error: error.message,
    });
  }
});

module.exports = router;