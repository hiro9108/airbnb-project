const LAKES = [
  {
    id: "l1",
    area: "Adirondack",
    city: "New York",
  },
  {
    id: "l2",
    area: "Austin",
    city: "Texas",
  },
  {
    id: "l3",
    area: "Balsam Lake",
    city: "Wisconsin",
  },
  {
    id: "l4",
    area: "Banff",
    city: "Alberta",
  },
  {
    id: "l5",
    area: "Buckhorn",
    city: "Ontario",
  },
  {
    id: "l6",
    area: "Cultus Lake",
    city: "Manitoba",
  },
  {
    id: "l7",
    area: "Falcon Lake",
    city: "Manitoba",
  },
  {
    id: "l8",
    area: "Gimli",
    city: "Manitoba",
  },
  {
    id: "l9",
    area: "GraceField",
    city: "Quebec",
  },
  {
    id: "l10",
    area: "Harrison Hot Springs",
    city: "British Columbia",
  },
  {
    id: "l11",
    area: "Kamloops",
    city: "British Columbia",
  },
  {
    id: "l12",
    area: "Kawartha Lakes",
    city: "Ontario",
  },
  {
    id: "l13",
    area: "Kenora",
    city: "Ontario",
  },
  {
    id: "l14",
    area: "Lake Cowichan",
    city: "British Columbia",
  },
  {
    id: "l15",
    area: "Lake Placid",
    city: "New York",
  },
  {
    id: "l16",
    area: "Newfoundland",
    city: "Pennsylvania",
  },
  {
    id: "l17",
    area: "Nordegg",
    city: "Alberta",
  },
  {
    id: "l18",
    area: "Orillia",
    city: "Ontario",
  },
  {
    id: "l19",
    area: "Orr Lake",
    city: "Ontario",
  },
  {
    id: "l20",
    area: "Penticton",
    city: "British Columbia",
  },
  {
    id: "l21",
    area: "Port Severn",
    city: "Ontario",
  },
  {
    id: "l22",
    area: "Saugeen Shores",
    city: "Ontario",
  },
  {
    id: "l23",
    area: "Shuswap",
    city: "British Columbia",
  },
  {
    id: "l24",
    area: "Sproat Lake",
    city: "British Columbia",
  },
  {
    id: "l25",
    area: "Sylvan Lake",
    city: "Alberta",
  },
  {
    id: "l26",
    area: "The Narrows",
    city: "Manitoba",
  },
  {
    id: "l27",
    area: "Tomahawk",
    city: "Wisconsin",
  },
  {
    id: "l28",
    area: "Tulameen",
    city: "British Columbia",
  },
  {
    id: "l29",
    area: "White Lake",
    city: "Ontario",
  },
  {
    id: "l30",
    area: "Algonquin",
    city: "Ontario",
  },
  {
    id: "l31",
    area: "Bala",
    city: "Ontario",
  },
  {
    id: "l32",
    area: "Bancroft",
    city: "Ontario",
  },
  {
    id: "l33",
    area: "Bracebridge",
    city: "Ontario",
  },
  {
    id: "l34",
    area: "Clear Lake",
    city: "Ontario",
  },
  {
    id: "l35",
    area: "Erie",
    city: "Pennsylvania",
  },
  {
    id: "l36",
    area: "French River",
    city: "Ontario",
  },
  {
    id: "l37",
    area: "Golden Lake",
    city: "Ontario",
  },
  {
    id: "l38",
    area: "Gravenhurst",
    city: "Ontario",
  },
  {
    id: "l39",
    area: "Honey Harbour",
    city: "Ontario",
  },
  {
    id: "l40",
    area: "Katrine",
    city: "Ontario",
  },
  {
    id: "l41",
    area: "Kelowna",
    city: "British Columbia",
  },
  {
    id: "l42",
    area: "Kissimmee",
    city: "Florida",
  },
  {
    id: "l43",
    area: "Lake George",
    city: "New York",
  },
  {
    id: "l44",
    area: "Nelson",
    city: "British Columbia",
  },
  {
    id: "l45",
    area: "Niagara-on-the-Lake",
    city: "Ontario",
  },
  {
    id: "l46",
    area: "North Bay",
    city: "Ontario",
  },
  {
    id: "l47",
    area: "Orlando",
    city: "Florida",
  },
  {
    id: "l48",
    area: "Osoyoos",
    city: "British Columbia",
  },
];

