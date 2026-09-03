// ⚠️ SEMENTARA - data awal sama dengan yang tampil di halaman publik tiap
// layanan. Begitu backend siap, ganti dengan fetch GET /api/layanan/{slug}/paket.
let nextId = 1000;
const uid = () => nextId++;

export const INITIAL_PACKAGES = {
  "web-apps": [
    {
      id: uid(),
      nama_paket: "Basic",
      harga: "Rp5.000.000 - 8.000.000",
      tagline: "Company Profile / Mini Store",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Custom Design" },
        { id: uid(), fitur_text: "Infrastruktur & Hosting" },
        { id: uid(), fitur_text: "Standard Contact & Socials" },
        { id: uid(), fitur_text: "Keamanan & SSL" },
        { id: uid(), fitur_text: "Maintenance 1 Bulan" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Advanced",
      harga: "Rp10.000.000 - 15.000.000",
      tagline: "E-Commerce / Custom Portal",
      is_populer: true,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Basic" },
        { id: uid(), fitur_text: "Payment Gateway / Shipping Integration" },
        { id: uid(), fitur_text: "Copywriting Optimized" },
        { id: uid(), fitur_text: "API Integration" },
        { id: uid(), fitur_text: "Maintenance 3 Bulan" },
        { id: uid(), fitur_text: "Dedicated Support" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Pro",
      harga: "Rp21.000.000+",
      tagline: "Web Application / SaaS / ERP / Custom System",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Advanced" },
        { id: uid(), fitur_text: "Custom API & Multi-role User Access" },
        { id: uid(), fitur_text: "AI Analytics Dashboard" },
        { id: uid(), fitur_text: "Maintenance 6 Bulan" },
      ],
    },
  ],
  "ui-ux-design": [
    {
      id: uid(),
      nama_paket: "Basic",
      harga: "Rp500.000 - 1.500.000",
      tagline: "Untuk kebutuhan desain sederhana",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Wireframe & User Flow" },
        { id: uid(), fitur_text: "Desktop + Mobile Design" },
        { id: uid(), fitur_text: "1x Iterasi Revisi" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Advanced",
      harga: "Rp1.500.000 - 3.000.000",
      tagline: "Untuk produk digital yang siap diuji pengguna",
      is_populer: true,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Basic" },
        { id: uid(), fitur_text: "High Fidelity Prototype" },
        { id: uid(), fitur_text: "A/B Testing" },
        { id: uid(), fitur_text: "User Journey Mapping" },
        { id: uid(), fitur_text: "2-3x Iterasi Revisi" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Pro",
      harga: "Rp4.000.000+",
      tagline: "Untuk produk kompleks & tim developer besar",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Advanced" },
        { id: uid(), fitur_text: "Multiple Prototypes" },
        { id: uid(), fitur_text: "Developer Handoff" },
        { id: uid(), fitur_text: "Iterasi Unlimited" },
      ],
    },
  ],
  "landing-page": [
    {
      id: uid(),
      nama_paket: "Basic",
      harga: "Rp2.000.000 - 5.000.000",
      tagline: "Untuk kebutuhan landing page sederhana",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Maksimal 3 Halaman" },
        { id: uid(), fitur_text: "Domain & Hosting 1 Tahun" },
        { id: uid(), fitur_text: "UI/UX Design" },
        { id: uid(), fitur_text: "Mobile Responsive" },
        { id: uid(), fitur_text: "Integrasi Chat" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Advanced",
      harga: "Rp7.000.000 - 9.000.000",
      tagline: "Untuk konversi & branding yang lebih kuat",
      is_populer: true,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Basic" },
        { id: uid(), fitur_text: "Maksimal 5 Halaman" },
        { id: uid(), fitur_text: "Copywriting Konten" },
        { id: uid(), fitur_text: "Integrasi WhatsApp/Chat" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Pro",
      harga: "Rp12.000.000 - 15.000.000",
      tagline: "Untuk landing page multi-section skala besar",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Semua fitur paket Advanced" },
        { id: uid(), fitur_text: "7+ Halaman (Multi-section)" },
        { id: uid(), fitur_text: "SEO Dasar" },
        { id: uid(), fitur_text: "Maintenance 3 Bulan Priority Support" },
      ],
    },
  ],
  "graphic-design": [
    {
      id: uid(),
      nama_paket: "Basic",
      harga: "Rp300.000 - 700.000",
      tagline: "Logo / Simple Design",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "Logo / Simple Design" },
        { id: uid(), fitur_text: "2 Konsep Awal" },
        { id: uid(), fitur_text: "2x Revisi" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Advanced",
      harga: "Rp800.000 - 1.000.000",
      tagline: "Untuk branding yang lebih lengkap",
      is_populer: true,
      fitur: [
        { id: uid(), fitur_text: "3 Konsep Awal" },
        { id: uid(), fitur_text: "3x Revisi" },
        { id: uid(), fitur_text: "Stationery Kit" },
        { id: uid(), fitur_text: "Social Media Kit" },
      ],
    },
    {
      id: uid(),
      nama_paket: "Pro",
      harga: "Rp1.500.000+",
      tagline: "Untuk brand identity menyeluruh",
      is_populer: false,
      fitur: [
        { id: uid(), fitur_text: "5 Konsep Awal" },
        { id: uid(), fitur_text: "Revisi Unlimited (2 bulan)" },
        { id: uid(), fitur_text: "Company Profile" },
        { id: uid(), fitur_text: "Brand Guideline Book" },
      ],
    },
  ],
};