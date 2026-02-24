const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create summary (manual insert if needed)
const createSummary = async (req, res) => {
  try {
    const { totalIncome, totalExpense, totalDebt } = req.body;

    const summary = await prisma.summary.create({
      data: {
        totalIncome: parseFloat(totalIncome),
        totalExpense: parseFloat(totalExpense),
        totalDebt: parseFloat(totalDebt)
      }
    });

    res.status(201).json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all summaries
const getAllSummaries = async (req, res) => {
  try {
    const summaries = await prisma.summary.findMany();
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSummary,
  getAllSummaries
};