export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  label: { it: string; en: string };
  groupId: string;
  items: MenuItem[];
}

export interface MenuGroup {
  id: string;
  label: { it: string; en: string };
}

export const menuGroups: MenuGroup[] = [
  { id: "cucina",   label: { it: "Cucina",          en: "Kitchen"           } },
  { id: "pizza",    label: { it: "Pizza & Panini",  en: "Pizza & Sandwiches"} },
  { id: "dolci",    label: { it: "Dolci",           en: "Desserts"          } },
  { id: "bevande",  label: { it: "Bevande",         en: "Drinks"            } },
  { id: "spirits",  label: { it: "Spirits",         en: "Spirits"           } },
];

export const menuCategories: MenuCategory[] = [
  // ── CUCINA ──────────────────────────────────────────────
  {
    id: "antipasti",
    label: { it: "Antipasti",         en: "Starters"         },
    groupId: "cucina",
    items: [
      { name: "Bruschetta al pomodoro", price: "€4.50", desc: "Pane tostato, pomodoro fresco, basilico" },
      { name: "Caprese", price: "€9.00", desc: "Mozzarella di bufala, pomodoro, basilico" },
      { name: "Tagliere misto", price: "€14.00", desc: "Salumi e formaggi locali" },
      { name: "Carpaccio di salmone", price: "€12.00", desc: "Con rucola, limone e capperi" },
      { name: "Insalata di mare", price: "€13.00", desc: "Gamberetti, cozze, calamari, sedano" },
    ],
  },
  {
    id: "fritti",
    label: { it: "Fritti",            en: "Fried Food"       },
    groupId: "cucina",
    items: [
      { name: "Patatine fritte", price: "€4.00" },
      { name: "Olive ascolane", price: "€6.00", desc: "Olive ripiene fritte" },
      { name: "Mozzarelline in carrozza", price: "€6.00" },
      { name: "Anelli di cipolla", price: "€5.00" },
      { name: "Frittura mista di pesce", price: "€14.00", desc: "Calamari, gamberetti, alici" },
      { name: "Crocchette di patate", price: "€5.00" },
    ],
  },
  {
    id: "primi",
    label: { it: "Primi",             en: "First Courses"    },
    groupId: "cucina",
    items: [
      { name: "Spaghetti alle vongole", price: "€13.00" },
      { name: "Pasta al pomodoro", price: "€8.00" },
      { name: "Risotto ai frutti di mare", price: "€15.00" },
      { name: "Pennette all'arrabbiata", price: "€9.00" },
      { name: "Gnocchi al ragù", price: "€10.00" },
      { name: "Tagliatelle al tartufo", price: "€14.00" },
    ],
  },
  {
    id: "secondi",
    label: { it: "Secondi",           en: "Main Courses"     },
    groupId: "cucina",
    items: [
      { name: "Branzino alla griglia", price: "€18.00" },
      { name: "Bistecca di manzo", price: "€22.00", desc: "300g, al sangue o ben cotta" },
      { name: "Pollo alla brace", price: "€14.00" },
      { name: "Calamari ripieni", price: "€16.00", desc: "Con prezzemolo e limone" },
      { name: "Salmone alla griglia", price: "€17.00" },
    ],
  },
  {
    id: "contorni",
    label: { it: "Contorni",          en: "Side Dishes"      },
    groupId: "cucina",
    items: [
      { name: "Patatine fritte", price: "€4.00" },
      { name: "Insalata mista", price: "€4.00" },
      { name: "Verdure grigliate", price: "€6.00" },
      { name: "Patate al forno", price: "€4.50" },
      { name: "Spinaci al burro", price: "€4.50" },
    ],
  },
  {
    id: "insalatone",
    label: { it: "Insalatone",        en: "Salads"           },
    groupId: "cucina",
    items: [
      { name: "Insalata Edelweiss", price: "€12.00", desc: "Mix di verdure, gamberi, avocado, pomodorini" },
      { name: "Caesar Salad", price: "€11.00", desc: "Lattuga, pollo, parmigiano, crostini" },
      { name: "Insalata greca", price: "€10.00", desc: "Feta, olive, cetriolo, cipolla rossa" },
      { name: "Insalata di pollo", price: "€11.00", desc: "Pollo grigliato, rucola, pomodorini, parmigiano" },
      { name: "Nizzarda", price: "€12.00", desc: "Tonno, uova, fagiolini, pomodoro" },
    ],
  },

  // ── PIZZA & PANINI ──────────────────────────────────────
  {
    id: "pizze-rosse",
    label: { it: "Pizze Rosse",       en: "Red Pizzas"       },
    groupId: "pizza",
    items: [
      { name: "Margherita", price: "€8.00", desc: "Pomodoro, mozzarella, basilico" },
      { name: "Diavola", price: "€10.00", desc: "Pomodoro, mozzarella, salame piccante" },
      { name: "Prosciutto e Funghi", price: "€11.00", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi" },
      { name: "Capricciosa", price: "€11.50", desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive" },
      { name: "Quattro Stagioni", price: "€11.50", desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive" },
      { name: "Norma", price: "€10.50", desc: "Pomodoro, mozzarella, melanzane, ricotta salata" },
      { name: "Marinara", price: "€7.50", desc: "Pomodoro, aglio, origano, olio EVO" },
      { name: "Tonno e Cipolla", price: "€10.50", desc: "Pomodoro, mozzarella, tonno, cipolla" },
    ],
  },
  {
    id: "pizze-bianche",
    label: { it: "Pizze Bianche",     en: "White Pizzas"     },
    groupId: "pizza",
    items: [
      { name: "Tirolese", price: "€12.50", desc: "Mozzarella, speck, brie, noci" },
      { name: "Patate e Salsiccia", price: "€11.00", desc: "Mozzarella, patate, salsiccia" },
      { name: "Quattro Formaggi", price: "€12.00", desc: "Mozzarella, gorgonzola, parmigiano, taleggio" },
      { name: "Mortadella e Pistacchi", price: "€12.00", desc: "Mozzarella, mortadella, crema di pistacchio" },
      { name: "Bufala", price: "€13.00", desc: "Mozzarella di bufala, pomodorini, rucola, parmigiano" },
      { name: "Crudo e Rucola", price: "€13.00", desc: "Mozzarella, prosciutto crudo, rucola, grana" },
    ],
  },
  {
    id: "panini",
    label: { it: "Panini",            en: "Sandwiches"       },
    groupId: "pizza",
    items: [
      { name: "Hamburger Edelweiss", price: "€12.00", desc: "Manzo 180g, lattuga, pomodoro, cipolla, salsa" },
      { name: "Panino con Salsiccia", price: "€10.00", desc: "Salsiccia alla brace, peperoni, cipolle" },
      { name: "Club Sandwich", price: "€11.00", desc: "Pollo, bacon, lattuga, pomodoro, maionese" },
      { name: "Panino Vegetariano", price: "€9.00", desc: "Verdure grigliate, hummus, rucola" },
      { name: "Piadina Romagnola", price: "€8.00", desc: "Prosciutto crudo, squacquerone, rucola" },
    ],
  },
  {
    id: "baby",
    label: { it: "Menù Baby",         en: "Kids Menu"        },
    groupId: "pizza",
    items: [
      { name: "Pizza Margherita + bibita", price: "€8.00" },
      { name: "Pasta al pomodoro + bibita", price: "€8.00" },
      { name: "Frittura + patatine + bibita", price: "€9.00" },
      { name: "Hamburger piccolo + patatine", price: "€9.00" },
    ],
  },

  // ── DOLCI ───────────────────────────────────────────────
  {
    id: "dolci",
    label: { it: "Dolci",             en: "Desserts"         },
    groupId: "dolci",
    items: [
      { name: "Tiramisù", price: "€6.00", desc: "Fatto in casa" },
      { name: "Panna Cotta", price: "€5.50", desc: "Con frutti di bosco" },
      { name: "Strudel di Mele", price: "€6.50", desc: "Tradizionale, con gelato" },
      { name: "Gelato artigianale", price: "€4.00", desc: "3 gusti a scelta" },
      { name: "Cheesecake", price: "€6.00", desc: "Con coulis di fragole" },
      { name: "Brownie al cioccolato", price: "€5.50", desc: "Con gelato alla crema" },
    ],
  },

  // ── BEVANDE ─────────────────────────────────────────────
  {
    id: "birre-spina",
    label: { it: "Birre alla spina",  en: "Draft Beers"      },
    groupId: "bevande",
    items: [
      { name: "Forst Classica", price: "piccola €4.50 · media €6.00", desc: "Lager chiara 4.8%" },
      { name: "Forst Sixtus", price: "piccola €5.00 · media €7.00", desc: "Doppio malto 6.5%" },
      { name: "Weizen", price: "piccola €5.50 · media €7.50", desc: "Birra di frumento 5.3%" },
    ],
  },
  {
    id: "birre-bottiglia",
    label: { it: "Birre in bottiglia",en: "Bottled Beers"    },
    groupId: "bevande",
    items: [
      { name: "Peroni", price: "€4.00", desc: "33cl" },
      { name: "Nastro Azzurro", price: "€4.50", desc: "33cl" },
      { name: "Heineken", price: "€4.50", desc: "33cl" },
      { name: "Corona", price: "€5.00", desc: "33cl" },
      { name: "IPA Artigianale", price: "€6.00", desc: "33cl – India Pale Ale 6.2%" },
      { name: "Erdinger Weissbier", price: "€5.50", desc: "50cl" },
    ],
  },
  {
    id: "vini",
    label: { it: "Vini",              en: "Wines"            },
    groupId: "bevande",
    items: [
      { name: "Pinot Grigio", price: "calice €5.00 · bottiglia €18.00", desc: "Vino bianco – Trentino Alto Adige" },
      { name: "Chardonnay", price: "calice €5.50 · bottiglia €20.00", desc: "Vino bianco – Friuli" },
      { name: "Vermentino", price: "calice €5.00 · bottiglia €19.00", desc: "Vino bianco – Sardegna" },
      { name: "Chianti Classico", price: "calice €5.00 · bottiglia €22.00", desc: "Vino rosso – Toscana" },
      { name: "Primitivo", price: "calice €5.50 · bottiglia €21.00", desc: "Vino rosso – Puglia" },
      { name: "Vino della casa", price: "caraffa 0.5L €8.00 · 1L €14.00", desc: "Bianco o rosso" },
    ],
  },
  {
    id: "bollicine",
    label: { it: "Bollicine",         en: "Sparkling Wines"  },
    groupId: "bevande",
    items: [
      { name: "Prosecco DOC", price: "calice €5.00 · bottiglia €18.00" },
      { name: "Franciacorta DOCG", price: "calice €8.00 · bottiglia €32.00" },
      { name: "Spumante dolce", price: "bottiglia €15.00" },
      { name: "Champagne", price: "bottiglia da €55.00" },
    ],
  },
  {
    id: "bevande",
    label: { it: "Bevande",           en: "Soft Drinks"      },
    groupId: "bevande",
    items: [
      { name: "Coca-Cola / Zero", price: "€3.00", desc: "33cl" },
      { name: "Fanta / Sprite", price: "€3.00", desc: "33cl" },
      { name: "Acqua naturale", price: "€2.00", desc: "50cl" },
      { name: "Acqua frizzante", price: "€2.00", desc: "50cl" },
      { name: "Succo di frutta", price: "€3.00", desc: "Pesca, albicocca, pera" },
      { name: "Limonata fresca", price: "€4.00" },
      { name: "The freddo", price: "€3.00" },
      { name: "Gassosa", price: "€2.50" },
    ],
  },
  {
    id: "caffe-amari",
    label: { it: "Caffè & Amari",     en: "Coffee & Liqueurs"},
    groupId: "bevande",
    items: [
      { name: "Espresso", price: "€1.50" },
      { name: "Caffè macchiato", price: "€1.70" },
      { name: "Cappuccino", price: "€2.00" },
      { name: "Amaro del Capo", price: "€4.00" },
      { name: "Limoncello", price: "€4.00" },
      { name: "Grappa", price: "€4.00" },
      { name: "Sambuca", price: "€3.50" },
      { name: "Fernet", price: "€4.00" },
      { name: "Mirto", price: "€4.00" },
    ],
  },
  {
    id: "cocktail",
    label: { it: "Cocktail",          en: "Cocktails"        },
    groupId: "bevande",
    items: [
      { name: "Spritz Aperol", price: "€8.00", desc: "Aperol, Prosecco, soda" },
      { name: "Spritz Campari", price: "€8.00", desc: "Campari, Prosecco, soda" },
      { name: "Negroni", price: "€9.00", desc: "Gin, Campari, Vermouth rosso" },
      { name: "Mojito", price: "€9.00", desc: "Rum, menta, lime, zucchero, soda" },
      { name: "Gin Tonic", price: "€9.00", desc: "Gin, acqua tonica, lime" },
      { name: "Daiquiri", price: "€8.00", desc: "Rum, succo di lime, zucchero" },
      { name: "Sex on the Beach", price: "€8.00", desc: "Vodka, Peach Schnapps, succhi" },
      { name: "Cosmopolitan", price: "€9.00", desc: "Vodka, Triple Sec, succo di mirtillo, lime" },
      { name: "Hugo", price: "€8.00", desc: "Prosecco, sciroppo di sambuco, menta, soda" },
      { name: "Americano", price: "€7.00", desc: "Campari, Vermouth rosso, soda" },
    ],
  },

  // ── SPIRITS ─────────────────────────────────────────────
  {
    id: "brandy",
    label: { it: "Brandy",            en: "Brandy"           },
    groupId: "spirits",
    items: [
      { name: "Stock 84", price: "€4.00" },
      { name: "Vecchia Romagna", price: "€4.50" },
      { name: "Metaxa 5 Stelle", price: "€5.00" },
      { name: "Remy Martin VSOP", price: "€8.00" },
    ],
  },
  {
    id: "rum",
    label: { it: "Rum",               en: "Rum"              },
    groupId: "spirits",
    items: [
      { name: "Bacardi Blanco", price: "€5.00" },
      { name: "Havana Club 3 Anni", price: "€5.00" },
      { name: "Captain Morgan Spiced", price: "€5.50" },
      { name: "Zacapa 23", price: "€9.00" },
      { name: "Diplomatico Reserva", price: "€9.00" },
    ],
  },
  {
    id: "tequila",
    label: { it: "Tequila",           en: "Tequila"          },
    groupId: "spirits",
    items: [
      { name: "Jose Cuervo Silver", price: "€5.00" },
      { name: "Patron Silver", price: "€9.00" },
      { name: "Don Julio Blanco", price: "€10.00" },
      { name: "Sierra Antiguo Añejo", price: "€8.00" },
    ],
  },
  {
    id: "whisky",
    label: { it: "Whisky",            en: "Whisky"           },
    groupId: "spirits",
    items: [
      { name: "Jameson Irish", price: "€6.00" },
      { name: "Jack Daniel's", price: "€7.00" },
      { name: "Johnnie Walker Red", price: "€6.00" },
      { name: "Johnnie Walker Black", price: "€8.00" },
      { name: "Glenfiddich 12 Anni", price: "€9.00" },
      { name: "Laphroaig 10 Anni", price: "€11.00" },
    ],
  },
];
