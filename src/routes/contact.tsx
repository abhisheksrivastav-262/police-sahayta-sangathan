import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, House, Landmark, Phone, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner, SiteLayout } from "@/components/site";
import { address, directionsLink, phone, phoneLink, whatsappLink } from "@/data/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "संपर्क करें | पुलिस सहायता संगठन" },
      {
        name: "description",
        content: "राष्ट्रीय अध्यक्ष निशा से संपर्क, कार्यालय का पता, फोन और WhatsApp पूछताछ।",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="संपर्क करें"
        title="हम आपकी सहायता के लिए उपलब्ध हैं"
        description="सहायता, जानकारी या संगठन से जुड़ने के लिए फोन अथवा WhatsApp पर संपर्क करें।"
      />
      <section className="contact-section">
        <div className="page-wrap grid gap-8 py-12 md:grid-cols-[0.82fr_1.18fr] md:py-16">
          <div>
            <h2 className="section-title">संपर्क जानकारी</h2>
            <div className="contact-details mt-5">
              <ContactRow icon={UsersRound} label="राष्ट्रीय अध्यक्ष" value="निशा" />
              <ContactRow icon={Landmark} label="पंजीकरण संख्या" value="63" />
              <ContactRow icon={Phone} label="मोबाइल" value={`+91 ${phone}`} href={phoneLink} />
              <ContactRow icon={House} label="कार्यालय का पता" value={address} />
              <a href={directionsLink} target="_blank" rel="noreferrer" className="directions-link">
                <span>Google Maps पर दिशा देखें</span>
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="bg-brand-red text-white hover:bg-brand-red/90">
                <a href={phoneLink}>
                  <Phone aria-hidden="true" />
                  कॉल करें
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue/25 text-brand-blue">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <form
            className="whatsapp-form"
            onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const message = `नमस्ते, मेरा नाम ${form.get("name")} है।\nमोबाइल: ${form.get("mobile")}\nविषय: ${form.get("subject")}\nसंदेश: ${form.get("message")}`;
              window.open(
                `${whatsappLink}?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <h2 className="text-xl font-extrabold text-brand-blue">WhatsApp पर पूछताछ भेजें</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              आपका संदेश WhatsApp में तैयार होगा। भेजने से पहले आप उसे देख और बदल सकते हैं।
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="form-field">
                नाम
                <input name="name" autoComplete="name" required />
              </label>
              <label className="form-field">
                मोबाइल नंबर
                <input
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[+0-9() -]{7,18}"
                  required
                />
              </label>
              <label className="form-field sm:col-span-2">
                विषय
                <input name="subject" required />
              </label>
              <label className="form-field sm:col-span-2">
                संदेश
                <textarea name="message" rows={5} required />
              </label>
            </div>
            <Button type="submit" className="mt-5 bg-brand-blue text-white hover:bg-brand-blue/90">
              WhatsApp पर आगे बढ़ें <ArrowRight aria-hidden="true" />
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="contact-row">
      <span className="contact-row-icon">
        <Icon aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-muted-foreground">{label}</span>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm font-bold leading-6 text-brand-blue hover:text-brand-red"
          >
            {value}
          </a>
        ) : (
          <span className="mt-1 block text-sm font-bold leading-6 text-foreground">{value}</span>
        )}
      </span>
    </div>
  );
}
