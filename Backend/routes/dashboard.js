// import express from "express";
// import Transaction from "../models/Transaction.js";
// import Schedule from "../models/Schedule.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const transactions = await Transaction.find({ owner: req.user.uid });
//     const schedules = await Schedule.find({ owner: req.user.uid });

//     const income = transactions
//       .filter(t => t.type === "income")
//       .reduce((sum, t) => sum + t.amount, 0);
//     const expense = transactions
//       .filter(t => t.type === "expense")
//       .reduce((sum, t) => sum + t.amount, 0);

//     res.json({
//       totals: { income, expense },
//       schedules,
//       transactions
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


// import express from "express";
// import Transaction from "../models/Transaction.js";
// import Schedule from "../models/Schedule.js";
// import admin from "../firebase.js";

// const router = express.Router();

// // Middleware to verify Firebase token
// const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized: No token provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken; // ✅ now req.user.uid is available
//     next();
//   } catch (err) {
//     console.error("Token verification failed:", err.message);
//     return res.status(401).json({ error: "Unauthorized: Invalid token" });
//   }
// };

// // ✅ Apply middleware to all dashboard routes
// router.use(verifyToken);

// // Get Dashboard Data
// router.get("/", async (req, res) => {
//   try {
//     const transactions = await Transaction.find({ owner: req.user.uid });
//     const schedules = await Schedule.find({ owner: req.user.uid });

//     const income = transactions
//       .filter((t) => t.type === "income")
//       .reduce((sum, t) => sum + t.amount, 0);

//     const expense = transactions
//       .filter((t) => t.type === "expense")
//       .reduce((sum, t) => sum + t.amount, 0);

//     res.json({
//       totals: { income, expense },
//       schedules,
//       transactions,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add Income or Expense
// router.post("/transaction", async (req, res) => {
//   try {
//     const { type, amount, description } = req.body;

//     if (!["income", "expense"].includes(type)) {
//       return res.status(400).json({ error: "Invalid transaction type" });
//     }

//     const transaction = new Transaction({
//       owner: req.user.uid,
//       type,
//       amount,
//       description,
//     });

//     await transaction.save();
//     res.json(transaction);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add Schedule
// router.post("/schedule", async (req, res) => {
//   try {
//     const { task, date } = req.body;

//     const schedule = new Schedule({
//       owner: req.user.uid,
//       task,
//       date,
//     });

//     await schedule.save();
//     res.json(schedule);
//   } catch (err) {
//     console.error("Error in /transaction:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;




import express from "express";
import Transaction from "../models/Transaction.js";
import Schedule from "../models/Schedule.js";
import admin from "../firebase.js";

const router = express.Router();

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // ✅ now req.user.uid is available
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

// ✅ Apply middleware to all dashboard routes
router.use(verifyToken);

// Get Dashboard Data
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({ owner: req.user.uid });
    const schedules = await Schedule.find({ owner: req.user.uid });

    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    res.json({
      totals: { income, expense },
      schedules,
      transactions,
    });
  } catch (err) {
    console.error("❌ Error fetching dashboard data:", err);
    res.status(500).json({ error: err.message });
  }
});

// Add Income or Expense
router.post("/transaction", async (req, res) => {
  try {
    console.log("📥 Incoming transaction body:", req.body);

    const { type, amount, title } = req.body;

    if (!["income", "expense"].includes(type)) {
      return res.status(400).json({ error: "Invalid transaction type" });
    }
    if (isNaN(amount)) {
      return res.status(400).json({ error: "Amount must be a number" });
    }

    const transaction = new Transaction({
      owner: req.user.uid,
      type,
      amount,
      title,
    });

    await transaction.save();
    res.json(transaction);
  } catch (err) {
    console.error("❌ Transaction save failed:", err);
    res.status(500).json({ error: err.message });
  }
});

// Add Schedule
router.post("/schedule", async (req, res) => {
  try {
    console.log("📥 Incoming schedule body:", req.body);

    const { task, date } = req.body;

    if (!task || !date) {
      return res.status(400).json({ error: "Task and date are required" });
    }

    const schedule = new Schedule({
      owner: req.user.uid,
      task,
      date,
    });

    await schedule.save();
    res.json(schedule);
  } catch (err) {
    console.error("❌ Schedule save failed:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
