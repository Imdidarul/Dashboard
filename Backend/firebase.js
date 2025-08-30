// import admin from "firebase-admin";
// import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// // Prevent multiple initializations
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export default admin;


// import admin from "firebase-admin";
// import fs from "fs";

// // Read service account key manually
// const serviceAccount = JSON.parse(
//   fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
// );

// // Prevent multiple initializations
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export default admin;


// import admin from "firebase-admin";
// import fs from "fs";

// // Load service account key
// const serviceAccount = JSON.parse(
//   fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
// );

// // Initialize Firebase Admin only once
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export default admin;


import admin from "firebase-admin";
import { readFileSync } from "fs";

// Load service account key
const serviceAccount = JSON.parse(
  readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
