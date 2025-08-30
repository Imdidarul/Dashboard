// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// // import admin from "firebase-admin";
// import { authMiddleware } from "./middleware/auth.js";
// import admin from "./firebase.js";

// import transactionsRoute from "./routes/transactions.js";
// import schedulesRoute from "./routes/schedules.js";
// import usersRoute from "./routes/users.js";
// import profilesRoute from "./routes/profiles.js";
// import dashboardRoute from "./routes/dashboard.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
// // Firebase Admin SDK init
// if (process.env.FIREBASE_SERVICE_ACCOUNT) {
//   const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // Routes
// app.use("/api/transactions", authMiddleware, transactionsRoute);
// app.use("/api/schedules", authMiddleware, schedulesRoute);
// app.use("/api/users", authMiddleware, usersRoute);
// app.use("/api/profiles", authMiddleware, profilesRoute);
// app.use("/api/dashboard", authMiddleware, dashboardRoute);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// import admin from "./firebase.js";  // ✅ Use the already initialized admin instance
// import dashboardRoutes from "./routes/dashboard.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Example middleware to verify Firebase token
// const verifyFirebaseToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader?.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = await admin.auth().verifyIdToken(token);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
// };

// // Protect dashboard routes
// app.use("/api/dashboard", verifyFirebaseToken, dashboardRoutes);

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// import express from "express";
// import cors from "cors";
// import verifyToken from "./middleware/auth.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔹 Protected route
// app.get("/api/dashboard", verifyToken, (req, res) => {
//   res.json({
//     message: "Welcome to Dashboard 🚀",
//     user: req.user, // Firebase user info
//   });
// });

// app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import  authMiddleware  from "./middleware/authMiddleware.js";
import admin from "./firebase.js";

// Import routes
import transactionsRoute from "./routes/transactions.js";
import schedulesRoute from "./routes/schedules.js";
import usersRoute from "./routes/users.js";
import profilesRoute from "./routes/profiles.js";
import dashboardRoute from "./routes/dashboard.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Routes
app.use("/api/transactions", authMiddleware, transactionsRoute);
app.use("/api/schedules", authMiddleware, schedulesRoute);
app.use("/api/users", authMiddleware, usersRoute);
app.use("/api/profiles", authMiddleware, profilesRoute);
app.use("/api/dashboard", authMiddleware, dashboardRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
