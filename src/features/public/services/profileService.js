import api from "../../../config/axios";

export const getAllProfile = async () => {
  const response = await api.get("/profile");
  return response.data.data;
};