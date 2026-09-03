import api from "../../../config/axios";

export const getAllTestimoni = async () => {
    const response = await api.get("/testimoni");
    return response.data.data;
};

export const createTestimoni = async (formData) => {
    const response = await api.post("/testimoni", formData);
    return response.data.data;
}

export const updateTestimoni  = async (id,formData) => {
    formData.append("_method", "PUT");
    const response = await api.post(`/testimoni/${id}`, formData);
    return response.data.data;
}

export const deleteTestimoni = async (id) => {
  const response = await api.delete(`/testimoni/${id}`);
  return response.data;
};