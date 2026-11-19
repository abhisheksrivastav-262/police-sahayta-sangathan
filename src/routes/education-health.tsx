import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { InfoCard, PageBanner, SectionLabel, SiteLayout } from "@/components/site";
import { educationTopics } from "@/data/site";

export const Route = createFileRoute("/education-health")({
  head: () => ({
    meta: [
      { title: "शिक्षा एवं स्वास्थ्य | पुलिस सहायता संगठन" },
      {
        name: "description",
        content: "बच्चों की शिक्षा, स्कूल जागरूकता, स्वास्थ्य जांच और जरूरतमंद मरीजों के सहयोग के प्रयास।",
      },
    ],
  }),
  component: EducationHealthPage,
});

function EducationHealthPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="शिक्षा एवं स्वास्थ्य"
        title="जागरूकता से बेहतर अवसर और बेहतर देखभाल"
        description="बच्चों की शिक्षा, स्कूल अभियान, स्वास्थ्य जागरूकता और मरीजों को सहायता तक पहुंचाने के प्रयास।"
      />
      <section className="section-pad">
        <div className="page-wrap">
          <SectionLabel>शिक्षा और स्वास्थ्य के प्रयास</SectionLabel>
          <h2 className="section-title mt-3">समुदाय के लिए सहयोग और जानकारी</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {educationTopics.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad self-defense-section">
        <div className="page-wrap">
          <div className="self-defense-heading">
            <div>
              <SectionLabel>बच्चों की सुरक्षा</SectionLabel>
              <h2 className="section-title mt-3">बच्चों के लिए आत्मरक्षा जागरूकता</h2>
              <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
                बच्चों में सुरक्षा, आत्मविश्वास और सतर्कता के महत्व को समझाने के लिए यह वीडियो श्रृंखला देखें।
              </p>
            </div>
            <span className="self-defense-mark">
              <ShieldCheck aria-hidden="true" />
            </span>
          </div>
          <div className="self-defense-player" aria-roledescription="स्लाइडर">
            <div className="self-defense-video-wrap">
              <video
                key={activeVideo}
                className="self-defense-video"
                controls
                playsInline
                preload="metadata"
                aria-label={`बच्चों के आत्मरक्षा जागरूकता का वीडियो ${activeVideo + 1}`}
              >
                <source src={`/children-self-defense-0${activeVideo + 1}.mp4`} type="video/mp4" />
                आपका ब्राउज़र वीडियो चलाने में सक्षम नहीं है।
              </video>
            </div>
            <div className="self-defense-controls">
              <button
                type="button"
                className="slider-arrow"
                onClick={() => setActiveVideo((index) => (index + 2) % 3)}
                aria-label="पिछला वीडियो"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <div className="self-defense-pagination" role="group" aria-label="वीडियो चुनें">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    type="button"
                    className={`video-dot ${activeVideo === index ? "is-active" : ""}`}
                    onClick={() => setActiveVideo(index)}
                    aria-label={`वीडियो ${index + 1}`}
                    aria-pressed={activeVideo === index}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <span className="self-defense-count">
                {String(activeVideo + 1).padStart(2, "0")} / 03
              </span>
              <button
                type="button"
                className="slider-arrow"
                onClick={() => setActiveVideo((index) => (index + 1) % 3)}
                aria-label="अगला वीडियो"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
