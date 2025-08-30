import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Sync logged-in user
router.post("/sync", async (req, res) => {
  try {
    const { uid, name, email, avatar } = req.body;
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, name, email, avatar });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