export function getAllLakes() {
  return LAKES;
}

const MOUNTAINS = [
  {
    id: "m1",
    area: "Blue Mountain",
    city: "New York",
  },
  {
    id: "m2",
    area: "Denver",
    city: "Colorado",
  },
  {
    id: "m3",
    area: "Gatineau",
    city: "Quebec",
  },
  {
    id: "m4",
    area: "Invermere",
    city: "British Columbia",
  },
  {
    id: "m5",
    area: "Leavenworth",
    city: "Washington",
  },
  {
    id: "m6",
    area: "Mont-Tremblant",
    city: "Quebec",
  },
  {
    id: "m7",
    area: "Panorama",
    city: "British Columbia",
  },
  {
    id: "m8",
    area: "Redium Hot Springs",
    city: "British Columbia",
  },
  {
    id: "m9",
    area: "Squamish",
    city: "British Columbia",
  },
  {
    id: "m10",
    area: "Wakefield",
    city: "Quebec",
  },
  {
    id: "m11",
    area: "Collingwood",
    city: "Ontario",
  },
  {
    id: "m12",
    area: "Fernie",
    city: "British Columbia",
  },
  {
    id: "m13",
    area: "Hope",
    city: "British Columbia",
  },
  {
    id: "m14",
    area: "Kimberley",
    city: "British Columbia",
  },
  {
    id: "m15",
    area: "Mesa",
    city: "Arizona",
  },
  {
    id: "m16",
    area: "Morin-Heights",
    city: "Quebec",
  },
  {
    id: "m17",
    area: "Phoenix",
    city: "Arizona",
  },
  {
    id: "m18",
    area: "Revelstoke",
    city: "British Columbia",
  },
  {
    id: "m19",
    area: "Tucson",
    city: "Arizona",
  },
  {
    id: "m20",
    area: "Whitefish",
    city: "Montana",
  },
];

export function getAllMountains() {
  return MOUNTAINS;
}

