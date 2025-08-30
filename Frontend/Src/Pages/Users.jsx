import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { Card, CardContent } from "../Components/Ui/card";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getUsers();
      setUsers(res);
    })();
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Users</h2>
        <ul>
          {users.map((u) => (
            <li key={u._id} className="p-2 border-b flex items-center gap-2">
              <img src={u.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <span>{u.name} ({u.email})</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
