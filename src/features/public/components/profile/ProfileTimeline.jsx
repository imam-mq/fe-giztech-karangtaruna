import { useState, useEffect } from "react";
import { getAllProfile } from "../../services/profileService";

export default function ProfileTimeline() {
  const [milestones, setMilestones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProfile();
        setMilestones(data);
      } catch (error) {
        console.error("Gagal memuat data perjalanan:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading || milestones.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-container-lowest py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Perjalanan Kami
          </h2>
        </div>

        <div className="relative overflow-hidden p-4 md:p-10">
          {/* Garis tengah - cuma tampil di desktop */}
          <div
            className="hidden md:block absolute border border-secondary/20 h-full"
            style={{ left: "50%" }}
          />

          {milestones.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.id}
                className={`mb-8 flex items-center w-full ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div
                  className={`order-1 w-1/2 md:w-5/12 ${
                    isEven ? "text-right md:text-right" : "text-right md:text-left"
                  }`}
                >
                  <h4 className="font-label-md text-label-md text-primary-container">
                    {item.tahun}
                  </h4>
                  <p className="font-body-md text-body-md text-secondary">
                    {item.label}
                  </p>
                </div>
                <div className="z-20 hidden md:flex items-center order-1 bg-primary-container shadow-xl w-4 h-4 rounded-full mx-4 shrink-0" />
                <div className="hidden md:block order-1 w-5/12 px-6 py-4" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}