// import admin from "firebase-admin";

// export const authMiddleware = async (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const idToken = authHeader.split(" ")[1];
//   try {
//     const decoded = await admin.auth().verifyIdToken(idToken);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("Auth error:", err.message);
//     return res.status(401).json({ error: "Invalid token" });
//   }
// };


import admin from "../firebase.js";

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // store user info in request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default verifyToken;
