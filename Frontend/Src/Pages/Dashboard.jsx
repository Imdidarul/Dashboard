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




import { useEffect, useState, useMemo } from "react";
import { getAuth } from "firebase/auth";
import {
  getDashboardData,
  addTransaction,
  // addProduct, // Assuming you create this in your service
} from "../Services/dashboardService";
import {
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import {
  LayoutDashboard, Tag, Calendar, User, Settings, Bell, Search, Plus, ArrowUpRight, X as CloseIcon,
} from "lucide-react";

// Firebase Auth setup
const auth = getAuth();
const currentUser = auth.currentUser;

// Chart Colors
const TOP_PRODUCTS_COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

// HELPER COMPONENTS (Moved to the top)

function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#4285F4] text-white flex flex-col p-8 rounded-r-3xl">
      <h1 className="text-4xl font-bold mb-12">Board.</h1>
      <nav className="flex-1 space-y-5">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" active />
        <SidebarItem icon={<Tag />} text="Transactions" />
        <SidebarItem icon={<Calendar />} text="Schedules" />
        <SidebarItem icon={<User />} text="Users" />
        <SidebarItem icon={<Settings />} text="Settings" />
      </nav>
      <div className="space-y-2 text-sm">
        <a href="#" className="block hover:underline">Help</a>
        <a href="#" className="block hover:underline">Contact Us</a>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, active = false }) {
  return (
    <a href="#" className={`flex items-center gap-4 py-2 px-4 rounded-lg transition-colors ${active ? "font-bold" : "font-normal hover:font-semibold"}`}>
      {icon}<span>{text}</span>
    </a>
  );
}

function DashboardHeader({ onAddNew }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-black">Dashboard</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <input type="text" placeholder="Search..." className="pl-4 pr-8 py-2 rounded-lg bg-white w-64 text-sm" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
        <button onClick={onAddNew} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 flex items-center gap-2">
            <Plus size={16} /> Add New
        </button>
        <Bell size={20} className="cursor-pointer" />
        <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
      </div>
    </header>
  );
}

function StatCard({ title, value, change }) {
    const iconColors = {
        "Total Revenues": "bg-green-100 text-green-600",
        "Total Transactions": "bg-yellow-100 text-yellow-600",
        "Total Likes": "bg-red-100 text-red-600",
        "Total Users": "bg-purple-100 text-purple-600",
    };
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColors[title]} mb-2`}><ArrowUpRight size={24} /></div>
            <p className="text-xs text-gray-600">{title}</p>
            <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">{change}</p>
            </div>
        </div>
    );
}

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"><CloseIcon /></button>
                {children}
            </div>
        </div>
    );
}


// MAIN DASHBOARD COMPONENT

export default function Dashboard() {
  // State for data from backend
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // State for modals
  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);

  // State for transaction form
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [transactionType, setTransactionType] = useState("income");

  // State for product form
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getDashboardData();
      setData(res);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Memoized data processing for charts
  const weeklyActivityData = useMemo(() => {
    if (!data?.transactions) return [];
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toISOString().split("T")[0];
    }).reverse();

    return last7Days.map((date) => {
      const dayTransactions = data.transactions.filter(
        (t) => new Date(t.date).toISOString().split("T")[0] === date
      );
      const total = dayTransactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
      return {
        name: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
        Income: Math.max(0, total),
        Expense: Math.abs(Math.min(0, total)),
      };
    });
  }, [data]);

  const topProductsData = useMemo(() => {
    return data?.products || [];
  }, [data]);


  // Handlers for submitting data
  const handleAddTransaction = async (e) => {
    e.preventDefault();
    if (!amount || !title) return alert("Please fill all fields for transaction.");
    
    await addTransaction(transactionType, Number(amount), title);
    
    setTransactionModalOpen(false);
    setAmount("");
    setTitle("");
    fetchData(); // Refetch data after adding
  };
  
  // const handleAddProduct = async (e) => {
  //   e.preventDefault();
  //   if (!productName || !productValue) return alert("Please fill all fields for product.");
    
  //   // Assumes you have an `addProduct` function in your service
  //   await addProduct({ name: productName, value: Number(productValue) });
    
  //   setProductModalOpen(false);
  //   setProductName("");
  //   setProductValue("");
  //   fetchData(); // Refetch data after adding
  // };
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-[#F5F5F5] font-sans">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <DashboardHeader onAddNew={() => setTransactionModalOpen(true)} />

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          <StatCard
            title="Total Revenues"
            value={`$${data?.totals?.revenue?.toLocaleString() || '0'}`}
            change="+2.5%"
          />
          <StatCard
            title="Total Transactions"
            value={data?.totals?.transactions?.toLocaleString() || '0'}
            change="+1.7%"
          />
          <StatCard title="Total Likes" value="9,721" change="+1.4%" />
          <StatCard title="Total Users" value="9,721" change="+4.2%" />
        </div>

        {/* Activities Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivityData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="Income" fill="#98D89E" name="Income" radius={[5, 5, 0, 0]} />
              <Bar dataKey="Expense" fill="#EE8484" name="Expense" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Top Products Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Top products</h3>
            <div className="flex items-center justify-around">
              <ResponsiveContainer width={150} height={150}>
                <PieChart>
                  <Pie data={topProductsData} dataKey="value" innerRadius={60} outerRadius={75} paddingAngle={2}>
                    {topProductsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={TOP_PRODUCTS_COLORS[index % TOP_PRODUCTS_COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <ul className="space-y-3">
                 {topProductsData.slice(0, 3).map((item, index) => (
                    <li key={item.name} className="flex items-start">
                        <div className="w-3 h-3 rounded-full mt-1 mr-2" style={{ backgroundColor: TOP_PRODUCTS_COLORS[index % TOP_PRODUCTS_COLORS.length] }}></div>
                        <div>
                            <p className="font-bold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.value}%</p>
                        </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Add Profile Card */}
          <div
            onClick={() => setProductModalOpen(true)}
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus size={32} className="text-gray-400" />
            </div>
            <p className="font-semibold">Add New Product</p>
          </div>
        </div>
      </main>

      {/* Modals */}
      <Modal isOpen={isTransactionModalOpen} onClose={() => setTransactionModalOpen(false)}>
        <form onSubmit={handleAddTransaction} className="space-y-4">
          <h2 className="text-xl font-bold">Add New Transaction</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Add Transaction</button>
        </form>
      </Modal>

      {/* <Modal isOpen={isProductModalOpen} onClose={() => setProductModalOpen(false)}>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <h2 className="text-xl font-bold">Add New Product</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Percentage Value (%)</label>
            <input type="number" value={productValue} onChange={(e) => setProductValue(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Add Product</button>
        </form>
      </Modal> */}
    </div>
  );
}