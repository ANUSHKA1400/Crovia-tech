
const DemoRequest = require("../models/DemoRequest");

// Submit a Free Demo request
const createDemoRequest = async (req, res) => {
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
    } = req.body || {};

    // Validate required fields.
    const requiredFields = {
      schoolName,
      principalContact,
      principalName,
      schoolLocation,
      strength,
      preferredDemoDate,
      preferredDemoTime,
      programType,
      email,
      designation,
      schoolAddress,
      demoMode,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) =>
        value === undefined ||
        value === null ||
        String(value).trim() === ""
      )
      .map(([field]) => field);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
        missingFields,
      });
    }

    if (
      !Array.isArray(classesInterested) ||
      classesInterested.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one class.",
      });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const numericStrength = Number(strength);

    if (
      !Number.isFinite(numericStrength) ||
      numericStrength < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "School strength must be a valid non-negative number.",
      });
    }

    // Save the request in MongoDB.
    const demoRequest = await DemoRequest.create({
      googleId: googleId || undefined,
      schoolName: String(schoolName).trim(),
      principalContact: String(principalContact).trim(),
      principalName: String(principalName).trim(),
      schoolLocation: String(schoolLocation).trim(),
      strength: numericStrength,
      preferredDemoDate,
      preferredDemoTime: String(preferredDemoTime).trim(),
      programType: String(programType).trim(),
      classesInterested: classesInterested.map((item) =>
        String(item).trim()
      ),
      email: normalizedEmail,
      designation: String(designation).trim(),
      schoolAddress: String(schoolAddress).trim(),
      demoMode: String(demoMode).trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Free Demo request submitted successfully.",
      demoRequest: {
        id: demoRequest._id,
        schoolName: demoRequest.schoolName,
        email: demoRequest.email,
        preferredDemoDate: demoRequest.preferredDemoDate,
        preferredDemoTime: demoRequest.preferredDemoTime,
      },
    });
  } catch (error) {
    console.error("Demo request error:", error.message);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "The demo request contains invalid information.",
        errors: Object.values(error.errors).map(
          (item) => item.message
        ),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to submit the demo request. Please try again.",
    });
  }
};

module.exports = { createDemoRequest };
