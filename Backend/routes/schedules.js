import express from "express";
import Schedule from "../models/Schedule.js";

const router = express.Router();

// Get schedules
router.get("/", async (req, res) => {
  try {
    const schedules = await Schedule.find({ owner: req.user.uid });
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create schedule
router.post("/", async (req, res) => {
  try {
    const schedule = new Schedule({ ...req.body, owner: req.user.uid });
    await schedule.save();
    res.json(schedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update schedule
router.put("/:id", async (req, res) => {
  try {
    const updated = await Schedule.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.uid },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete schedule
router.delete("/:id", async (req, res) => {
  try {
    await Schedule.findOneAndDelete({ _id: req.params.id, owner: req.user.uid });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
