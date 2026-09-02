import api from "../../../config/axios";

export const getAllTim = async () => {
    const response = await api.get("/tim");
    return response.data.data;
};

export const createTim = async (formData) => {
    const response = await api.post("/tim", formData);
    return response.data.data;
};

export const updateTim = async (id, formData) => {
    formData.append("_method", "PUT");
    const response = await api.post(`/tim/${id}`, formData);
    return response.data.data;
};

export const deleteTim = async (id) => {
    const response = await api.delete(`/tim/${id}`);
    return response.data;
};