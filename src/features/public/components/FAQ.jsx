import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "Berapa lama waktu pembuatan website/aplikasi?",
        answer  : "Waktu pengerjaan bergantung pada kompleksitas proyek. Untuk landing page biasanya 1-2 minggu, sementara web apps bisa memakan waktu 1-3 bulan.",
    },
    {
        question : "Apakah ada biaya maintenance setelah rilis?",
        answer   : "Kami menyediakan garansi gratis untuk periode tertentu. Setelah itu, tersedia paket maintenance opsional dengan harga terjangkau",
    },
    {
        question    : "Bisakah saya meminta custom design?",
        answer      : "entu, semua layanan kami dapat disesuaikan (custom) dengan brand identity dan kebutuhan spesifik bisnis Anda.",
    },
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                        Frequently Asked{" "}
                        <span className="text-primary-container">Questions</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    
                </div>
            </div>
        </section>
    )
}