import { useState, useEffect } from "react";
import { X, Image, CheckCircle2, Plus } from "lucide-react";

const CATEGORIES = ["Web Apps", "UI/UX Design", "Landing Page", "Graphic Design & Logo"];

const EMPTY_FORM = {
  title: "",
  slug: "",
  category: CATEGORIES[0],
  year: "",
  status: "completed",
  description: "",
  highlights: [],
  techStack: [],
};

export default function ProjectModal({ project, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [newHighlight, setNewHighlight] = useState("");
  const [newTech, setNewTech] = useState("");
  const isEdit = Boolean(project);

  useEffect(() => {
    setForm(project ?? EMPTY_FORM);
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: isEdit
        ? prev.slug
        : value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-"),
    }));
  };

  const addHighlight = (e) => {
    e.preventDefault();
    if (!newHighlight.trim()) return;
    setForm((prev) => ({ ...prev, highlights: [...prev.highlights, newHighlight.trim()] }));
    setNewHighlight("");
  };

  const removeHighlight = (i) => {
    setForm((prev) => ({ ...prev, highlights: prev.highlights.filter((_, idx) => idx !== i) }));
  };

  const addTech = (e) => {
    e.preventDefault();
    if (!newTech.trim()) return;
    setForm((prev) => ({ ...prev, techStack: [...prev.techStack, newTech.trim()] }));
    setNewTech("");
  };

  const removeTech = (i) => {
    setForm((prev) => ({ ...prev, techStack: prev.techStack.filter((_, idx) => idx !== i) }));
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
        className="bg-white rounded-2xl w-full max-w-4xl soft-shadow overflow-hidden flex flex-col max-h-[90vh]"
        style={{ animation: "modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="px-8 py-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright shrink-0">
          <h2 className="font-headline-md text-xl text-on-surface">
            {isEdit ? "Edit Proyek" : "Tambah Proyek"}
          </h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors" aria-label="Tutup">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* LEFT: info dasar */}
            <div className="flex flex-col gap-5">
              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Thumbnail</label>
                <div className="h-28 rounded-lg border-2 border-dashed border-outline bg-surface-container-low flex flex-col items-center justify-center gap-1 text-on-surface-variant">
                  <Image size={22} />
                  <span className="text-xs">Unggah Thumbnail</span>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Judul Proyek</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="Mis. Dashboard Analytics - ASII"
                  required
                  className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                />
                <p className="font-mono text-xs text-on-surface-variant mt-1">/{form.slug}</p>
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Kategori</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Tahun</label>
                <input
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="Mis. 2025 atau Sedang Berjalan"
                  required
                  className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                />
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Status</label>
                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      status: prev.status === "ongoing" ? "completed" : "ongoing",
                    }))
                  }
                  className="flex items-center gap-3"
                >
                  <span
                    className={`relative w-10 h-5.5 rounded-full transition-colors ${
                      form.status === "ongoing" ? "bg-amber-500" : "bg-success-green"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform ${
                        form.status === "ongoing" ? "translate-x-0.5" : "translate-x-5"
                      }`}
                    />
                  </span>
                  <span className="text-sm font-medium text-on-surface inline-flex items-center gap-1.5">
                    {form.status === "ongoing" && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                      </span>
                    )}
                    {form.status === "ongoing" ? "Sedang Berjalan" : "Selesai"}
                  </span>
                </button>
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-2">Deskripsi</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  required
                  placeholder="Jelaskan proyek ini secara singkat..."
                  className="w-full bg-surface-bright border border-surface-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-none"
                />
              </div>
            </div>

            {/* RIGHT: Fitur Utama + Tools & Teknologi */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-label-md text-sm text-on-surface mb-3">
                  Fitur Utama
                </label>
                <ul className="flex flex-col gap-2 mb-3">
                  {form.highlights.map((h, i) => (
                    <li key={i} className="group/h flex items-start justify-between gap-2 text-sm text-on-surface-variant">
                      <span className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-success-green shrink-0 mt-0.5" />
                        {h}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeHighlight(i)}
                        className="opacity-0 group-hover/h:opacity-100 text-on-surface-variant hover:text-error transition-all shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    placeholder="Tambah fitur utama..."
                    className="flex-1 min-w-0 bg-surface-bright border border-surface-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  />
                  <button
                    type="button"
                    onClick={addHighlight}
                    className="shrink-0 p-2 bg-primary-container/10 text-primary-container rounded-lg hover:bg-primary-container/20 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-sm text-on-surface mb-3">
                  Tools & Teknologi
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {form.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-surface-container-low rounded-full pl-3 pr-2 py-1.5 text-sm text-on-surface"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTech(i)}
                        className="text-on-surface-variant hover:text-error transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    placeholder="Mis. React, PostgreSQL..."
                    className="flex-1 min-w-0 bg-surface-bright border border-surface-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  />
                  <button
                    type="button"
                    onClick={addTech}
                    className="shrink-0 p-2 bg-primary-container/10 text-primary-container rounded-lg hover:bg-primary-container/20 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="px-8 py-6 border-t border-surface-variant bg-surface-bright flex justify-end gap-4 shrink-0">
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