import { Tag } from "lucide-react";
import { siteConfig } from "../../config";
import type { Language } from "../../types";

interface PromosProps {
  lang: Language;
}

const labels: Record<Language, {
  title: string;
  badge: string;
  promoTitle: string;
  promoDesc: string;
  cta: string;
}> = {
  it: {
    title:      "Promozioni",
    badge:      "Ogni Mercoledì",
    promoTitle: "Giropizza a 15€",
    promoDesc:  "Offerta esclusiva ogni mercoledì sera — clicca per scoprire tutti i dettagli!",
    cta:        "Scopri l'offerta",
  },
  en: {
    title:      "Promotions",
    badge:      "Every Wednesday",
    promoTitle: "Giropizza a 15€",
    promoDesc:  "Exclusive offer every Wednesday evening — tap to find out all the details!",
    cta:        "See the offer",
  },
};

export default function Promos({ lang }: PromosProps) {
  const l = labels[lang];
  const link = siteConfig.promos.mercoledi;

  const content = (
    <>
      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-3">
        <Tag className="w-3 h-3" />
        {l.badge}
      </span>

      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
        {l.promoTitle}
      </h3>
      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 max-w-md mx-auto">
        {l.promoDesc}
      </p>

      {link && (
        <span className="inline-block bg-white text-foreground font-bold text-sm px-6 py-3 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all">
          {l.cta} →
        </span>
      )}
    </>
  );

  return (
    <section id="promos" className="bg-slate-50 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          {l.title}
        </h2>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 p-6 sm:p-8 text-center shadow-xl shadow-orange-200 hover:-translate-y-1 active:scale-[0.99] transition-all"
          >
            {content}
          </a>
        ) : (
          <div className="w-full rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 p-6 sm:p-8 text-center shadow-xl shadow-orange-200">
            {content}
          </div>
        )}
      </div>
    </section>
  );
}
