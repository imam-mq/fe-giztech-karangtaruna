export const CATEGORIES = [
  "Semua",
  "Web Apps",
  "UI/UX Design",
  "Landing Page",
  "Graphic Design & Logo",
];

export const PROJECTS = [
  {
    slug: "karang-taruna-national-system",
    title: "Karang Taruna National System",
    category: "Web Apps",
    year: "Sedang Berjalan",
    status: "ongoing",
    description:
      "Sistem manajemen aspirasi, usulan, dan pelaporan terpusat untuk Karang Taruna dari tingkat kampung hingga pusat, mendigitalisasi proses yang sebelumnya manual.",
    highlights: [
      "Alur Pengajuan, Verifikasi, hingga Approval Terdigitalisasi",
      "Multi-Role: Pusat, Team CSR, Admin & User Karang Taruna",
      "Dashboard Monitoring Real-time",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "dashboard-analytics-asii",
    title: "Dashboard Analytics - ASII",
    category: "Web Apps",
    year: "2025",
    status: "completed",
    description:
      "Dashboard analitik untuk mendukung pengambilan keputusan berbasis data, dengan visualisasi finansial dan operasional real-time.",
    highlights: [
      "Visualisasi Data Real-time",
      "Multi Akun & Role Access",
      "Export Laporan",
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "aplikasi-booking-klinik-gigi",
    title: "Aplikasi Booking Klinik Gigi",
    category: "UI/UX Design",
    year: "2022",
    status: "completed",
    description:
      "Desain UI/UX aplikasi booking jadwal periksa gigi dengan alur yang sederhana dan intuitif bagi pasien.",
    highlights: [
      "User Flow Booking Sederhana",
      "Desain Mobile-first",
      "Prototype Siap Uji Pengguna",
    ],
    techStack: ["Figma", "User Research", "Prototyping"],
  },
  {
    slug: "yayasan-nursyifa",
    title: "Yayasan Nursyifa",
    category: "Landing Page",
    year: "2022",
    status: "completed",
    description:
      "Landing page profil yayasan untuk memperkenalkan visi misi dan kegiatan kepada publik.",
    highlights: ["Desain Responsif", "SEO Dasar", "Integrasi Kontak"],
    techStack: ["React", "Tailwind CSS"],
  },
  {
    slug: "panti-lansia-potroyudan",
    title: "Panti Pelayanan Sosial Lansia Potroyudan",
    category: "Landing Page",
    year: "2024",
    status: "completed",
    description:
      "Landing page informasi layanan panti sosial lansia beserta dokumentasi wisma dan kegiatan.",
    highlights: [
      "Galeri Dokumentasi Wisma",
      "Informasi Layanan Publik",
      "Desain Responsif",
    ],
    techStack: ["React", "Tailwind CSS"],
  },
];
 
export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}