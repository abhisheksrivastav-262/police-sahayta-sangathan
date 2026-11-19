import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner, SectionLabel, SiteLayout } from "@/components/site";
import { siteImages, phone, phoneLink, whatsappLink } from "@/data/site-config";

export const Route = createFileRoute("/president")({
  head: () => ({
    meta: [
      { title: "राष्ट्रीय अध्यक्ष निशा | पुलिस सहायता संगठन" },
      {
        name: "description",
        content: "पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट की राष्ट्रीय अध्यक्ष निशा का परिचय और संपर्क।",
      },
    ],
  }),
  component: PresidentPage,
});

function PresidentPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="राष्ट्रीय अध्यक्ष"
        title="निशा"
        description="पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट की राष्ट्रीय अध्यक्ष।"
      />
      <section className="section-pad">
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="president-feature-photo">
            <img src={siteImages.nishaMain} alt="राष्ट्रीय अध्यक्ष निशा" loading="eager" />
            <span>राष्ट्रीय अध्यक्ष · निशा</span>
          </div>
          <div>
            <SectionLabel>परिचय</SectionLabel>
            <h2 className="section-title mt-3">सेवा और सहयोग का संकल्प</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              निशा, पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट की राष्ट्रीय अध्यक्ष हैं। संगठन समाज के जरूरतमंद लोगों की
              सहायता, महिलाओं के सम्मान और सुरक्षा तथा बच्चों की शिक्षा और जागरूकता के लिए प्रयास करता है।
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="purpose-panel">
                <p className="text-xs font-bold text-muted-foreground">पद</p>
                <p className="mt-1 font-extrabold text-brand-blue">राष्ट्रीय अध्यक्ष</p>
              </div>
              <div className="purpose-panel">
                <p className="text-xs font-bold text-muted-foreground">संगठन</p>
                <p className="mt-1 font-extrabold text-brand-blue">
                  पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-brand-red text-white hover:bg-brand-red/90">
                <a href={phoneLink}>
                  <Phone aria-hidden="true" />
                  +91 {phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue/25 text-brand-blue">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="president-section">
        <div className="page-wrap grid gap-8 py-10 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="president-secondary-photo">
            <img src={siteImages.nisha} alt="राष्ट्रीय अध्यक्ष निशा का चित्र" loading="lazy" />
          </div>
          <div>
            <SectionLabel>समाज के लिए संदेश</SectionLabel>
            <h2 className="section-title mt-3">मानवता और संवेदना के साथ</h2>
            <p className="mt-4 text-lg leading-9 text-muted-foreground">
              “आइए, सेवा और सहयोग की भावना से समाज के जरूरतमंद लोगों, महिलाओं और बच्चों तक सहायता और जागरूकता
              पहुंचाने का प्रयास करें।”
            </p>
            <p className="mt-5 text-sm font-bold text-brand-blue">
              <HeartHandshake className="mr-2 inline size-4 text-brand-red" aria-hidden="true" />
              पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
