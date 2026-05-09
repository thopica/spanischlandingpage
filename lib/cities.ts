export type City = {
  slug: string;
  name: string;
  intro: string;
};

export const CITIES: City[] = [
  {
    slug: "basel",
    name: "Basel",
    intro:
      "Du lebst in Basel und möchtest endlich Spanisch sprechen? Mit Online-Unterricht lernst du bequem von zu Hause – ohne Pendelweg, ohne feste Kurszeiten. Ich passe mich deinem Alltag an.",
  },
  {
    slug: "bern",
    name: "Bern",
    intro:
      "Spanisch lernen in Bern war noch nie so einfach. Du nimmst einfach per Video teil – flexibel, persönlich, zu deinen Zeiten. Kein Kursraum, kein Stress.",
  },
  {
    slug: "luzern",
    name: "Luzern",
    intro:
      "Ob du in der Stadt Luzern oder der Agglomeration wohnst – Spanisch lernen online macht deinen Standort irrelevant. Du brauchst nur eine Internetverbindung und die Motivation.",
  },
  {
    slug: "winterthur",
    name: "Winterthur",
    intro:
      "Du wohnst in Winterthur und willst Spanisch lernen? Online-Unterricht mit Cristina passt sich deinem Alltag an – morgens, abends oder am Wochenende. Kein Weg in die Stadt nötig.",
  },
  {
    slug: "stgallen",
    name: "St. Gallen",
    intro:
      "Spanisch lernen in St. Gallen – online und flexibel. Mit Cristina lernst du von zu Hause aus, im eigenen Tempo, mit einem Lernplan der zu dir passt.",
  },
  {
    slug: "zug",
    name: "Zug",
    intro:
      "Du wohnst in Zug und suchst einen Spanischkurs? Online-Privatunterricht mit Cristina ist die flexible Alternative – persönlich, individuell, vom Sofa aus.",
  },
  {
    slug: "aarau",
    name: "Aarau",
    intro:
      "Für Spanisch lernen in Aarau brauchst du keine Sprachschule. Mit Online-Privatunterricht lernst du effizienter, günstiger und mit voller Flexibilität von zu Hause.",
  },
  {
    slug: "schaffhausen",
    name: "Schaffhausen",
    intro:
      "Du wohnst in Schaffhausen und suchst einen Spanischkurs? Online-Privatunterricht mit Cristina ist die flexible Alternative – persönlich, individuell, vom Sofa aus.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
