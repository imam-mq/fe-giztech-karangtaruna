import { User } from "lucide-react";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Data resmi dari PDF Portofolio & Offering GIZ Technology (halaman "Meet Our Experts").
// Ganti "linkedin" jadi URL profil asli kalau sudah ada, atau hapus prop-nya kalau belum.
const TEAM = [
  {
    name: "Izzul Faturrizky",
    role: "Project Manager",
    bio: "Mengelola proyek dari perencanaan hingga rilis dengan pendekatan Agile.",
    linkedin: "#",
  },
  {
    name: "Gilang Mukharom",
    role: "Software Engineer",
    bio: "Membangun fondasi teknis website dan aplikasi web klien.",
    linkedin: "#",
  },
  {
    name: "Naufal Hafizh",
    role: "Backend Developer",
    bio: "Menerjemahkan desain menjadi antarmuka yang responsif dan interaktif.",
    linkedin: "#",
  },
  {
    name: "Imam Mubaraq",
    role: "Tech Support Analis",
    bio: "desain system & document technical.",
    linkedin: "#",
  },
  {
    name: "Muh Fadil Nur",
    role: "Marketing Communication",
    bio: "Menjembatani komunikasi GIZ Technology dengan klien dan publik.",
    linkedin: "#",
  },
];

export default function TimGrid() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {TEAM.map(({ name, role, bio, linkedin }) => (
          <div
            key={name}
            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center soft-shadow card-hover-accent transition-transform hover:-translate-y-2"
          >
            <div className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-surface-container-low shadow-inner bg-surface-container-high flex items-center justify-center">
              <User size={48} className="text-secondary" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
              {name}
            </h3>
            <p className="font-label-md text-label-md text-primary-container mb-4">
              {role}
            </p>
            <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
              {bio}
            </p>
            {linkedin && (
            <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${name}`}
                className="text-secondary hover:text-primary-container transition-colors"
            >
                <LinkedinIcon width="20" height="20" /> 
            </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}