const COASTALS = [
  {
    id: "c1",
    area: "Allenwood Beach",
    city: "Ontario",
  },
  {
    id: "c2",
    area: "Balm Beach",
    city: "Ontario",
  },
  {
    id: "c3",
    area: "Brackley Beach",
    city: "Prince Edward Island",
  },
  {
    id: "c4",
    area: "Cape Coral",
    city: "Florida",
  },
  {
    id: "c5",
    area: "Chelem",
    city: "Yucatan",
  },
  {
    id: "c6",
    area: "Cocoa Beach",
    city: "Florida",
  },
  {
    id: "c7",
    area: "Darnley",
    city: "Prince Edward Island",
  },
  {
    id: "c8",
    area: "Daytona Beach",
    city: "Florida",
  },
  {
    id: "c9",
    area: "Englewood",
    city: "Florida",
  },
  {
    id: "c10",
    area: "Fort Lauderdale",
    city: "Florida",
  },
  {
    id: "c11",
    area: "Grand Marais",
    city: "Manitoba",
  },
  {
    id: "c12",
    area: "Honolulu",
    city: "Hawaii",
  },
  {
    id: "c13",
    area: "Indian Shores",
    city: "Florida",
  },
  {
    id: "c14",
    area: "Kaanapali",
    city: "Hawaii",
  },
  {
    id: "c15",
    area: "Kihei",
    city: "Hawaii",
  },
  {
    id: "c16",
    area: "La Ventana",
    city: "Baja California Sur",
  },
  {
    id: "c17",
    area: "Lahaina",
    city: "Hawaii",
  },
  {
    id: "c18",
    area: "Madeira Beach",
    city: "Florida",
  },
  {
    id: "c19",
    area: "Maimi Beach",
    city: "Florida",
  },
  {
    id: "c20",
    area: "Midland",
    city: "Ontario",
  },
  {
    id: "c21",
    area: "Myrtle Beach",
    city: "South Carolina",
  },
  {
    id: "c22",
    area: "North Wildwood",
    city: "New Jersey",
  },
  {
    id: "c23",
    area: "Ogunquit",
    city: "Maine",
  },
  {
    id: "c24",
    area: "Owen Sound",
    city: "Ontario",
  },
  {
    id: "c25",
    area: "Peterborough",
    city: "Ontario",
  },
  {
    id: "c26",
    area: "Point Roberts",
    city: "Washington",
  },
  {
    id: "c27",
    area: "Port Burwell",
    city: "Ontario",
  },
  {
    id: "c28",
    area: "Port Mouton",
    city: "Nova Scotia",
  },
  {
    id: "c29",
    area: "Positano",
    city: "Campania",
  },
  {
    id: "c30",
    area: "Puerto Vallarta",
    city: "Jalisco",
  },
  {
    id: "c31",
    area: "Saint-Sauveur",
    city: "Quebec",
  },
  {
    id: "c32",
    area: "Sand Banks",
    city: "Ontario",
  },
  {
    id: "c33",
    area: "Santa Monica",
    city: "California",
  },
  {
    id: "c34",
    area: "Sayulita",
    city: "Nayarit",
  },
  {
    id: "c35",
    area: "Seaside",
    city: "Oregon",
  },
  {
    id: "c36",
    area: "South Beach",
    city: "Florida",
  },
  {
    id: "c37",
    area: "St. Pete Beach",
    city: "Florida",
  },
  {
    id: "c38",
    area: "Thunder Beach",
    city: "Ontario",
  },
  {
    id: "c39",
    area: "Tulum",
    city: "Quintana Roo",
  },
  {
    id: "c40",
    area: "Ucluelet",
    city: "British Columbia",
  },
  {
    id: "c41",
    area: "Virginia Beach",
    city: "Virginia",
  },
  {
    id: "c42",
    area: "Wells",
    city: "Maine",
  },
  {
    id: "c43",
    area: "Weat Palm Beach",
    city: "Florida",
  },
  {
    id: "c44",
    area: "Wildwood Creast",
    city: "New Jersey",
  },
  {
    id: "c45",
    area: "Winnipeg Beach",
    city: "Manitoba",
  },
  {
    id: "c46",
    area: "Zihuatanejo",
    city: "OntariGuerreroo",
  },
  {
    id: "c47",
    area: "Anaheim",
    city: "California",
  },
  {
    id: "c48",
    area: "Brra de Navidad",
    city: "Jalisco",
  },
];

export function getAllCoastals() {
  return COASTALS;
}

const ISLANDS = [
  {
    id: "s1",
    area: "Bayfield",
    city: "Wisconsin",
  },
  {
    id: "s2",
    area: "Calgary",
    city: "Alberta",
  },
  {
    id: "s3",
    area: "Charleston",
    city: "South Carolina",
  },
  {
    id: "s4",
    area: "Cardova Bay",
    city: "British Columbia",
  },
  {
    id: "s5",
    area: "Dunedin",
    city: "Florida",
  },
  {
    id: "s6",
    area: "Gananoque",
    city: "Ontario",
  },
  {
    id: "s7",
    area: "Key West",
    city: "Florida",
  },
  {
    id: "s8",
    area: "Kingston",
    city: "Ontario",
  },
  {
    id: "s9",
    area: "Manhattan",
    city: "New York",
  },
  {
    id: "s10",
    area: "Nantucket",
    city: "Massachusetts",
  },
  {
    id: "s11",
    area: "New York",
    city: "New York",
  },
  {
    id: "s12",
    area: "Pender Island",
    city: "British Columbia",
  },
  {
    id: "s13",
    area: "Powell Rover",
    city: "British Columbia",
  },
  {
    id: "s14",
    area: "Riverport",
    city: "Nova Scotia",
  },
  {
    id: "s15",
    area: "Sea View",
    city: "Prince Edward Island",
  },
  {
    id: "s16",
    area: "Sechelt",
    city: "British Columbia",
  },
  {
    id: "s17",
    area: "Summerside",
    city: "Prince Edward Island",
  },
  {
    id: "s18",
    area: "Treasure Island",
    city: "Florida",
  },
  {
    id: "s19",
    area: "Wiarton",
    city: "Ontario",
  },
  {
    id: "s20",
    area: "Bowen Island",
    city: "British Columbia",
  },
  {
    id: "s21",
    area: "Campbell River",
    city: "British Columbia",
  },
  {
    id: "s22",
    area: "Charlottetown",
    city: "Prince Edward Island",
  },
  {
    id: "s23",
    area: "Digby",
    city: "Nova Scotia",
  },
  {
    id: "s24",
    area: "Galiano Island",
    city: "British Columbia",
  },
  {
    id: "s25",
    area: "Green Bay",
    city: "Nova Scotia",
  },
  {
    id: "s26",
    area: "Kingsburg",
    city: "Nova Scotia",
  },
];

