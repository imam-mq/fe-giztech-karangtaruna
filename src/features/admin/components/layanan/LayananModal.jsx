import { useState, useEffect } from "react";
import { X } from "lucide-react";

const EMPTY_FORM = {
  nama_layanan: "",
  slug: "",
  deskripsi_singkat: "",
  harga_mulai_dari: "",
};

/**
 * availableServices: daftar PREDEFINED_SERVICES yang BELUM ditambahkan
 * (cuma dipakai pas mode tambah baru, biar admin nggak bisa pilih yang udah ada).
 */
export default function LayananModal({ layanan, availableServices = [], onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEdit = Boolean(layanan);

  useEffect(() => {
    if (layanan) {
      const { nama_layanan, slug, deskripsi_singkat, harga_mulai_dari } = layanan;
      setForm({ nama_layanan, slug, deskripsi_singkat, harga_mulai_dari });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [layanan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Pas pilih dari dropdown, isi otomatis nama_layanan + slug sekaligus
  const handleSelectService = (e) => {
    const slug = e.target.value;
    const selected = availableServices.find((s) => s.slug === slug);
    setForm((prev) => ({
      ...prev,
      nama_layanan: selected?.nama_layanan ?? "",
      slug: selected?.slug ?? "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div
      className="fixed inset-0 bg-[#1E293B]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg soft-shadow overflow-hidden flex flex-col max-h-[90vh]"
        style={{ animation: "modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="px-8 py-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
          <h2 className="font-headline-md text-xl text-on-surface">
            {isEdit ? "Edit Layanan" : "Tambah Layanan"}
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors"
            aria-label="Tutup"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto flex-1 flex flex-col gap-5">
          {isEdit ? (
            <div className="bg-surface-container-low rounded-lg px-4 py-3">
              <p className="font-headline-md text-sm text-on-surface">{form.nama_layanan}</p>
              <p className="font-mono text-xs text-on-surface-variant mt-0.5">/{form.slug}</p>
            </div>
          ) : (
            <div>
              <label className="block font-label-md text-sm text-on-surface mb-2">
                Pilih Layanan
              </label>
              {availableServices.length > 0 ? (
                <select
                  value={form.slug}
                  onChange={handleSelectService}
                  required
                  className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                >
                  <option value="" disabled>
                    -- Pilih salah satu layanan --
                  </option>
                  {availableServices.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.nama_layanan}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="text-sm text-on-surface-variant bg-surface-container-low rounded-lg px-4 py-3">
                  Semua layanan yang tersedia sudah ditambahkan.
                </p>
              )}
              <p className="text-xs text-on-surface-variant mt-1.5">
                Daftar layanan dikunci sesuai halaman yang sudah ada di
                website publik.
              </p>
            </div>
          )}

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Deskripsi Singkat
            </label>
            <textarea
              name="deskripsi_singkat"
              value={form.deskripsi_singkat}
              onChange={handleChange}
              placeholder="Jelaskan layanan ini secara singkat..."
              rows={3}
              required
              className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Harga Mulai Dari
            </label>
            <input
              type="text"
              name="harga_mulai_dari"
              value={form.harga_mulai_dari}
              onChange={handleChange}
              placeholder="Mis. Rp5.000.000"
              required
              className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            />
          </div>
        </form>

        <div className="px-8 py-6 border-t border-surface-variant bg-surface-bright flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-transparent border-2 border-surface-variant text-on-surface-variant hover:bg-surface-container rounded-lg font-bold transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isEdit && availableServices.length === 0}
            className="bg-primary-container hover:bg-[#d46618] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}