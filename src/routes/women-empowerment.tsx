import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard, PageBanner, SectionLabel, SiteLayout } from "@/components/site";
import { womenTopics } from "@/data/site";
import { siteImages, whatsappLink } from "@/data/site-config";

export const Route = createFileRoute("/women-empowerment")({
  head: () => ({
    meta: [
      { title: "महिला सशक्तिकरण | पुलिस सहायता संगठन" },
      {
        name: "description",
        content: "महिला सुरक्षा, सम्मान, अधिकारों की जानकारी, घरेलू हिंसा जागरूकता और सहयोग।",
      },
    ],
  }),
  component: WomenPage,
});

function WomenPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="महिला सशक्तिकरण"
        title="सुरक्षा, सम्मान और आत्मनिर्भरता"
        description="महिलाओं के अधिकारों, सुरक्षा और सहायता के बारे में जानकारी और जागरूकता को बढ़ावा देना।"
      />
      <section className="section-pad">
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="women-feature">
            <div className="women-feature-icon">
              <ShieldCheck aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm font-bold text-white/75">महिला सुरक्षा और सम्मान</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white">
              सुरक्षित और सशक्त समाज की ओर
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              महिलाओं की बात सुनी जाए और उन्हें उचित सहायता तथा जानकारी तक पहुंच मिले।
            </p>
          </div>
          <div>
            <SectionLabel>हमारा दृष्टिकोण</SectionLabel>
            <h2 className="section-title mt-3">सुनना, साथ देना और सही जानकारी तक पहुंचाना</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              घरेलू हिंसा के खिलाफ जागरूकता, पीड़ित महिलाओं को सहयोग, महिला अधिकारों की जानकारी और
              आत्मनिर्भरता पर संवाद हमारे सामाजिक प्रयासों का हिस्सा हैं।
            </p>
            <Button asChild className="mt-5 bg-brand-red text-white hover:bg-brand-red/90">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <HeartHandshake aria-hidden="true" /> सहायता के लिए संपर्क करें
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad services-section">
        <div className="page-wrap">
          <SectionLabel>सहयोग के क्षेत्र</SectionLabel>
          <h2 className="section-title mt-3">महिला सशक्तिकरण के लिए प्रयास</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {womenTopics.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="president-section">
        <div className="page-wrap grid items-center gap-8 py-10 sm:grid-cols-[1fr_1fr]">
          <img
            src={siteImages.nishaGallery}
            alt="राष्ट्रीय अध्यक्ष निशा"
            className="women-poster"
            loading="lazy"
          />
          <div>
            <SectionLabel>संगठन की प्रतिबद्धता</SectionLabel>
            <h2 className="section-title mt-3">हर महिला के सम्मान के साथ</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              संगठन जागरूकता और सहयोग के माध्यम से महिलाओं के सम्मान, सुरक्षा और आत्मनिर्भरता को प्रोत्साहित करने
              का प्रयास करता है।
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 font-extrabold text-brand-blue"
            >
              संपर्क करें <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
