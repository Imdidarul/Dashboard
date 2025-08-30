import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// Get profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find({ owner: req.user.uid });
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create profile
router.post("/", async (req, res) => {
  try {
    const profile = new Profile({ ...req.body, owner: req.user.uid });
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update profile
router.put("/:id", async (req, res) => {
  try {
    const updated = await Profile.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.uid },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete profile
router.delete("/:id", async (req, res) => {
  try {
    await Profile.findOneAndDelete({ _id: req.params.id, owner: req.user.uid });
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
