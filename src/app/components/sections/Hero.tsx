import type { Translation } from "../../types";
import { siteConfig } from "../../config";
import WaveDivider from "../WaveDivider";

interface HeroProps {
  t: Translation;
  scrollToSection: (id: string) => void;
}

export default function Hero({ t, scrollToSection }: HeroProps) {
  const hasImage = Boolean(siteConfig.heroBackgroundImage);
  const textIsWhite = siteConfig.heroTextColor === "white";

  return (
    <div className="relative">
      <section
        id="home"
        className="pt-16 min-h-[88vh] flex items-center relative overflow-hidden"
        style={
          hasImage
            ? {
                backgroundImage: `url(${siteConfig.heroBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: siteConfig.heroBackgroundPosition,
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        {!hasImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-white to-muted" />
        )}

        {hasImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `rgba(0,0,0,${siteConfig.heroOverlayOpacity})`,
            }}
          />
        )}

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col items-center text-center gap-5">
            <h1
              className={`text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight ${
                textIsWhite && hasImage
                  ? "text-white drop-shadow-lg"
                  : "text-foreground"
              }`}
            >
              {t.hero.title}
            </h1>

            <p
              className={`text-lg sm:text-xl max-w-xl leading-relaxed ${
                textIsWhite && hasImage
                  ? "text-white/85 drop-shadow"
                  : "text-muted-foreground"
              }`}
            >
              {t.hero.subtitle}
            </p>

            <button
              onClick={() => scrollToSection("menu")}
              className="mt-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/30"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Wave at the bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <WaveDivider fill="#f8fafc" />
      </div>
    </div>
  );
}
