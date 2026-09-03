import { useState, useEffect } from "react";
import { X } from "lucide-react";

const EMPTY_FORM = { nama_paket: "", harga: "", tagline: "" };

export default function PaketHargaModal({ paket, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEdit = Boolean(paket);

  useEffect(() => {
    if (paket) {
      const { nama_paket, harga, tagline } = paket;
      setForm({ nama_paket, harga, tagline });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [paket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        className="bg-white rounded-2xl w-full max-w-md soft-shadow overflow-hidden"
        style={{ animation: "modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="px-8 py-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
          <h2 className="font-headline-md text-xl text-on-surface">
            {isEdit ? "Edit Paket" : "Tambah Paket"}
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors"
            aria-label="Tutup"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Nama Paket
            </label>
            <input
              type="text"
              name="nama_paket"
              value={form.nama_paket}
              onChange={handleChange}
              placeholder="Mis. Basic / Advanced / Pro"
              required
              className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            />
          </div>

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Harga
            </label>
            <input
              type="text"
              name="harga"
              value={form.harga}
              onChange={handleChange}
              placeholder="Mis. Rp5.000.000 - 8.000.000"
              required
              className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            />
          </div>

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Tagline
            </label>
            <input
              type="text"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Mis. Company Profile / Mini Store"
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
            className="bg-primary-container hover:bg-[#d46618] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}