import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "done"], default: "pending" },
  owner: { type: String, required: true }
});

export default mongoose.model("Schedule", ScheduleSchema);
