const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create single debt
const createDebt = async (req, res) => {
  try {
    console.log("new debt");
    const { debtor, amount } = req.body;
    console.log(debtor, amount);

    const newDebt = await prisma.debt.create({
      data: {
        debtor,
        amount: parseFloat(amount)
      }
    });
    console.log("debtor saved!")
    res.status(201).json(newDebt);
  } catch (error) {
    console.log(err)
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