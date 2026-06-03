export type Language = "it" | "en";

export interface Translation {
  nav: {
    home: string;
    menu: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: {
      pizza: { title: string; desc: string };
      beer: { title: string; desc: string };
      restaurant: { title: string; desc: string };
      wifi: { title: string; desc: string };
      events: { title: string; desc: string };
      parking: { title: string; desc: string };
    };
  };
  menuSection: {
    title: string;
    categories: {
      pizze: string;
      birre: string;
      antipasti: string;
      dessert: string;
    };
  };
  contact: {
    title: string;
    phone: string;
    social: string;
  };
  footer: {
    hours: string;
    schedule: string;
    rights: string;
  };
  cookie: {
    message: string;
    accept: string;
    decline: string;
  };
}
