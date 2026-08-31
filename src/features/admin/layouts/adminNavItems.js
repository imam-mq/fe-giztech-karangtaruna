import {
  LayoutDashboard,
  Inbox,
  CheckSquare,
  Database,
  Newspaper,
  Users,
  Layers,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    section: "Menu Utama",
    items: [
      { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Aspirasi/Pengaduan", to: "/admin/aspirasi", icon: Inbox },
      {
        label: "Approval",
        to: "/admin/approval",
        icon: CheckSquare,
        badge: 5,
      },
    ],
  },
  {
    section: "Manajemen",
    items: [
      {
        label: "Master Data",
        icon: Database,
        children: [
          { label: "Wilayah", to: "/admin/master-data/wilayah" },
          { label: "Kategori Pengaduan", to: "/admin/master-data/kategori" },
        ],
      },
      { label: "Kelola Berita", to: "/admin/berita", icon: Newspaper },
      { label: "Manajemen User", to: "/admin/users", icon: Users },
      {
        label: "Web Profile CMS",
        icon: Layers,
        children: [
          { label: "Beranda", to: "/admin/web-profile/beranda" },
          { label: "Tentang Kami", to: "/admin/web-profile/tentang-kami" },
          { label: "Layanan & Paket", to: "/admin/web-profile/layanan" },
          { label: "Portofolio", to: "/admin/web-profile/portofolio" },
          { label: "Testimoni", to: "/admin/web-profile/testimoni" },
        ],
      },
    ],
  },
];