import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: String,
  email: String,
  avatar: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
