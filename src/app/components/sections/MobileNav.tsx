import { Home, UtensilsCrossed, Phone } from "lucide-react";
import type { Translation } from "../../types";

interface MobileNavProps {
  t: Translation;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export default function MobileNav({
  t,
  scrollToSection,
  activeSection,
}: MobileNavProps) {
  const items = [
    { key: "home",    label: t.nav.home,    icon: Home           },
    { key: "menu",    label: t.nav.menu,    icon: UtensilsCrossed },
    { key: "contact", label: t.nav.contact, icon: Phone          },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-border">
      <div className="flex">
        {items.map(({ key, label, icon: Icon }) => {
          const active = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${active ? "stroke-[2.5]" : "stroke-[1.5]"}`}
              />
              <span className="text-[10px] font-semibold uppercase tracking-wide">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
