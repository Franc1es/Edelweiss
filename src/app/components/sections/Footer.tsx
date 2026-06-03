import { ChefHat } from "lucide-react";
import type { Language, Translation } from "../../types";
import { siteConfig } from "../../config";
import WaveDivider from "../WaveDivider";

interface FooterProps {
  t: Translation;
  lang: Language;
}

const taglines: Record<Language, string> = {
  it: "Pizza artigianale e birre dal 1985",
  en: "Artisan pizza and beers since 1985",
};

export default function Footer({ t, lang }: FooterProps) {
  return (
    <div>
      <WaveDivider fill="#111827" />
      <footer className="bg-gray-900 text-white pt-4 pb-20 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2.5">
              {siteConfig.logoImage ? (
                <img
                  src={siteConfig.logoImage}
                  alt="Edelweiss Logo"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <ChefHat className="w-7 h-7 text-primary" />
              )}
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm font-semibold text-white/90">
                {t.footer.hours}
              </p>
              <p className="text-sm text-white/50 mt-0.5">{t.footer.schedule}</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
            <p>{taglines[lang]}</p>
            <p>© 2026 Edelweiss Birreria. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
