import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  date: { type: Date, default: Date.now },
  owner: { type: String, required: true } // Firebase UID
});

export default mongoose.model("Transaction", TransactionSchema);
