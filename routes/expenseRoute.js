const express = require("express");
const router = express.Router();

const { createExpense, getAllExpenses } = require("../controllers/expenseController");

router.post("/create", createExpense);
router.post("/read", getAllExpenses);

module.exports = router;
