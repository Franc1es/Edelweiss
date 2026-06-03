# Edelweiss — Sito Web per Pizzeria & Birreria

Sito web mobile-first per **Edelweiss**, pizzeria e birreria con karaoke a San Benedetto del Tronto. Progettato per essere usato quotidianamente dai clienti dal telefono, con accesso rapido al menù, alle prenotazioni e alle promozioni.

---

## Anteprima

| Home | Menu | Promozioni |
|:----:|:----:|:----------:|
| Hero con immagine personalizzata, wave divider e CTA | Pagina menù separata con navigazione a 2 livelli | Card promo dinamica con link esterno |

---

## Stack tecnologico

| Tecnologia | Versione | Ruolo |
|---|---|---|
| **React** | 18 | UI framework |
| **TypeScript** | 5 | Type safety |
| **Vite** | 6 | Build tool & dev server |
| **Tailwind CSS** | 4 | Styling utility-first |
| **Lucide React** | latest | Icone |

---

## Struttura del progetto

```
src/app/
├── App.tsx                        # Entrypoint — gestione pagine e stato globale
├── config.ts                      # ⚙️ File di configurazione unico per tutto il sito
├── types.ts                       # Tipi TypeScript condivisi
├── translations.ts                # Testi IT / EN
│
├── data/
│   ├── menuItems.ts               # (legacy) mini-menu home
│   └── fullMenu.ts                # Menù completo — 20 categorie, bilingue
│
├── pages/
│   └── MenuPage.tsx               # Pagina menù dedicata (SPA senza router)
│
└── components/
    ├── WaveDivider.tsx             # SVG wave riutilizzabile tra le sezioni
    └── sections/
        ├── Navbar.tsx             # Navbar desktop responsive
        ├── MobileNav.tsx          # Barra navigazione fissa in basso (mobile)
        ├── Hero.tsx               # Hero fullscreen con immagine + overlay
        ├── Services.tsx           # 5 CTA card con layout auto-centrato
        ├── Promos.tsx             # Sezione promozioni configurabile
        ├── Contact.tsx            # Telefono + social
        ├── Footer.tsx             # Footer con orari
        └── CookieBanner.tsx       # Banner GDPR
```

---

## Funzionalità principali

### Configurazione centralizzata
Tutto ciò che il proprietario può voler cambiare si trova in un unico file `config.ts`: logo, immagine hero, posizione dell'immagine, overlay, favicon, link servizi, link promozionali e l'opzione per sostituire il menù interno con un link esterno.

```ts
// Esempi da config.ts
heroBackgroundImage: "/images/hero.jpg",
heroBackgroundPosition: "top",
menuExternalLink: "https://...",   // sovrascrive il menù interno
quickLinks: {
  prenota: "https://...",
  takeaway: "https://...",
  ...
}
```

### Menù digitale — 20 categorie
Pagina separata accessibile senza ricaricare la pagina (state-based routing). Navigazione a 2 livelli con sticky header:

- **Riga 1** — 5 gruppi macro (Cucina, Pizza & Panini, Dolci, Bevande, Spirits)
- **Riga 2** — categorie del gruppo selezionato (Antipasti, Fritti, Pizze Rosse…)
- Contenuto aggiornato istantaneamente al tap, senza scroll

Tutte le etichette dell'interfaccia sono tradotte in italiano e inglese. I nomi dei piatti restano in italiano (prassi standard nella ristorazione italiana).

### Design mobile-first
- Nessun blocco rettangolare: le sezioni si raccordano con **SVG wave divider** e transizioni fluide
- **Barra di navigazione fissa in basso** (mobile) con indicatore della sezione attiva
- Card servizi con layout flex `justify-center`: l'ultima riga è sempre centrata indipendentemente dal numero di voci
- Tap target ottimizzati (min 44×44px), `active:scale-95` su tutti i pulsanti

### Internazionalizzazione (i18n)
Supporto completo italiano / inglese tramite un dizionario tipizzato. Il selettore lingua è presente sia nella home che nella pagina menù e persiste durante la navigazione.

### Sezioni della home

| Sezione | Descrizione |
|---|---|
| **Hero** | Immagine fullscreen, testo con drop-shadow, CTA "Scopri il Menu" |
| **Servizi** | 5 CTA (Prenota, Menu, Domicilio, Asporto, Karaoke) — link configurabili |
| **Promozioni** | Card con gradiente, badge "Ogni Mercoledì", link personalizzabile |
| **Contatti** | Numero cliccabile, bottoni Instagram & Facebook |
| **Footer** | Orari, tagline, copyright |

---

## Scelte progettuali rilevanti

**SPA senza router esterno** — La navigazione tra home e pagina menù è gestita con un semplice state `page: "home" | "menu"` in App.tsx, evitando dipendenze aggiuntive e mantenendo il bundle leggero.

**config.ts come CMS minimale** — Invece di un pannello di amministrazione, tutte le personalizzazioni sono concentrate in un file TypeScript annotato. Il proprietario (o chi gestisce il sito) modifica solo quel file.

**Wave SVG riutilizzabile** — Il componente `WaveDivider` accetta `fill` e `flip` come props, permettendo transizioni fluide tra sezioni con colori diversi senza duplicare codice SVG.

**Menù esterno opzionale** — Se il proprietario preferisce usare un menù digitale esterno (es. Pienissimo, PDF), basta impostare `menuExternalLink` in config: tutti i punti di accesso al menù si comportano di conseguenza senza altre modifiche.

---

## Personalizzazione rapida

| Vuoi cambiare… | Modifica… |
|---|---|
| Logo | `config.ts` → `logoImage` |
| Foto hero | `config.ts` → `heroBackgroundImage` + `heroBackgroundPosition` |
| Link prenotazione / asporto | `config.ts` → `quickLinks` |
| Usare un menù esterno | `config.ts` → `menuExternalLink` |
| Promo del mercoledì | `config.ts` → `promos.mercoledi` |
| Testo della promo | `components/sections/Promos.tsx` → `labels` |
| Voci del menù / prezzi | `data/fullMenu.ts` |
| Testi del sito | `translations.ts` |
| Favicon | `config.ts` → `faviconImage` |

---

## Autore

Sviluppato da **Francesco** con [Claude Code](https://claude.ai/code) — Anthropic.  
Stack: React + TypeScript + Vite + Tailwind CSS.
