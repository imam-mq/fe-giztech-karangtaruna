import api from "../../../config/axios";

export const getAllTestimoni = async () => {
  const response = await api.get("/testimoni");
  return response.data.data;
};