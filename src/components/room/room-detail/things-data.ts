const RULES = [
  {
    id: "r1",
    title: "Check-in: After 3:00 p.m.",
  },
  {
    id: "r2",
    title: "Checkout: 10:00 a.m.",
  },
  {
    id: "r3",
    title: "Not suitable for children and infants",
  },
  {
    id: "r4",
    title: "No smoking",
  },
  {
    id: "r5",
    title: "No pets",
  },
  {
    id: "r6",
    title: "No parties or events",
  },
];

export function getAllRules() {
  return RULES;
}

const HEALTHS = [
  {
    id: "h1",
    title: "Committed to Airbnb's enhanced cleaning process.",
  },
  {
    id: "h2",
    title:
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
  },
  {
    id: "h3",
    title: "Carbon monoxide alarm",
  },
  {
    id: "h4",
    title: "Smoke alarm",
  },
];

export function getAllHealths() {
  return HEALTHS;
}
