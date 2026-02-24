const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const debtRoutes = require("./routes/debtRoute");
const expenseRoutes = require("./routes/expenseRoute");
const incomeRoutes = require("./routes/incomeRoute");
const summaryRoutes = require("./routes/summaryRoute");

// Use routes
app.use("/debts", debtRoutes);
app.use("/expenses", expenseRoutes);
app.use("/income", incomeRoutes);
app.use("/summary", summaryRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Finance Management API is Running...");
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});