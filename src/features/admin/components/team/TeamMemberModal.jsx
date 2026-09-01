import { useState, useEffect } from "react";
import { X, User, Link2 } from "lucide-react";

const EMPTY_FORM = { name: "", role: "", bio: "", linkedin: "", photo: null };

export default function TeamMemberModal({ member, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEdit = Boolean(member);

  useEffect(() => {
    setForm(member ?? EMPTY_FORM);
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((prev) => ({ ...prev, photo: reader.result }));
    reader.readAsDataURL(file);
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
        className="bg-white rounded-2xl w-full max-w-2xl soft-shadow overflow-hidden flex flex-col max-h-[90vh]"
        style={{ animation: "modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="px-8 py-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
          <h2 className="font-headline-md text-2xl text-on-surface">
            {isEdit ? "Edit Anggota Tim" : "Tambah Anggota Tim"}
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors"
            aria-label="Tutup"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto flex-1 flex flex-col gap-6">
          {/* Foto */}
          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Foto Profil
            </label>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center border border-dashed border-outline overflow-hidden shrink-0">
                {form.photo ? (
                  <img src={form.photo} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User size={28} className="text-on-surface-variant" />
                )}
              </div>
              <label className="px-4 py-2 bg-transparent border-2 border-on-surface text-on-surface hover:bg-surface-container-low rounded-lg font-bold transition-colors cursor-pointer">
                Unggah Foto
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
              <span className="text-xs text-on-surface-variant">JPG, PNG max 2MB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-md text-sm text-on-surface mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                required
                className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>
            <div>
              <label className="block font-label-md text-sm text-on-surface mb-2">
                Jabatan
              </label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Mis. Project Manager"
                required
                className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Bio Singkat
            </label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tuliskan deskripsi singkat peran dan keahlian..."
              rows={3}
              className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block font-label-md text-sm text-on-surface mb-2">
              Link LinkedIn
            </label>
            <div className="relative">
              <Link2
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant"
              />
              <input
                type="url"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="w-full pl-11 pr-4 py-3 bg-surface-bright border border-surface-variant rounded-lg text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>
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