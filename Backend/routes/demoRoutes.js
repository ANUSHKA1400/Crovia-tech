
const express = require("express");
const {
  createDemoRequest,
} = require("../controllers/demoController");

const router = express.Router();

// Submit a Free Demo request
router.post("/free-demo", createDemoRequest);

module.exports = router;
