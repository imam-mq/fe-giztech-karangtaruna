import api from "../../../config/axios";

export const getAllProfile = async () => {
    const response = await api.get("/profile");
    return response.data.data;
};

export const createProfile = async (payload) => {
    const response = await api.post("/profile", payload);
    return response.data.data;
};

export const updateProfile = async (id, payload) => {
    const response = await api.put(`/profile/${id}`, payload);
    return response.data.data;
};

export const deleteProfile = async (id) => {
  const response = await api.delete(`/profile/${id}`);
  return response.data;
};