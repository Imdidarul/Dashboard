import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({ owner: req.user.uid });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new transaction
router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction({ ...req.body, owner: req.user.uid });
    await transaction.save();
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update transaction
router.put("/:id", async (req, res) => {
  try {
    const updated = await Transaction.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.uid },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findOneAndDelete({ _id: req.params.id, owner: req.user.uid });
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
