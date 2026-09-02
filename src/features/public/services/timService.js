import api from "../../../config/axios";

export const getAllTim = async () => {
    const response = await api.get("/tim");
    return response.data.data;
};