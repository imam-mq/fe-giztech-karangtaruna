export default function ProfileHero() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">
                        Mengenal Lebih Dekat GIZ Techno
                    </h1>
                    <p className="font-body-lg text-body-lg text-secondary">
                        Partner terpercaya dalam transformasi digital, pengembangan
                        software, dan solusi IT bisnis modern.
                    </p>
                </div>
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden bg-surface-container-low border border-surface-variant flex items-center justify-center">
                    <span className="font-body-md text-on-surface-variant text-sm">
                        Ilustrasi menyusul
                    </span>
                </div>
            </div>
        </section>
    )
}