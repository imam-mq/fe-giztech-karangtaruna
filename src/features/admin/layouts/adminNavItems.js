import { LayoutDashboard, Layers } from "lucide-react";

export const NAV_ITEMS = [
  {
    section: "Menu Utama",
    items: [{ label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard }],
  },
  {
    section: "Kelola Konten",
    items: [
      {
        label: "Web Profile",
        icon: Layers,
        children: [
          { label: "Beranda", to: "/admin/web-profile/beranda" },
          { label: "Profil Perusahaan", to: "/admin/web-profile/profil-perusahaan" },
          { label: "Tim", to: "/admin/web-profile/tim", count: 6 },
          { label: "Layanan & Paket", to: "/admin/web-profile/layanan", count: 4 },
          { label: "Portofolio", to: "/admin/web-profile/portofolio", count: 5 },
          { label: "Testimoni", to: "/admin/web-profile/testimoni", count: 3 },
        ],
      },
    ],
  },
];