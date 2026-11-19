import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageBanner, ServiceCard, SiteLayout } from "@/components/site";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "हमारी सेवाएं | पुलिस सहायता संगठन" },
      {
        name: "description",
        content: "पुलिस सहायता संगठन की सामाजिक सेवा, महिला सहायता, शिक्षा, स्वास्थ्य और जनजागरूकता सेवाएं।",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="हमारी सेवाएं"
        title="समाज के लिए, साथ मिलकर"
        description="जरूरत के समय सहयोग, जनजागरूकता और मानव सेवा के लिए संगठन के प्रमुख सामाजिक कार्य।"
      />
      <section id="services" className="section-pad services-section">
        <div className="page-wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="page-wrap flex flex-col items-start justify-between gap-5 py-9 md:flex-row md:items-center">
          <p className="text-lg font-extrabold text-brand-blue">
            सेवा संबंधी जानकारी या सहायता के लिए हमसे संपर्क करें।
          </p>
          <Button asChild className="bg-brand-red text-white hover:bg-brand-red/90">
            <Link to="/contact">
              संपर्क करें <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
