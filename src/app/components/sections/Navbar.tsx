import { ChefHat, Globe } from "lucide-react";
import type { Language, Translation } from "../../types";
import { siteConfig } from "../../config";

interface NavbarProps {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  scrolled,
  lang,
  setLang,
  t,
  scrollToSection,
}: NavbarProps) {
  const navLinks = [
    { key: "home", label: t.nav.home },
    { key: "menu", label: t.nav.menu },
    { key: "services", label: t.nav.services },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-sm backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 shrink-0"
          >
            {siteConfig.logoImage ? (
              <img
                src={siteConfig.logoImage}
                alt="Edelweiss Logo"
                className="h-9 w-auto object-contain"
              />
            ) : (
              <ChefHat className="w-7 h-7 text-primary" />
            )}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Language selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground hidden md:block" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent border border-border rounded-lg px-2 py-1.5 text-sm cursor-pointer hover:border-primary transition-colors font-medium"
            >
              <option value="it">IT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
