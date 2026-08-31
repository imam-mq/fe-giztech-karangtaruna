import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

const ToastContext = createContext(null);

const VARIANTS = {
  success: {
    icon: CheckCircle2,
    border: "border-l-success-green",
    iconColor: "text-success-green",
  },
  error: {
    icon: XCircle,
    border: "border-l-error",
    iconColor: "text-error",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    iconColor: "text-amber-500",
  },
  info: {
    icon: Info,
    border: "border-l-primary-container",
    iconColor: "text-primary-container",
  },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type = "info", title, message, duration = 4000 }) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, type, title, message, duration }]);

      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container - fixed top-right */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ type, title, message, duration, onClose }) {
  const { icon: Icon, border, iconColor } = VARIANTS[type] ?? VARIANTS.info;

  return (
    <div
      className={`pointer-events-auto relative bg-white rounded-xl shadow-xl border border-surface-variant border-l-4 ${border} overflow-hidden`}
      style={{ animation: "toastSlideIn 0.3s ease-out both" }}
      role="alert"
    >
      <div className="flex items-start gap-3 p-4">
        <Icon size={20} className={`${iconColor} shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-headline-md text-sm font-semibold text-on-surface mb-0.5">
              {title}
            </p>
          )}
          {message && (
            <p className="font-body-md text-sm text-secondary">{message}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-on-surface-variant hover:text-on-surface transition-colors shrink-0"
          aria-label="Tutup notifikasi"
        >
          <X size={16} />
        </button>
      </div>

      {/* Progress bar auto-dismiss */}
      {duration > 0 && (
        <div className="h-1 bg-surface-container-low">
          <div
            className={`h-full ${iconColor.replace("text-", "bg-")}`}
            style={{
              animation: `toastProgress ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast harus dipakai di dalam <ToastProvider>");
  }
  return ctx;
}