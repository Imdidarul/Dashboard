// import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Users from "./Pages/Users";
// import Schedules from "./Pages/Schedules";
// import Transactions from "./Pages/Transactions";
// import Profile from "./Pages/Profile";
// import SignIn from "./Pages/SignIn";


// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow p-4 felx gap-4">
//         <Link to="/">Dashboard</Link>
//         <Link to="/users">Users</Link>
//         <Link to="/schedules">Schedules</Link>
//         <Link to="/transactions">Transactions</Link>
//         <Link to="/profile">Profile</Link>
//         <Route path="/signin" element={<SignIn />} />
//       </nav>

//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/schedules" element={<Schedules />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/signin" element={<SignIn />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }





// import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Schedules from "./Pages/Schedules";
// import Transactions from "./Pages/Transactions";
// import Profile from "./Pages/Profile";
// import SignIn from "./Pages/SignIn";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation */}
//       <nav className="bg-white shadow p-4 flex gap-4">
//         <Link to="/">Dashboard</Link>
//         <Link to="/users">Users</Link>
//         <Link to="/schedules">Schedules</Link>
//         <Link to="/transactions">Transactions</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/signin">Sign In</Link>
//       </nav>

//       {/* Page content */}
//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/schedules" element={<Schedules />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/signin" element={<SignIn />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.getIdToken().then((token) => {
          localStorage.setItem("token", token);
        });
        setUser(firebaseUser);
      } else {
        localStorage.removeItem("token");
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default App;

