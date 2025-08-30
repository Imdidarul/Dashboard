import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  owner: { type: String, required: true }, // Firebase UID
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Profile", ProfileSchema);
