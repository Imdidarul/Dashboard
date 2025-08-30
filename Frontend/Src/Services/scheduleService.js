import api from "../utils/api";

export const getSchedules = async () => {
  const res = await api.get("/schedules");
  return res.data;
};

export const addSchedule = async (data) => {
  const res = await api.post("/schedules", data);
  return res.data;
};

export const updateSchedule = async (id, data) => {
  const res = await api.put(`/schedules/${id}`, data);
  return res.data;
};

export const deleteSchedule = async (id) => {
  const res = await api.delete(`/schedules/${id}`);
  return res.data;
};
