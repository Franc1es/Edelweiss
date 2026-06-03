import type { Language, Translation } from "./types";

export const translations: Record<Language, Translation> = {
  it: {
    nav: {
      home: "Home",
      menu: "Menu",
      services: "Servizi",
      contact: "Contatti",
    },
    hero: {
      title: "Benvenuti da Edelweiss",
      subtitle: "La Baita in riva al Mare",
      cta: "Scopri il Menu",
    },
    services: {
      title: "I Nostri Servizi",
      items: {
        pizza: {
          title: "Pizza Artigianale",
          desc: "Pizza napoletana cotta nel forno a legna",
        },
        beer: {
          title: "Birre Artigianali",
          desc: "Ampia selezione di birre locali e internazionali",
        },
        restaurant: {
          title: "Ristorante",
          desc: "Cucina tradizionale trentina e italiana",
        },
        wifi: {
          title: "Wi-Fi Gratuito",
          desc: "Connessione internet ad alta velocità",
        },
        events: {
          title: "Eventi Privati",
          desc: "Organizziamo eventi e feste private",
        },
        parking: {
          title: "Parcheggio",
          desc: "Comodo parcheggio disponibile",
        },
      },
    },
    menuSection: {
      title: "Il Nostro Menu",
      categories: {
        pizze: "Pizze",
        birre: "Birre",
        antipasti: "Antipasti",
        dessert: "Dessert",
      },
    },
    contact: {
      title: "Contattaci",
      phone: "Telefono",
      address: "Dove siamo",
      social: "Seguici sui social",
    },
    footer: {
      hours: "Orari di Apertura",
      schedule: "Lun-Dom: dalle 19:00",
      rights: "Tutti i diritti riservati.",
    },
    cookie: {
      message:
        "Utilizziamo i cookie per migliorare la tua esperienza. Continuando accetti la nostra politica sui cookie.",
      accept: "Accetta",
      decline: "Rifiuta",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Welcome to Edelweiss",
      subtitle: "The Cabin by the Sea",
      cta: "Explore Menu",
    },
    services: {
      title: "Our Services",
      items: {
        pizza: {
          title: "Artisan Pizza",
          desc: "Neapolitan pizza cooked in wood-fired oven",
        },
        beer: {
          title: "Craft Beers",
          desc: "Wide selection of local and international beers",
        },
        restaurant: {
          title: "Restaurant",
          desc: "Traditional Trentino and Italian cuisine",
        },
        wifi: {
          title: "Free Wi-Fi",
          desc: "High-speed internet connection",
        },
        events: {
          title: "Private Events",
          desc: "We organize events and private parties",
        },
        parking: {
          title: "Parking",
          desc: "Convenient parking available",
        },
      },
    },
    menuSection: {
      title: "Our Menu",
      categories: {
        pizze: "Pizzas",
        birre: "Beers",
        antipasti: "Appetizers",
        dessert: "Desserts",
      },
    },
    contact: {
      title: "Contact Us",
      phone: "Phone",
      address: "Where we are",
      social: "Follow us on social media",
    },
    footer: {
      hours: "Opening Hours",
      schedule: "Mon–Sun: from 7:00 PM",
      rights: "All rights reserved.",
    },
    cookie: {
      message:
        "We use cookies to improve your experience. By continuing you accept our cookie policy.",
      accept: "Accept",
      decline: "Decline",
    },
  },
};
