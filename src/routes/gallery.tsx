import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageBanner, SiteLayout } from "@/components/site";
import { siteImages } from "@/data/site-config";

const galleryImages = [
  {
    src: siteImages.logo,
    alt: "पुलिस सहायता संगठन का मूल लोगो",
    title: "पुलिस सहायता संगठन · ऑल इंडिया",
    logo: true,
  },
  { src: siteImages.nishaMain, alt: "राष्ट्रीय अध्यक्ष निशा का पूरा बैनर", title: "राष्ट्रीय अध्यक्ष – बैनर" },
  { src: siteImages.nisha, alt: "राष्ट्रीय अध्यक्ष निशा का पोर्ट्रेट", title: "राष्ट्रीय अध्यक्ष – पोर्ट्रेट" },
  ...Array.from({ length: 18 }, (_, i) => ({
    src: `/media/images/activity-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `संगठन गतिविधि की मूल तस्वीर ${i + 1}`,
    title: "संगठन की गतिविधियों की झलक",
  })),
];

const galleryVideos = Array.from({ length: 12 }, (_, i) => {
  const number = String(i + 1).padStart(2, "0");
  return {
    src: `/media/videos/activity-${number}.mp4`,
    poster: `/media/posters/activity-${number}.jpg`,
    title: `संगठन गतिविधि ${number}`,
    orientation: [2, 3, 4, 5, 7, 10].includes(i + 1) ? "landscape" : "portrait",
  };
});

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "गैलरी | पुलिस सहायता संगठन" },
      { name: "description", content: "पुलिस सहायता संगठन की मूल तस्वीरें, गतिविधियां और वीडियो।" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);
  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="गैलरी"
        title="संगठन की गतिविधियां"
        description="संगठन की मूल पहचान, उपलब्ध तस्वीरें और वीडियो। तस्वीरों को पूरा देखने के लिए किसी चित्र पर क्लिक करें।"
      />
      <section className="section-pad">
        <div className="page-wrap">
          <h2 className="mb-5 text-2xl font-bold text-primary">तस्वीरें</h2>
          <div className="gallery-page-grid">
            {galleryImages.map((item) => (
              <button
                key={item.src}
                type="button"
                className={`gallery-portrait-panel ${item.logo ? "gallery-logo-panel" : ""}`}
                onClick={() => setSelected(item)}
                aria-label={`${item.alt} बड़ा देखें`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-caption">{item.title}</span>
              </button>
            ))}
          </div>

          <h2 className="mb-5 mt-12 text-2xl font-bold text-primary">वीडियो</h2>
          <div className="gallery-video-grid">
            {galleryVideos.map((video) => (
              <article className="gallery-video-card" key={video.src}>
                <div className={`gallery-video-frame ${video.orientation}`}>
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={video.poster}
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    आपका ब्राउज़र वीडियो नहीं चला सकता।
                  </video>
                </div>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="चित्र बंद करें"
          >
            <X aria-hidden="true" />
          </button>
          <img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} />
          <p>{selected.title}</p>
        </div>
      )}
    </SiteLayout>
  );
}
