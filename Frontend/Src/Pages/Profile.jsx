// import { useEffect, useState } from "react";
// import { getProfiles, addProfile } from "../services/profileService";
// import { Card, CardContent } from "../Components/Ui/card";
// import Button from "../Components/Ui/button";

// export default function Profile() {
//   const [profiles, setProfiles] = useState([]);

//   const loadProfiles = async () => {
//     const res = await getProfiles();
//     setProfiles(res);
//   };

//   useEffect(() => {
//     loadProfiles();
//   }, []);

//   const handleAdd = async () => {
//     await addProfile({ name: "John Doe", email: "john@example.com", phone: "1234567890" });
//     loadProfiles();
//   };

//   return (
//     <Card>
//       <CardContent>
//         <h2 className="text-xl font-bold mb-2">Profiles</h2>
//         <Button onClick={handleAdd} className="mb-4">Add Profile</Button>
//         <ul>
//           {profiles.map((p) => (
//             <li key={p._id} className="flex justify-between border-b p-2">
//               {p.name} ({p.email}) – {p.phone}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// }

import { useEffect, useState } from "react";
import { getProfiles, addProfile } from "../services/profileService";
import { Card, CardContent } from "../Components/Ui/card";
import Button from "../Components/Ui/button";
import Input from "../Components/Ui/input";

export default function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("basic");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const loadProfiles = async () => {
    const res = await getProfiles();
    setProfiles(res);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    await addProfile(formData);
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      instagram: "",
      youtube: "",
    });
    loadProfiles();
  };

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Profiles</h2>
          <Button onClick={() => setOpen(true)}>+ Add Profile</Button>
        </div>

        <ul>
          {profiles.map((p) => (
            <li key={p._id} className="flex justify-between border-b p-2">
              {p.name} ({p.email}) – {p.phone}
            </li>
          ))}
        </ul>

        {/* Simple Modal */}
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
              <h2 className="text-lg font-bold mb-4">Add New Profile</h2>

              {/* Tabs Navigation */}
              <div className="flex space-x-4 mb-4">
                <button
                  className={`px-3 py-1 rounded ${
                    step === "basic" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setStep("basic")}
                >
                  Basic
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    step === "social" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setStep("social")}
                >
                  Social
                </button>
              </div>

              {/* Basic Form */}
              {step === "basic" && (
                <div className="space-y-3">
                  <Input
                    placeholder="Enter Name*"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                  <Input
                    placeholder="Enter Email*"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <Input
                    placeholder="Enter Phone*"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button onClick={() => setStep("social")}>Next</Button>
                  </div>
                </div>
              )}

              {/* Social Form */}
              {step === "social" && (
                <div className="space-y-3">
                  <Input
                    placeholder="Instagram Link (Optional)"
                    value={formData.instagram}
                    onChange={(e) => handleChange("instagram", e.target.value)}
                  />
                  <Input
                    placeholder="YouTube Link (Optional)"
                    value={formData.youtube}
                    onChange={(e) => handleChange("youtube", e.target.value)}
                  />
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep("basic")}>
                      Back
                    </Button>
                    <Button onClick={handleSubmit}>Done</Button>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
