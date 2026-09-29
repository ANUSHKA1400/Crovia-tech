const mongoose = require("mongoose");

const demoRequestSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },

    schoolName: {
      type: String,
      required: true,
      trim: true,
    },

    principalContact: {
      type: String,
      required: true,
      trim: true,
    },

    principalName: {
      type: String,
      required: true,
      trim: true,
    },

    schoolLocation: {
      type: String,
      required: true,
      trim: true,
    },

    strength: {
      type: Number,
      required: true,
    },

    preferredDemoDate: {
      type: String,
      required: true,
    },

    preferredDemoTime: {
      type: String,
      required: true,
    },

    programType: {
      type: String,
      required: true,
      enum: [
        "Project-Based Learning",
        "Free Demo Class",
      ],
    },

    classesInterested: {
      type: [String],
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      enum: [
        "Principal",
        "Coordinator",
        "Teacher",
        "Management",
      ],
    },

    schoolAddress: {
      type: String,
      required: true,
      trim: true,
    },

    demoMode: {
      type: String,
      required: true,
      enum: [
        "Offline at School",
        "Online",
      ],
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Contacted",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent OverwriteModelError
module.exports =
  mongoose.models.DemoRequest ||
  mongoose.model("DemoRequest", demoRequestSchema);