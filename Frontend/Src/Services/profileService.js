import api from "../utils/api";

export const getProfiles = async () => {
  const res = await api.get("/profiles");
  return res.data;
};

export const addProfile = async (data) => {
  const res = await api.post("/profiles", data);
  return res.data;
};

export const updateProfile = async (id, data) => {
  const res = await api.put(`/profiles/${id}`, data);
  return res.data;
};

export const deleteProfile = async (id) => {
  const res = await api.delete(`/profiles/${id}`);
  return res.data;
};
