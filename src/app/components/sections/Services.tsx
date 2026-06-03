import {
  CalendarCheck,
  ShoppingBag,
  Bike,
  UtensilsCrossed,
  Mic2,
} from "lucide-react";
import { siteConfig } from "../../config";
import type { Language } from "../../types";

interface ServicesProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

const labels: Record<Language, {
  prenota: string;
  takeaway: string;
  domicilio: string;
  menu: string;
  karaoke: string;
}> = {
  it: {
    prenota:   "Prenota ora",
    takeaway:  "Asporto",
    domicilio: "A Domicilio",
    menu:      "Il Menu",
    karaoke:   "Karaoke",
  },
  en: {
    prenota:   "Book now",
    takeaway:  "Take Away",
    domicilio: "Home Delivery",
    menu:      "Our Menu",
    karaoke:   "Karaoke",
  },
};

export default function Services({ lang, scrollToSection }: ServicesProps) {
  const l = labels[lang];
  const { quickLinks } = siteConfig;

  // Ordine fisso: Prenota → Asporto → Domicilio → Menu → Karaoke
  const items = [
    { icon: CalendarCheck,   label: l.prenota,   href: quickLinks.prenota,   gradient: "from-emerald-400 to-teal-500",   shadow: "shadow-emerald-200" },
    { icon: UtensilsCrossed, label: l.menu,      href: quickLinks.menu,      gradient: "from-primary to-primary/80",     shadow: "shadow-primary/20"  },
    { icon: Bike,            label: l.domicilio, href: quickLinks.domicilio, gradient: "from-sky-400 to-blue-500",       shadow: "shadow-sky-200"     },
    { icon: ShoppingBag,     label: l.takeaway,  href: quickLinks.takeaway,  gradient: "from-orange-400 to-amber-500",   shadow: "shadow-orange-200"  },
    { icon: Mic2,            label: l.karaoke,   href: quickLinks.karaoke,   gradient: "from-violet-400 to-purple-500",  shadow: "shadow-violet-200"  },
  ];

  return (
    <section id="services" className="bg-slate-50 pb-6 pt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/*
          flex-wrap + justify-center:
          l'ultima riga (con meno di 3 card) rimane centrata,
          nessuno spazio vuoto indipendentemente dal numero di servizi.
        */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {items.map(({ icon: Icon, label, href, gradient, shadow }) => {
            const isMenuAnchor = href === "#menu";
            const isEmpty = !href;

            const cardClass = [
              "flex flex-col items-center gap-2.5 p-4 sm:p-6",
              "rounded-3xl bg-white border border-white",
              `shadow-md ${shadow} hover:shadow-xl`,
              "hover:-translate-y-1 active:scale-95 transition-all duration-200",
              "text-center",
              // Esattamente 1/3 della riga meno i gap
              "w-[calc(33.333%-8px)]",
            ].join(" ");

            const inner = (
              <>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                  {label}
                </span>
              </>
            );

            if (isMenuAnchor) {
              return (
                <button key={label} onClick={() => scrollToSection("menu")} className={cardClass + " cursor-pointer"}>
                  {inner}
                </button>
              );
            }

            if (isEmpty) {
              return (
                <div key={label} className={cardClass + " opacity-80"}>
                  {inner}
                </div>
              );
            }

            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cardClass + " cursor-pointer"}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
