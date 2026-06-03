/**
 * CONFIGURAZIONE SITO EDELWEISS
 * Modifica questo file per personalizzare loghi, immagini e link.
 */

export const siteConfig = {
  // Logo nella navbar e nel footer (null = icona predefinita)
  logoImage: "../../public/images/logo.png" as string | null,

  // Immagine di sfondo hero — percorso relativo a /public/images/
  // Usa "/images/hero.jpg" se il file è in public/images/hero.jpg
  heroBackgroundImage: "../../public/images/hero.jpg" as string | null,

  // Posizione dell'immagine hero: "top" | "center" | "bottom" o "50% 70%"
  // Usa "bottom" se l'immagine è tagliata in alto e vuoi vedere la parte bassa
  heroBackgroundPosition: "top" as string,

  // Opacità overlay scuro (0 = trasparente, 1 = nero pieno)
  heroOverlayOpacity: 0.45,

  // Colore testo hero: "white" o "dark"
  heroTextColor: "white" as "white" | "dark",

  // Favicon personalizzata — metti il file in /public/images/ (es. "/images/favicon.png")
  // Lascia null per usare la favicon di default del browser
  faviconImage: "../../public/images/favicon.png" as string | null,

  // Menù esterno: se impostato, tutti i bottoni "Il Menu" aprono questo link
  // invece della pagina menu interna del sito.
  // Lascia null per usare il menu interno.
  menuExternalLink: "https://urfz4s258vab6lntptfpor5drt9tuqpl.menu.pienissimo.pro/menu" as string | null,


  // Link sezione azioni rapide (lascia "" per non linkare nulla)
  quickLinks: {
    takeaway:  "https://pnssm.pro/pldtyu7",
    prenota:   "https://pro.pns.sm/ov2er5v",
    menu:      "#menu",
    domicilio: "https://pnssm.pro/i7yebxt",
    karaoke:   "https://pnssm.pro/pfedhau",          
  },

  // Promozioni — link cliccabile sulla card
  promos: {
    mercoledi: "https://pnssm.pro/ztvlmld",       
  },
};
