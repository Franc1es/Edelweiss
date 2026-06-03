import { useState } from "react";
import { menuItems } from "../../data/menuItems";
import type { Translation } from "../../types";
import WaveDivider from "../WaveDivider";

interface MenuSectionProps {
  t: Translation;
}

export default function MenuSection({ t }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof menuItems>("pizze");

  const categories = Object.keys(menuItems) as Array<keyof typeof menuItems>;

  return (
    <div className="relative bg-slate-50">
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-slate-50"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
      <WaveDivider fill="#f1f5f9" flip />

      <section id="menu" className="bg-slate-100 relative pb-16 pt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
            {t.menuSection.title}
          </h2>

          {/* Category tabs — sticky */}
          <div className="sticky top-16 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 mb-6 bg-slate-100/90 backdrop-blur-md">
            <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-white text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {t.menuSection.categories[category]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-white shadow-sm px-5 py-4 flex items-start justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="min-w-0">
                  <p className="font-bold text-foreground text-base leading-snug">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="shrink-0 text-base font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-xl">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <WaveDivider fill="#ffffff" />
        </div>
      </section>
    </div>
  );
}
