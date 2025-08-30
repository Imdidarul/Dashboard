// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use(async (config) => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   if (user) {
//     const token = await user.getIdToken();
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;



import axios from "axios";
import { auth } from "../firebase";  // ✅ initialized app

const api = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if deployed
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken(true); // ✅ force refresh
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("⚠️ No logged-in user, skipping token");
  }
  return config;
});

export default api;
