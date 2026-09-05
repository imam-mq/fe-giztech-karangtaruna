import api from "../../../config/axios";

export const getAllLayanan = async () => {
    const response = await api.get("/layanan");
    return response.data.data;
}

export const getLayananBySlug = async () => {
    const response = await api.get(`/layanan/${slug}`);
    return response.data.data;
}

export const createLayanan = async (payload) => {
  const response = await api.post("/layanan", payload);
  return response.data.data;
};

export const updateLayanan = async (slug, payload) => {
  const response = await api.put(`/layanan/${slug}`, payload);
  return response.data.data;
};

export const deleteLayanan = async (slug) => {
  const response = await api.delete(`/layanan/${slug}`);
  return response.data;
};

export const createPaketHarga = async (layananSlug, payload) => {
  const response = await api.post(`/layanan/${layananSlug}/paket-harga`, payload);
  return response.data.data;
};

export const updatePaketHarga = async (paketId, payload) => {
  const response = await api.put(`/paket-harga/${paketId}`, payload);
  return response.data.data;
};

export const deletePaketHarga = async (paketId) => {
  const response = await api.delete(`/paket-harga/${paketId}`);
  return response.data;
};

export const createPaketFitur = async (paketId, fiturText) => {
  const response = await api.post(`/paket-harga/${paketId}/paket-fitur`, {
    fitur_text: fiturText,
  });
  return response.data.data;
};

export const deletePaketFitur = async (fiturId) => {
  const response = await api.delete(`/paket-fitur/${fiturId}`);
  return response.data;
};