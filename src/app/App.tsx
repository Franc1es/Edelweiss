import { useState, useEffect } from "react";
import type { Language } from "./types";
import { translations } from "./translations";
import { siteConfig } from "./config";
import Navbar from "./components/sections/Navbar";
import MobileNav from "./components/sections/MobileNav";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Promos from "./components/sections/Promos";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import CookieBanner from "./components/sections/CookieBanner";
import MenuPage from "./pages/MenuPage";

const SECTIONS = ["home", "services", "contact"];

export default function App() {
  const [page, setPage] = useState<"home" | "menu">("home");
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [lang, setLang] = useState<Language>("it");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang];

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== null) setCookieConsent(consent === "true");

    if (siteConfig.faviconImage) {
      const link =
        (document.getElementById("favicon") as HTMLLinkElement) ??
        document.createElement("link");
      link.rel = "icon";
      link.href = siteConfig.faviconImage;
      if (!link.parentNode) document.head.appendChild(link);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    setCookieConsent(accepted);
    localStorage.setItem("cookieConsent", String(accepted));
  };

  const scrollToSection = (id: string) => {
    if (id === "menu") {
      openMenu();
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openMenu = () => {
    if (siteConfig.menuExternalLink) {
      window.open(siteConfig.menuExternalLink, "_blank", "noopener,noreferrer");
      return;
    }
    setPage("menu");
    window.scrollTo({ top: 0 });
  };

  const closeMenu = () => {
    setPage("home");
    window.scrollTo({ top: 0 });
  };

  // ── Menu page ──────────────────────────────────────────────
  if (page === "menu") {
    return (
      <MenuPage
        onBack={closeMenu}
        lang={lang}
        setLang={setLang}
      />
    );
  }

  // ── Home page ──────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        scrolled={scrolled}
        lang={lang}
        setLang={setLang}
        t={t}
        scrollToSection={scrollToSection}
      />

      <Hero t={t} scrollToSection={scrollToSection} />
      <Services lang={lang} scrollToSection={scrollToSection} />
      <Promos lang={lang} />
      <Contact t={t} />
      <Footer t={t} lang={lang} />

      <MobileNav
        t={t}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {cookieConsent === null && (
        <CookieBanner
          t={t}
          onAccept={() => handleCookieConsent(true)}
          onDecline={() => handleCookieConsent(false)}
        />
      )}
    </div>
  );
}
