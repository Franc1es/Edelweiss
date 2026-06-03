import { Phone, Instagram, Facebook } from "lucide-react";
import type { Translation } from "../../types";

interface ContactProps {
  t: Translation;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
          {t.contact.title}
        </h2>

        <div className="space-y-3">
          {/* Phone */}
          <a
            href="tel:0735657768"
            className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
                {t.contact.phone}
              </p>
              <p className="text-2xl font-extrabold text-foreground tracking-tight">
                0735 - 657768
              </p>
            </div>
          </a>

          {/* Social */}
          <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              {t.contact.social}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/edelweissbirreriasbt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-pink-200"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/edelweissbirreriasbt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#1877F2] text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-blue-200"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
