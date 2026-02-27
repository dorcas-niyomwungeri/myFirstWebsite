const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create income
const createIncome = async (req, res) => {
  try {
    const { source, amount } = req.body;
    const newIncome = await prisma.income.create({
      data: {
        source,
        amount: parseFloat(amount)
      }
    });
    console.log("Salary saved!")
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all income
const getAllIncome = async (req, res) => {
  try {
    const incomes = await prisma.income.findMany();
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createIncome,
  getAllIncome
};