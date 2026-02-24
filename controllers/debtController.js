const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create single debt
const createDebt = async (req, res) => {
  try {
    const { name, amount } = req.body;

    const newDebt = await prisma.debt.create({
      data: {
        name,
        amount: parseFloat(amount)
      }
    });

    res.status(201).json(newDebt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all debts
const getAllDebts = async (req, res) => {
  try {
    console.log("debts requested")
    const debts = await prisma.debt.findMany();
    res.json(debts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDebt,
  getAllDebts
};