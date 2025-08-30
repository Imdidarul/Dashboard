// import api from "../utils/api";

// export const getDashboardData = async () => {
//   const res = await api.get("/dashboard");
//   return res.data;
// };

// import { db } from "../firebase";   // ✅ Always from firebase.js
// import { collection, getDocs } from "firebase/firestore";

// export async function getDashboardData() {
//   const snapshot = await getDocs(collection(db, "dashboard"));
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// }

// src/services/dashboardService.js







// import { db } from "../firebase";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// export async function getDashboardData() {
//   try {
//     const totalsDoc = await getDoc(doc(db, "finance", "totals"));
//     const schedulesSnap = await getDocs(collection(db, "schedules"));

//     return {
//       totals: totalsDoc.exists()
//         ? totalsDoc.data()
//         : { income: 0, expense: 0 },
//       schedules: schedulesSnap.empty
//         ? [] 
//         : schedulesSnap.docs.map((d) => ({ id: d.id, ...d.data() })),
//     };
//   } catch (err) {
//     console.error("Error fetching dashboard data:", err);
//     return { totals: { income: 0, expense: 0 }, schedules: [] };
//   }
// }







// import api from "./api";

// // Fetch full dashboard data
// export const getDashboardData = async () => {
//   const res = await api.get("/dashboard");
//   return res.data;
// };

// // Add income or expense transaction
// export const addTransaction = async (type, amount, description) => {
//   const res = await api.post("/dashboard/transaction", {
//     type,
//     amount,
//     description,
//   });
//   return res.data;
// };

// // Add schedule task
// export const addSchedule = async (task, date) => {
//   const res = await api.post("/dashboard/schedule", { task, date });
//   return res.data;
// };



// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const API_URL = import.meta.env.VITE_API_URL;

// const getToken = async () => {
//   const user = getAuth().currentUser;
//   if (user) {
//     return await user.getIdToken();
//   }
//   return null;
// };

// export const getDashboardData = async () => {
//   const token = await getToken();
//   const res = await axios.get(`${API_URL}/dashboard`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };

// export const addTransaction = async (type, amount, description) => {
//   const token = await getToken();
//   const res = await axios.post(
//     `${API_URL}/transactions`,
//     { type, amount, description },
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   return res.data;
// };

// export const addSchedule = async (task, date) => {
//   const token = await getToken();
//   const res = await axios.post(
//     `${API_URL}/schedules`,
//     { task, date },
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   return res.data;
// };


// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const API_URL = import.meta.env.VITE_API_URL;

// const getToken = async () => {
//   const user = getAuth().currentUser;
//   if (user) {
//     return await user.getIdToken();
//   }
//   return null;
// };

// export const getDashboardData = async () => {
//   const token = await getToken();
//   const res = await axios.get(`${API_URL}/dashboard`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };

// export const addTransaction = async (type, amount, description) => {
//   const token = await getToken();
//   const res = await axios.post(
//     `${API_URL}/dashboard/transaction`,   // ✅ fixed
//     { type, amount, description },
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   return res.data;
// };

// export const addSchedule = async (task, date) => {
//   const token = await getToken();
//   const res = await axios.post(
//     `${API_URL}/dashboard/schedule`,   // ✅ fixed
//     { task, date },
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   return res.data;
// };






// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const API_URL = import.meta.env.VITE_API_URL;

// // 🔑 Get Firebase token
// const getToken = async () => {
//   const user = getAuth().currentUser;
//   if (user) {
//     return await user.getIdToken();
//   }
//   return null;
// };

// // 📊 Fetch Dashboard Data
// export const getDashboardData = async () => {
//   const token = await getToken();
//   const res = await axios.get(`${API_URL}/dashboard`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };

// // ➕ Add Transaction (income/expense)
// export const addTransaction = async (type, amount, title) => {
//   try {
//     const token = await getToken();
//     const res = await axios.post(
//       `${API_URL}/dashboard/transaction`,
//       {
//         type,
//         amount: Number(amount), // ✅ ensure number
//         title: title?.trim() || "", // ✅ use title instead of description
//         owner: transaction.owner, //changed*
//       },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     return res.data;
//   } catch (err) {
//     console.error("❌ Error in addTransaction:", err.response?.data || err.message);
//     throw err;
//   }
// };

// // ➕ Add Schedule
// export const addSchedule = async (task, date) => {
//   try {
//     const token = await getToken();
//     const res = await axios.post(
//       `${API_URL}/dashboard/schedule`,
//       { task, date },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     return res.data;
//   } catch (err) {
//     console.error("❌ Error in addSchedule:", err.response?.data || err.message);
//     throw err;
//   }
// };





import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = import.meta.env.VITE_API_URL;

// 🔑 Get Firebase token
const getToken = async () => {
  const user = getAuth().currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};

// 📊 Fetch Dashboard Data
export const getDashboardData = async () => {
  const token = await getToken();
  const res = await axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// ➕ Add Transaction (income/expense)
export const addTransaction = async (type, amount, title) => {
  try {
    const token = await getToken();
    const user = getAuth().currentUser;

    const res = await axios.post(
      `${API_URL}/dashboard/transaction`,
      {
        type,
        amount: Number(amount), // ✅ ensure number
        title: title?.trim() || "Untitled", // ✅ fallback if empty
        owner: user?.uid, // ✅ FIXED: use Firebase UID
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err) {
    console.error("❌ Error in addTransaction:", err.response?.data || err.message);
    throw err;
  }
};

// ➕ Add Schedule
export const addSchedule = async (task, date) => {
  try {
    const token = await getToken();
    const res = await axios.post(
      `${API_URL}/dashboard/schedule`,
      { task, date },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err) {
    console.error("❌ Error in addSchedule:", err.response?.data || err.message);
    throw err;
  }
};
