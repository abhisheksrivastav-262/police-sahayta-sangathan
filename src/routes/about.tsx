import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { InfoCard, PageBanner, SectionLabel, SiteLayout } from "@/components/site";
import { siteImages } from "@/data/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "हमारे बारे में | पुलिस सहायता संगठन" },
      {
        name: "description",
        content:
          "पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट का परिचय, उद्देश्य, मिशन, विजन और राष्ट्रीय अध्यक्ष निशा।",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="हमारे बारे में"
        title="सेवा, सहयोग और सामाजिक जागरूकता"
        description="पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट का परिचय, उद्देश्य और समाज के प्रति प्रतिबद्धता।"
      />
      <section className="section-pad">
        <div className="page-wrap grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <SectionLabel>संगठन का परिचय</SectionLabel>
            <h2 className="section-title mt-3">हर व्यक्ति तक सम्मान और सहयोग पहुंचाने का संकल्प</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट एक सामाजिक सेवा संगठन है। संस्था जरूरतमंद लोगों की सेवा,
              महिलाओं की सुरक्षा और सम्मान, बच्चों की शिक्षा, स्वास्थ्य जागरूकता और पुलिस तथा जनता के बीच बेहतर
              संवाद को प्रोत्साहित करने के लिए काम करती है।
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              संगठन का उद्देश्य समुदाय में संवेदना, सहयोग और जागरूकता की भावना को मजबूत करना तथा जरूरत के समय सही
              सहायता तक पहुंचने में मदद करना है।
            </p>
          </div>
          <div className="about-identity-card">
            <img
              src={siteImages.logo}
              alt="पुलिस सहायता संगठन का मूल लोगो"
              className="mx-auto size-40 bg-white object-contain"
            />
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-bold text-muted-foreground">पंजीकरण संख्या</p>
              <p className="mt-1 text-2xl font-black text-brand-blue">63</p>
              <p className="mt-3 text-xs font-bold text-muted-foreground">राष्ट्रीय अध्यक्ष</p>
              <p className="mt-1 font-extrabold text-brand-blue">निशा</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad services-section">
        <div className="page-wrap">
          <SectionLabel>हमारी दिशा</SectionLabel>
          <h2 className="section-title mt-3">मिशन, विजन और उद्देश्य</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={HeartHandshake}
              title="हमारा मिशन"
              text="समाज के जरूरतमंद लोगों की सहायता करना, महिलाओं को सुरक्षा एवं सम्मान दिलाना और बच्चों की शिक्षा तथा स्वास्थ्य के प्रति जागरूकता बढ़ाना।"
            />
            <InfoCard
              icon={Sparkles}
              title="हमारा विजन"
              text="एक सुरक्षित, शिक्षित, जागरूक और सहयोगपूर्ण समाज के निर्माण में योगदान देना, जहां प्रत्येक व्यक्ति को सम्मान और सहायता मिले।"
            />
            <InfoCard
              icon={Target}
              title="हमारे उद्देश्य"
              text="जरूरतमंद परिवारों की मदद, सामाजिक कल्याण, शिक्षा और स्वास्थ्य जागरूकता तथा पुलिस और जनता के बीच संवाद को बढ़ावा देना।"
            />
            <InfoCard
              icon={ShieldCheck}
              title="समाज के प्रति प्रतिबद्धता"
              text="सम्मान, संवेदना और जिम्मेदारी के साथ लोगों तक जानकारी व उचित सहयोग पहुंचाने के लिए प्रयासरत रहना।"
            />
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="page-wrap grid items-center gap-10 md:grid-cols-[0.78fr_1.22fr]">
          <div className="president-photo-wrap mx-auto w-full max-w-[380px]">
            <img
              src={siteImages.nisha}
              alt="राष्ट्रीय अध्यक्ष निशा"
              className="president-photo"
              loading="lazy"
            />
          </div>
          <div>
            <SectionLabel>राष्ट्रीय अध्यक्ष</SectionLabel>
            <h2 className="section-title mt-3">निशा</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              राष्ट्रीय अध्यक्ष के रूप में निशा संगठन के सेवा और सहयोग के संकल्प का प्रतिनिधित्व करती हैं। संगठन
              महिलाओं, बच्चों और जरूरतमंद लोगों के सम्मान, सुरक्षा और सहायता के लिए जागरूकता तथा सामाजिक सहयोग
              पर ध्यान देता है।
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
