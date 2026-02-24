const express = require("express");
const router = express.Router();

const { createSummary, getAllSummaries } = require("../controllers/summaryController");

router.post("/create", createSummary);
router.post("/read", getAllSummaries);

module.exports = router;