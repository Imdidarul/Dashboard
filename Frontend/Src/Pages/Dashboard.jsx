// import { useEffect, useState } from "react";
// import { getDashboardData } from "../services/dashboardService";
// import { Card, CardContent } from "../Components/Ui/card";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const res = await getDashboardData();
//       setData(res);
//     })();
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   const chartData = [
//     { name: "Income", value: data.totals.income },
//     { name: "Expense", value: data.totals.expense },
//   ];

//   const COLORS = ["#22c55e", "#ef4444"];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Finance Overview</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
//                 {chartData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Schedules</h2>
//           <ul>
//             {data.schedules.map((s) => (
//               <li key={s._id} className="p-2 border-b">{s.task} – {new Date(s.date).toDateString()}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { getDashboardData } from "../services/dashboardService";
// import { Card, CardContent } from "../Components/Ui/card";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";
// import { Plus } from "lucide-react";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const res = await getDashboardData();
//       setData(res);
//     })();
//   }, []);

//   if (!data) return <p className="p-6">Loading...</p>;

//   // Dummy chart + product data for now
//   const activitiesData = [
//     { name: "Week 1", Guest: 500, User: 400 },
//     { name: "Week 2", Guest: 300, User: 400 },
//     { name: "Week 3", Guest: 200, User: 300 },
//     { name: "Week 4", Guest: 400, User: 300 },
//   ];

//   const productsData = [
//     { name: "Basic Tees", value: 55 },
//     { name: "Custom Short Pants", value: 31 },
//     { name: "Super Hoodies", value: 14 },
//   ];

//   const COLORS = ["#22c55e", "#facc15", "#ef4444"];

//   return (
//     <div className="p-6 space-y-6">
//       {/* Top cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-500 text-sm">Total Revenues</p>
//             <h2 className="text-2xl font-bold">${data.totals?.income ?? "2,129,430"}</h2>
//             <p className="text-green-600 text-xs">+2.5%</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-500 text-sm">Total Transactions</p>
//             <h2 className="text-2xl font-bold">{data.totals?.transactions ?? "1,520"}</h2>
//             <p className="text-green-600 text-xs">+1.7%</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-500 text-sm">Total Likes</p>
//             <h2 className="text-2xl font-bold">{data.totals?.likes ?? "9,721"}</h2>
//             <p className="text-green-600 text-xs">+1.4%</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-500 text-sm">Total Users</p>
//             <h2 className="text-2xl font-bold">{data.totals?.users ?? "9,721"}</h2>
//             <p className="text-green-600 text-xs">+4.2%</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Activities */}
//       <Card>
//         <CardContent className="p-4">
//           <h2 className="text-xl font-bold mb-2">Activities</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={activitiesData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="Guest" fill="#22c55e" />
//               <Bar dataKey="User" fill="#ef4444" />
//             </BarChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       {/* Bottom section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardContent className="p-4">
//             <h2 className="text-xl font-bold mb-2">Top products</h2>
//             <div className="flex items-center">
//               <div className="w-1/2 h-64">
//                 <ResponsiveContainer>
//                   <PieChart>
//                     <Pie
//                       data={productsData}
//                       dataKey="value"
//                       nameKey="name"
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={80}
//                       label
//                     >
//                       {productsData.map((entry, index) => (
//                         <Cell key={index} fill={COLORS[index]} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="w-1/2 space-y-2">
//                 {productsData.map((p, i) => (
//                   <p key={i} className="text-sm">
//                     <span className="font-bold">{p.name}</span> – {p.value}%
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="flex items-center justify-center">
//           <CardContent className="flex flex-col items-center justify-center">
//             <Plus className="w-10 h-10 text-gray-400" />
//             <p className="text-gray-400 mt-2">Add Profile</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }









// import { useEffect, useState } from "react";
// import {
//   getDashboardData,
//   addTransaction,
//   addSchedule,
// } from "../services/dashboardService";
// import { Card, CardContent } from "../Components/Ui/card";
// import  Input  from "../Components/Ui/input";
// import  Button  from "../Components/Ui/button";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   // form states
//   const [amount, setAmount] = useState("");
//   const [desc, setDesc] = useState("");
//   const [task, setTask] = useState("");
//   const [date, setDate] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const res = await getDashboardData();
//     setData(res);
//   };

//   if (!data) return <p>Loading...</p>;

//   const chartData = [
//     { name: "Income", value: data.totals.income },
//     { name: "Expense", value: data.totals.expense },
//   ];

//   const COLORS = ["#22c55e", "#ef4444"];

//   // handle adding income/expense
//   const handleAddTransaction = async (type) => {
//     if (!amount) return alert("Enter amount");
//     await addTransaction(type, Number(amount), desc || "No description");
//     setAmount("");
//     setDesc("");
//     fetchData();
//   };

//   // handle adding schedule
//   const handleAddSchedule = async () => {
//     if (!task || !date) return alert("Enter task and date");
//     await addSchedule(task, date);
//     setTask("");
//     setDate("");
//     fetchData();
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
//       {/* Finance Overview */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Finance Overview</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 dataKey="value"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           {/* Add transaction */}
//           <div className="mt-4 flex flex-col gap-2">
//             <Input
//               type="number"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <Input
//               type="text"
//               placeholder="Description"
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//             />
//             <div className="flex gap-2">
//               <Button onClick={() => handleAddTransaction("income")}>
//                 Add Income
//               </Button>
//               <Button
//                 onClick={() => handleAddTransaction("expense")}
//                 className="bg-red-500 text-white"
//               >
//                 Add Expense
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Schedules */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Schedules</h2>
//           <ul>
//             {data.schedules.map((s) => (
//               <li key={s._id} className="p-2 border-b">
//                 {s.task} – {new Date(s.date).toDateString()}
//               </li>
//             ))}
//           </ul>

//           {/* Add schedule */}
//           <div className="mt-4 flex flex-col gap-2">
//             <Input
//               type="text"
//               placeholder="Task"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//             />
//             <Input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <Button onClick={handleAddSchedule}>Add Schedule</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }







// import { useEffect, useState } from "react";
// import {
//   getDashboardData,
//   addTransaction,
//   addSchedule,
// } from "../services/dashboardService";
// import { Card, CardContent } from "../Components/Ui/card";
// import Input from "../Components/Ui/input";
// import Button from "../Components/Ui/button";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   // form states
//   const [amount, setAmount] = useState("");
//   const [desc, setDesc] = useState("");
//   const [task, setTask] = useState("");
//   const [date, setDate] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await getDashboardData();
//       setData(res);
//     } catch (err) {
//       console.error("Failed to fetch dashboard data:", err);
//     }
//   };

//   if (!data) return <p>Loading...</p>;

//   // ✅ Safe access using optional chaining
//   const chartData = [
//     { name: "Income", value: data?.totals?.income ?? 0 },
//     { name: "Expense", value: data?.totals?.expense ?? 0 },
//   ];

//   const COLORS = ["#22c55e", "#ef4444"];

//   // handle adding income/expense
//   const handleAddTransaction = async (type) => {
//     if (!amount) return alert("Enter amount");
//     await addTransaction(type, Number(amount), desc || "No description");
//     setAmount("");
//     setDesc("");
//     fetchData();
//   };

//   // handle adding schedule
//   const handleAddSchedule = async () => {
//     if (!task || !date) return alert("Enter task and date");
//     await addSchedule(task, date);
//     setTask("");
//     setDate("");
//     fetchData();
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
//       {/* Finance Overview */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Finance Overview</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 dataKey="value"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           {/* Add transaction */}
//           <div className="mt-4 flex flex-col gap-2">
//             <Input
//               type="number"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <Input
//               type="text"
//               placeholder="Description"
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//             />
//             <div className="flex gap-2">
//               <Button onClick={() => handleAddTransaction("income")}>
//                 Add Income
//               </Button>
//               <Button
//                 onClick={() => handleAddTransaction("expense")}
//                 className="bg-red-500 text-white"
//               >
//                 Add Expense
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Schedules */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">Schedules</h2>
//           <ul>
//             {data?.schedules?.length > 0 ? (
//               data.schedules.map((s) => (
//                 <li key={s._id} className="p-2 border-b">
//                   {s.task} – {new Date(s.date).toDateString()}
//                 </li>
//               ))
//             ) : (
//               <li className="p-2 text-gray-500">No schedules yet</li>
//             )}
//           </ul>

//           {/* Add schedule */}
//           <div className="mt-4 flex flex-col gap-2">
//             <Input
//               type="text"
//               placeholder="Task"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//             />
//             <Input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <Button onClick={handleAddSchedule}>Add Schedule</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import {
  getDashboardData,
  addTransaction,
  addSchedule,
} from "../Services/dashboardService";
import { Card, CardContent } from "../Components/Ui/card";
import Input from "../Components/Ui/input";
import Button from "../Components/Ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { getAuth } from "firebase/auth";



