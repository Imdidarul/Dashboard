import api from "../utils/api";

export const syncUser = async (user) => {
  const res = await api.post("/users/sync", user);
  return res.data;
};

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
