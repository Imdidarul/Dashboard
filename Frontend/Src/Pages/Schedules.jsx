import { useEffect, useState } from "react";
import { getSchedules, addSchedule, deleteSchedule } from "../services/scheduleService";
import { Card, CardContent } from "../Components/Ui/card";
import  Button from "../Components/Ui/button";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);

  const loadSchedules = async () => {
    const res = await getSchedules();
    setSchedules(res);
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  const handleAdd = async () => {
    await addSchedule({ task: "New Task", date: new Date() });
    loadSchedules();
  };

  const handleDelete = async (id) => {
    await deleteSchedule(id);
    loadSchedules();
  };

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Schedules</h2>
        <Button onClick={handleAdd} className="mb-4">Add Schedule</Button>
        <ul>
          {schedules.map((s) => (
            <li key={s._id} className="flex justify-between border-b p-2">
              {s.task} – {new Date(s.date).toDateString()}
              <Button variant="destructive" onClick={() => handleDelete(s._id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
