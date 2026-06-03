import type { Translation } from "../../types";

interface CookieBannerProps {
  t: Translation;
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({
  t,
  onAccept,
  onDecline,
}: CookieBannerProps) {
  return (
    <div className="fixed bottom-14 md:bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl border border-border shadow-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-muted-foreground text-sm flex-1">
          {t.cookie.message}
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={onDecline}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-medium"
          >
            {t.cookie.decline}
          </button>
          <button
            onClick={onAccept}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
