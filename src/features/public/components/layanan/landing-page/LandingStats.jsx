import { useReveal } from "../../../../../hooks/useReveal";
import { useCountUp } from "../../../../../hooks/useCountUp";

function StatItem({ target, suffix = "", label }) {
    const { ref, isVisible } = useReveal();
    const count = useCountUp(target, isVisible);

    return (
        <div ref={ref}>
            <p className="font-display text-4xl md:text-5xl font-bold text-primary-container mb-2">
                {count}
                {suffix}
            </p>
            <p className="font-body-md text-secondary">
                {label}
            </p>
        </div>
    );
}

export default function LandingStats() {
    const { ref, isVisible } = useReveal();

    return (
        <section ref={ref} className={`reveal ${isVisible ? "in" : ""} py-20 bg-white border-y border-surface-variant`}>
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <StatItem target={50} suffix="+" label="Landing Page Diluncurkan" />

                    <div>
                        <p className="font-display text-4xl md:text-5xl font-bold text-primary-container mb-2">
                            1-2
                        </p>
                        <p className="font-body-md text-secondary">
                            Minggu Rata-rata Pengerjaan
                        </p>
                    </div>

                    <StatItem target={99} suffix="%" label="Klien Puas" />
                </div>
            </div>
        </section>
    );
}