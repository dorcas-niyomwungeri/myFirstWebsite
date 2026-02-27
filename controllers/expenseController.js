const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create expense
const createExpense = async (req, res) => {
  try {
    const { reason, amount } = req.body;
    console.log("expenses requested")
    const newExpense = await prisma.expenses.create({
      data: {
        reason,
        amount: parseFloat(amount)
      }
    });
    console.log("Expense created")
    res.status(201).json(newExpense);
  } catch (error) {
    console.log("error")
    res.status(500).json({ error: error.message });
  }
};

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await prisma.expenses.findMany();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExpense,
  getAllExpenses
};