export function getAllIslands() {
  return ISLANDS;
}

const OUTDOORS = [
  {
    id: "o1",
    area: "BirchBay",
    city: "Washington",
  },
  {
    id: "o2",
    area: "Wasagaming",
    city: "Manitoba",
  },
  {
    id: "o3",
    area: "Golden",
    city: "British Columbia",
  },
  {
    id: "o4",
    area: "Niagara Falls",
    city: "Ontario",
  },
  {
    id: "o5",
    area: "Turkey Point",
    city: "Ontario",
  },
  {
    id: "o6",
    area: "Chéticamp",
    city: "Nova Scotia",
  },
  {
    id: "o7",
    area: "Disney",
    city: "Oklahoma",
  },
  {
    id: "o8",
    area: "Killarney",
    city: "Ontario",
  },
  {
    id: "o9",
    area: "Palm Springs",
    city: "California",
  },
  {
    id: "o10",
    area: "Waterton Park",
    city: "Alberta",
  },
];

export function getAllOutdoors() {
  return OUTDOORS;
}

const OTHERS = [
  {
    id: "t1",
    area: "Amsterdam",
    city: "North Holland",
  },
  {
    id: "o2",
    area: "Barrie",
    city: "Ontario",
  },
  {
    id: "o3",
    area: "The Blue Mountains",
    city: "Ontario",
  },
  {
    id: "o4",
    area: "Calabogie",
    city: "Ontario",
  },
  {
    id: "o5",
    area: "Cancún",
    city: "Quitana Roo",
  },
  {
    id: "o6",
    area: "Cobourg",
    city: "Ontario",
  },
  {
    id: "o7",
    area: "Dublin",
    city: "County Dublin",
  },
  {
    id: "o8",
    area: "Florence",
    city: "Tuscany",
  },
  {
    id: "o9",
    area: "Halifax",
    city: "Nova Scotia",
  },
  {
    id: "o10",
    area: "Lac du Bonnet",
    city: "Manitoba",
  },
  {
    id: "o11",
    area: "Loa Angeles",
    city: "California",
  },
  {
    id: "o12",
    area: "Montreal",
    city: "Quebec",
  },
  {
    id: "o13",
    area: "Nashville",
    city: "Tennessee",
  },
  {
    id: "o14",
    area: "Port Perry",
    city: "Ontario",
  },
  {
    id: "o15",
    area: "Puerto Aventuras",
    city: "Quintana Roo",
  },
  {
    id: "o16",
    area: "Sarasota",
    city: "Florida",
  },
  {
    id: "o17",
    area: "Sedona",
    city: "Arizona",
  },
  {
    id: "o18",
    area: "Tampa",
    city: "Florida",
  },
  {
    id: "o19",
    area: "Truro",
    city: "Nova Scotia",
  },
  {
    id: "o20",
    area: "Winnipeg",
    city: "Manitoba",
  },
  {
    id: "o21",
    area: "Yuma",
    city: "Arizona",
  },
  {
    id: "o22",
    area: "Barcelona",
    city: "Catalonia",
  },
  {
    id: "o23",
    area: "Barry's Bay",
    city: "Ontario",
  },
  {
    id: "o24",
    area: "Boston",
    city: "Massachusetts",
  },
  {
    id: "o25",
    area: "Sault Ste. Marie",
    city: "Ontario",
  },
  {
    id: "o26",
    area: "Chicago",
    city: "Illinois",
  },
  {
    id: "o27",
    area: "Davenport",
    city: "Florida",
  },
  {
    id: "o28",
    area: "Edomonton",
    city: "Alberta",
  },
  {
    id: "o29",
    area: "Flagstaff",
    city: "Arizona",
  },
  {
    id: "o30",
    area: "Huntsville",
    city: "Ontario",
  },
];

export function getAllOthers() {
  return OTHERS;
}
