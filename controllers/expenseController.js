const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create expense
const createExpense = async (req, res) => {
  try {
    const { title, amount } = req.body;

    const newExpense = await prisma.expenses.create({
      data: {
        title,
        amount: parseFloat(amount)
      }
    });

    res.status(201).json(newExpense);
  } catch (error) {
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