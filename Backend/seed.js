import mongoose from "mongoose";
import dotenv from "dotenv";
import Transaction from "./models/Transaction.js";
import Schedule from "./models/Schedule.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const uid = "test-user-uid"; // Replace with real Firebase UID

  await Transaction.deleteMany({ owner: uid });
  await Schedule.deleteMany({ owner: uid });

  await Transaction.insertMany([
    { title: "Salary", amount: 5000, type: "income", owner: uid },
    { title: "Groceries", amount: 200, type: "expense", owner: uid },
    { title: "Rent", amount: 1200, type: "expense", owner: uid }
  ]);

  await Schedule.insertMany([
    { task: "Meeting with team", date: new Date(), owner: uid },
    { task: "Pay bills", date: new Date(), owner: uid }
  ]);

  console.log("✅ Database seeded!");
  process.exit();
}

seed();
