import { useState, useRef } from "react";
import { ChevronLeft, Globe } from "lucide-react";
import { menuGroups, menuCategories } from "../data/fullMenu";
import type { Language } from "../types";

interface MenuPageProps {
  onBack: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const uiLabels: Record<Language, { title: string; back: string; notice: string }> = {
  it: { title: "Menu", back: "Torna al sito", notice: "Il personale è a tua disposizione per allergie" },
  en: { title: "Menu", back: "Back",          notice: "Ask our staff for allergy information"           },
};

export default function MenuPage({ onBack, lang, setLang }: MenuPageProps) {
  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id);
  const [activeCategory, setActiveCategory] = useState(
    menuCategories.find((c) => c.groupId === menuGroups[0].id)!.id,
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const ui = uiLabels[lang];

  const categoriesInGroup = menuCategories.filter((c) => c.groupId === activeGroup);
  const currentCategory = menuCategories.find((c) => c.id === activeCategory);
  const currentItems = currentCategory?.items ?? [];

  const reset = () => {
    contentRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  };

  const handleGroupChange = (groupId: string) => {
    setActiveGroup(groupId);
    const first = menuCategories.find((c) => c.groupId === groupId);
    if (first) setActiveCategory(first.id);
    reset();
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border h-14 flex items-center gap-3 px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{ui.back}</span>
        </button>

        <h1 className="flex-1 text-center font-bold text-lg text-foreground">
          {ui.title}
        </h1>

        <div className="flex items-center gap-1.5 shrink-0">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-transparent text-sm font-medium border border-border rounded-lg px-2 py-1"
          >
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      {/* ── Group tabs ─────────────────────────────────────── */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-border">
        <div className="flex overflow-x-auto scrollbar-hide px-3 py-2 gap-2">
          {menuGroups.map((g) => {
            const active = activeGroup === g.id;
            return (
              <button
                key={g.id}
                onClick={() => handleGroupChange(g.id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "bg-foreground text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {g.label[lang]}
              </button>
            );
          })}
        </div>

        {/* ── Category chips ───────────────────────────────── */}
        <div className="flex overflow-x-auto scrollbar-hide px-3 pb-2.5 gap-2">
          {categoriesInGroup.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-2xl text-sm font-bold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-slate-100 text-muted-foreground hover:bg-slate-200 hover:text-foreground"
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <main
        ref={contentRef}
        className="flex-1 pt-44 pb-24 md:pb-8 px-4 max-w-2xl mx-auto w-full"
      >
        <h2 className="text-xl font-extrabold text-foreground mb-4 mt-2">
          {currentCategory?.label[lang]}
        </h2>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {currentItems.map((item, i) => (
            <div
              key={i}
              className={`px-5 py-4 flex items-start justify-between gap-3 ${
                i < currentItems.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground text-[15px] leading-snug">
                  {item.name}
                </p>
                {item.desc && (
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
              <span className="shrink-0 text-sm font-bold text-primary whitespace-nowrap mt-0.5">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          {ui.notice}
        </p>
      </main>
    </div>
  );
}
