import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, MessageCircle, Phone, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/site";
import {
  address,
  directionsLink,
  pageLinks,
  phone,
  phoneLink,
  siteImages,
  whatsappLink,
  activityVideos,
} from "@/data/site-config";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen overflow-clip bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      {pathname !== "/" && pathname !== "/gallery" && <ActivityPhotoSection />}
      <SiteFooter />
      <div className="floating-contact" aria-label="त्वरित संपर्क">
        <a className="floating-contact-call" href={phoneLink} aria-label="फोन करें">
          <Phone aria-hidden="true" /> <span>कॉल</span>
        </a>
        <a className="floating-contact-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp पर संपर्क करें">
          <MessageCircle aria-hidden="true" /> <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

function ActivityPhotoSection() {
  return (
    <section className="site-activity-strip" aria-label="संगठन की गतिविधियों की तस्वीरें">
      <div className="page-wrap">
        <div className="site-activity-heading">
          <div>
            <p className="section-label"><span className="section-label-line" />कार्यक्रमों की झलक</p>
            <h2 className="section-title mt-3">समुदाय के साथ संगठन</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue">
            सभी तस्वीरें और वीडियो <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="site-activity-grid">
          {activityVideos.slice(0, 3).map((item, index) => (
            <Link to="/gallery" className="site-activity-card" key={item.src}>
              <img src={`/media/images/activity-${String(index + 1).padStart(2, "0")}.jpg`} alt={`संगठन गतिविधि ${index + 1}`} loading="lazy" />
              <span>संगठन की गतिविधि {index + 1}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="utility-bar hidden sm:block">
        <div className="page-wrap flex items-center justify-between gap-4 py-2 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="utility-dot" />
            समाज सेवा के लिए सदैव तत्पर
          </p>
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 font-semibold text-brand-blue"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            +91 {phone}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="page-wrap flex min-h-[76px] items-center justify-between gap-4">
          <Link to="/" onClick={closeMenu} className="flex min-w-0 shrink-0 items-center gap-3">
            <img
              src={siteImages.logo}
              alt="पुलिस सहायता संगठन का लोगो"
              className="size-12 rounded-sm bg-white object-contain"
            />
            <span className="min-w-0">
              <span className="block text-sm font-extrabold leading-snug text-brand-blue sm:text-base">
                पुलिस सहायता संगठन
              </span>
              <span className="mt-0.5 block text-xs font-medium text-muted-foreground">
                ऑल इंडिया ट्रस्ट
              </span>
            </span>
          </Link>
          <nav
            aria-label="मुख्य नेविगेशन"
            className="desktop-navigation hidden max-w-[50vw] items-center gap-4 overflow-x-auto xl:gap-5 lg:flex"
          >
            {pageLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                aria-current={pathname === item.to ? "page" : undefined}
                className={`nav-link whitespace-nowrap text-sm font-semibold transition-colors hover:text-brand-red ${pathname === item.to ? "text-brand-red" : "text-foreground/80"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="hidden shrink-0 bg-brand-red text-brand-red-foreground shadow-sm hover:bg-brand-red/90 lg:inline-flex"
          >
            <a href={phoneLink}>
              <Phone aria-hidden="true" />
              संपर्क करें
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 lg:hidden"
            aria-label={menuOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            aria-label="मोबाइल नेविगेशन"
            className="border-t border-border bg-background px-5 py-3 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {pageLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  aria-current={pathname === item.to ? "page" : undefined}
                  className={`rounded-sm px-3 py-3 text-sm font-semibold transition-colors hover:bg-muted hover:text-brand-blue ${pathname === item.to ? "bg-brand-blue-soft text-brand-blue" : "text-foreground"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap grid gap-10 py-10 md:grid-cols-[1.15fr_0.85fr_1fr] md:py-12">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={siteImages.logo}
              alt="संगठन का लोगो"
              className="size-12 rounded-sm bg-white object-contain"
            />
            <span className="font-extrabold leading-6 text-background">
              पुलिस सहायता संगठन
              <br />
              ऑल इंडिया ट्रस्ट
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-footer-muted">
            सेवा, शिक्षा, सुरक्षा और सहयोग के साथ समाज के जरूरतमंद लोगों की सहायता का संकल्प।
          </p>
        </div>
        <div>
          <h2 className="footer-heading">त्वरित लिंक</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {pageLinks.map((item) => (
              <li key={item.to}>
                <Link className="footer-link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">संपर्क जानकारी</h2>
          <a href={phoneLink} className="footer-link mt-4 flex items-center gap-2">
            <Phone className="size-4" aria-hidden="true" />
            +91 {phone}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="footer-link mt-3 inline-flex items-center gap-2"
          >
            WhatsApp पर संपर्क करें <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm leading-6 text-footer-muted">{address}</p>
          <a
            href={directionsLink}
            target="_blank"
            rel="noreferrer"
            className="footer-link mt-3 inline-flex items-center gap-2"
          >
            दिशा देखें <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="page-wrap flex flex-col gap-2 py-4 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Police Sahayata Sangathan All India Trust. All Rights Reserved.</p>
          <p>सेवा • शिक्षा • सुरक्षा • सहयोग</p>
        </div>
      </div>
    </footer>
  );
}

export function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-banner">
      <div className="page-wrap py-12 sm:py-16">
        <p className="section-label">
          <span className="section-label-line" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-brand-blue sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">{description}</p>
        <nav aria-label="ब्रेडक्रम्ब" className="mt-5 text-xs font-semibold text-muted-foreground">
          <Link to="/" className="hover:text-brand-red">
            होम
          </Link>
          <span className="mx-2 text-brand-red">/</span>
          <span>{title}</span>
        </nav>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label">
      <span className="section-label-line" />
      {children}
    </p>
  );
}

export function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="info-tile">
      <span className="service-icon">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-extrabold leading-6 text-brand-blue">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="service-item">
      <div className="flex items-start justify-between gap-4">
        <span className="service-icon">
          <Icon aria-hidden="true" />
        </span>
        <span className="service-number">{service.number}</span>
      </div>
      <h3 className="mt-5 text-base font-extrabold leading-7 text-brand-blue">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
      <span className="service-rule" aria-hidden="true" />
    </article>
  );
}
