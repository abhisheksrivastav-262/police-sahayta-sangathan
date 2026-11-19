import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard, SectionLabel, ServiceCard, SiteLayout } from "@/components/site";
import { services } from "@/data/site";
import { activityVideos, siteImages, phone, phoneLink, whatsappLink } from "@/data/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट | सेवा • शिक्षा • सुरक्षा" },
      {
        name: "description",
        content:
          "पुलिस सहायता संगठन ऑल इंडिया ट्रस्ट की जनसेवा, महिला सहायता, शिक्षा, स्वास्थ्य और सामाजिक जागरूकता गतिविधियां।",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeSelfDefenseVideo, setActiveSelfDefenseVideo] = useState(0);
  const homeActivityImages = Array.from({ length: 18 }, (_, index) => index + 1).map(
    (number) => `/media/images/activity-${String(number).padStart(2, "0")}.jpg`,
  );

  return (
    <SiteLayout>
      <section id="home" className="hero-section">
        <div className="hero-wash" aria-hidden="true" />
        <div className="page-wrap relative grid min-h-[620px] items-center gap-8 py-12 md:grid-cols-[1.02fr_0.98fr] md:py-16 lg:min-h-[680px]">
          <div className="relative z-10 max-w-2xl py-3 md:py-10">
            <p className="eyebrow mb-5 inline-flex items-center gap-2">
              <span className="eyebrow-mark" />
              एक जनसेवा, एक संकल्प
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.22] text-brand-blue sm:text-5xl lg:text-6xl">
              पुलिस सहायता संगठन<span className="mt-2 block text-brand-red">(ऑल इंडिया ट्रस्ट)</span>
            </h1>
            <p className="mt-5 text-base font-bold text-brand-blue sm:text-lg">
              सेवा <span className="text-brand-red">•</span> शिक्षा{" "}
              <span className="text-brand-red">•</span> सुरक्षा{" "}
              <span className="text-brand-red">•</span> सहयोग।
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              समाज के जरूरतमंद लोगों की सहायता करना, महिलाओं को सम्मान एवं सुरक्षा दिलाना और पुलिस एवं जनता के
              बीच बेहतर समन्वय स्थापित करना हमारा संकल्प है।
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-red text-brand-red-foreground hover:bg-brand-red/90"
              >
                <a href={phoneLink}>संपर्क करें</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-blue/25 bg-background/85 text-brand-blue"
              >
                <Link to="/services">
                  हमारी सेवाएं देखें <ArrowDown aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <a
              href={phoneLink}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
            >
              +91 {phone}
            </a>
          </div>
          <div className="hero-portrait-wrap relative mx-auto w-full max-w-[500px] md:ml-auto">
            <div className="hero-portrait-frame">
              <img
                src={siteImages.nisha}
                alt="राष्ट्रीय अध्यक्ष निशा"
                className="hero-portrait"
                fetchPriority="high"
              />
            </div>
            <div className="president-tag">
              <span className="president-tag-rule" />
              <span>
                <span className="block text-xs font-semibold text-brand-blue/75">
                  राष्ट्रीय अध्यक्ष
                </span>
                <span className="mt-0.5 block text-xl font-extrabold text-brand-blue">निशा</span>
              </span>
              <span className="president-tag-seal">
                <ShieldCheck aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="hero-caption">
          <span className="hero-caption-line" />
          <span>न्याय, सम्मान और सहयोग के साथ</span>
        </div>
      </section>
      <section className="section-pad">
        <div className="page-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel>हमारे बारे में</SectionLabel>
            <h2 className="section-title mt-3 max-w-md">सेवा की भावना, समाज के हर वर्ग के लिए</h2>
            <img
              src={siteImages.logo}
              alt="पुलिस सहायता संगठन का लोगो"
              className="mt-6 size-20 rounded-sm bg-white object-contain"
            />
          </div>
          <div>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              पुलिस सहायता संगठन (ऑल इंडिया) ट्रस्ट एक सामाजिक सेवा संगठन है। संस्था जरूरतमंद लोगों की सहायता,
              महिला सुरक्षा, शिक्षा एवं स्वास्थ्य जागरूकता और पुलिस तथा जनता के बीच बेहतर संवाद को प्रोत्साहित करने
              के लिए काम करती है।
            </p>
            <p className="mt-4 text-sm font-bold text-brand-blue">पंजीकरण संख्या: 63</p>
            <Button asChild variant="outline" className="mt-5 border-brand-blue/25 text-brand-blue">
              <Link to="/about">
                संगठन के बारे में और जानें <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad services-section">
        <div className="page-wrap">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>हमारे कार्य</SectionLabel>
              <h2 className="section-title mt-3 max-w-2xl">समाज के लिए, साथ मिलकर</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue"
            >
              सभी सेवाएं देखें <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="page-wrap">
          <div className="section-heading-centered">
            <SectionLabel>हमारी दिशा</SectionLabel>
            <h2 className="section-title mt-3">एक बेहतर समाज का संकल्प</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={HeartHandshake}
              title="हमारा मिशन"
              text="जरूरतमंद लोगों को सहयोग देना, महिलाओं को सुरक्षा एवं सम्मान दिलाना और बच्चों की शिक्षा तथा स्वास्थ्य के प्रति जागरूकता बढ़ाना।"
            />
            <InfoCard
              icon={HeartPulse}
              title="हमारा विजन"
              text="एक सुरक्षित, शिक्षित, जागरूक और सहयोगपूर्ण समाज के निर्माण में योगदान देना।"
            />
          </div>
        </div>
      </section>
      <section className="president-section">
        <div className="page-wrap grid items-center gap-10 py-12 md:grid-cols-[0.85fr_1.15fr] md:py-16">
          <div className="president-photo-wrap mx-auto w-full max-w-[430px]">
            <img
              src={siteImages.nisha}
              alt="राष्ट्रीय अध्यक्ष निशा"
              className="president-photo"
              loading="lazy"
            />
          </div>
          <div className="max-w-2xl">
            <SectionLabel>राष्ट्रीय अध्यक्ष</SectionLabel>
            <h2 className="section-title mt-3">निशा</h2>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              सेवा और सहयोग की भावना से समाज के जरूरतमंद लोगों, महिलाओं और बच्चों तक सहायता तथा जागरूकता पहुंचाने
              का प्रयास।
            </p>
            <Button asChild className="mt-6 bg-brand-blue text-white hover:bg-brand-blue/90">
              <Link to="/president">
                अध्यक्ष परिचय <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad home-activity-section">
        <div className="page-wrap">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>संगठन की झलक</SectionLabel>
              <h2 className="section-title mt-3">समुदाय के साथ हमारी गतिविधियां</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue"
            >
              पूरी गैलरी देखें <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="home-activity-grid mt-8">
            {homeActivityImages.map((src, index) => (
              <Link to="/gallery" className="home-activity-card" key={src}>
                <img src={src} alt={`संगठन की गतिविधि की तस्वीर ${index + 1}`} loading="lazy" />
                <span>संगठन की गतिविधियों की झलक</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad self-defense-section home-self-defense-section">
        <div className="page-wrap">
          <div className="self-defense-heading">
            <div>
              <SectionLabel>बच्चों की सुरक्षा</SectionLabel>
              <h2 className="section-title mt-3">बच्चों के लिए आत्मरक्षा जागरूकता</h2>
              <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
                संगठन के कार्यक्रमों की पूरी वीडियो श्रृंखला देखें।
              </p>
            </div>
            <span className="self-defense-mark">
              <ShieldCheck aria-hidden="true" />
            </span>
          </div>
          <div className="self-defense-player" aria-roledescription="स्लाइडर">
            <div className="self-defense-video-wrap home-self-defense-video-wrap">
              <video
                key={activeSelfDefenseVideo}
                className="self-defense-video home-self-defense-video"
                controls
                playsInline
                preload="metadata"
                poster={activityVideos[activeSelfDefenseVideo].poster}
                aria-label={activityVideos[activeSelfDefenseVideo].title}
              >
                <source src={activityVideos[activeSelfDefenseVideo].src} type="video/mp4" />
                आपका ब्राउज़र वीडियो चलाने में सक्षम नहीं है।
              </video>
            </div>
            <div className="self-defense-controls">
              <button
                type="button"
                className="slider-arrow"
                onClick={() => setActiveSelfDefenseVideo((index) => (index + activityVideos.length - 1) % activityVideos.length)}
                aria-label="पिछला वीडियो"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <div className="self-defense-pagination" role="group" aria-label="वीडियो चुनें">
                {activityVideos.map((video, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`video-dot ${activeSelfDefenseVideo === index ? "is-active" : ""}`}
                    onClick={() => setActiveSelfDefenseVideo(index)}
                    aria-label={video.title}
                    aria-pressed={activeSelfDefenseVideo === index}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <span className="self-defense-count">
                {String(activeSelfDefenseVideo + 1).padStart(2, "0")} / {String(activityVideos.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="slider-arrow"
                onClick={() => setActiveSelfDefenseVideo((index) => (index + 1) % activityVideos.length)}
                aria-label="अगला वीडियो"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link
            to="/education-health"
            className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue"
          >
            शिक्षा एवं स्वास्थ्य पेज पर जाएं <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="cta-section">
        <div className="page-wrap flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <SectionLabel>हमसे जुड़ें</SectionLabel>
            <h2 className="mt-3 text-2xl font-black text-brand-blue">
              सहायता या जानकारी के लिए संपर्क करें
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-brand-red text-white hover:bg-brand-red/90">
              <a href={phoneLink}>कॉल करें</a>
            </Button>
            <Button asChild variant="outline" className="border-brand-blue/25 text-brand-blue">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
