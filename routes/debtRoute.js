const express = require("express");
const router = express.Router();

const { createDebt, getAllDebts } = require("../controllers/debtController");

// POST for creating
router.post("/create", createDebt);

// POST for reading all
router.post("/read", getAllDebts);

module.exports = router;

