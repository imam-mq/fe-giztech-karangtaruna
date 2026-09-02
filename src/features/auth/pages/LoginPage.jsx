import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logoUtama from "../../../assets/logos/GIZ Tech logo-01.png";
import businessTeamGif from "../../../assets/images/business-team.gif";
import { useToast } from "../../../components/ui/ToastProvider";
import { useAuthStore } from "../../../store/authStore";
import { login as authLogin } from "../services/authService";


const DEMO_CREDENTIALS = {
  email: "admin@giztechnology.com",
  password: "admin123",
};

export default function LoginPage() {
  const { showToast } = useToast();
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await authLogin(form.email, form.password);

      login(
        { name: data.user.name, role: data.user.role, email: data.user.email },
        data.token
      );

      showToast({
        type: "success",
        title: "Login Berhasil",
        message: "Mengalihkan ke dashboard admin",
      });
      setTimeout(() => navigate("/admin/dashboard"), 600);
    } catch (error) {
      const message = error.response?.data?.message || "Email atau password yang Anda masukkan salah.";

      showToast({
        type: "error",
        title: "Login Gagal",
        message,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Form */}
        <div
          className="flex flex-col gap-6 w-full max-w-md mx-auto"
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUtama} alt="GIZ Technology" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary-container">
              GIZ Technology
            </span>
          </Link>

          <div>
            <h1 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="font-body-md text-secondary">
              Kelola konten dan sistem GIZ Technology dari sini.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block font-label-md text-sm text-on-surface mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@giztechnology.com"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-surface-variant focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-sm text-on-surface mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-surface-variant focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-secondary cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-surface-variant accent-primary-container"
                />
                Ingat saya
              </label>
              <a
                href="#"
                className="text-primary-container font-medium hover:underline"
              >
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-container text-white font-label-md py-3.5 rounded-xl hover:bg-[#d46618] active:scale-[0.98] transition-all shadow-lg shadow-primary-container/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant">
            Butuh bantuan?{" "}
            <a href="#" className="text-primary-container font-medium hover:underline">
              Hubungi Admin
            </a>
          </p>

          {/* ⚠️ Petunjuk demo - hapus blok ini nanti */}
          <div className="text-center text-xs text-on-surface-variant bg-surface-container-low rounded-lg p-3">
            Demo: <strong>admin@giztechnology.com</strong> /{" "}
            <strong>admin123</strong>
          </div>
        </div>

        {/* Right: Illustration panel */}
        <div
          className="hidden lg:flex relative rounded-3xl bg-gradient-to-br from-primary-container to-amber-500 p-10 h-[560px] items-center justify-center overflow-hidden"
          style={{ animation: "fadeInUp 0.6s ease-out both", animationDelay: "150ms" }}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />

          <img
            src={businessTeamGif}
            alt="Ilustrasi tim bekerja sama"
            className="relative z-10 w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}