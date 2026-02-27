const express = require("express");
const router = express.Router();

const { createIncome, getAllIncome } = require("../controllers/incomeController");

router.post("/create", createIncome);
router.post("/read", getAllIncome);

module.exports = router;