const auth = getAuth();
const currentUser = auth.currentUser;



export default function Dashboard() {
  const [data, setData] = useState(null);

  // form states
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getDashboardData();
      setData(res);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    }
  };

  if (!data) return <p>Loading...</p>;

  // ✅ Safe access using optional chaining
  const chartData = [
    { name: "Income", value: data?.totals?.income ?? 0 },
    { name: "Expense", value: data?.totals?.expense ?? 0 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  // handle adding income/expense
  // const handleAddTransaction = async (type) => {
  //   if (!amount) return alert("Enter amount");
  //   await addTransaction(type, Number(amount), title || "Untitled");
  //   setAmount("");
  //   setTitle("");
  //   fetchData();
  // };
  // const handleAddTransaction = async (type) => {
  //   if (!amount) return alert("Enter amount");
  
  //   await addTransaction({
  //     title: title || "Untitled",
  //     amount: Number(amount),
  //     type,
  //     owner: currentUser?.uid, // make sure you have the logged-in user's UID
  //   });
  
  //   setAmount("");
  //   setTitle("");
  //   fetchData();
  // };

  const handleAddTransaction = async (type) => {
    if (!amount) return alert("Enter amount");
  
    await addTransaction(type, Number(amount), title || "Untitled");
  
    setAmount("");
    setTitle("");
    fetchData();
  };
  

  // handle adding schedule
  const handleAddSchedule = async () => {
    if (!task || !date) return alert("Enter task and date");
    await addSchedule(task, date);
    setTask("");
    setDate("");
    fetchData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {/* Finance Overview */}
      <Card className="md:col-span-1">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Dashboard</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Add transaction */}
          <div className="mt-4 flex flex-col gap-2">
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={() => handleAddTransaction("income")}>
                Add Income
              </Button>
              <Button
                onClick={() => handleAddTransaction("expense")}
                className="bg-red-500 text-white"
              >
                Add Expense
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card className="md:col-span-1">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Transactions</h2>
          <ul className="max-h-80 overflow-y-auto">
            {data?.transactions?.length > 0 ? (
              data.transactions.map((t) => (
                <li
                  key={t._id}
                  className="flex justify-between items-center p-2 border-b"
                >
                  <span className="font-medium">{t.title}</span>
                  <span
                    className={
                      t.type === "income"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {t.type === "income" ? "+" : "-"}₹{t.amount}
                  </span>
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No transactions yet</li>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Schedules */}
      <Card className="md:col-span-1">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Schedules</h2>
          <ul className="max-h-80 overflow-y-auto">
            {data?.schedules?.length > 0 ? (
              data.schedules.map((s) => (
                <li key={s._id} className="p-2 border-b">
                  {s.task} – {new Date(s.date).toDateString()}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No schedules yet</li>
            )}
          </ul>

          {/* Add schedule */}
          <div className="mt-4 flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button onClick={handleAddSchedule}>Add Schedule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
