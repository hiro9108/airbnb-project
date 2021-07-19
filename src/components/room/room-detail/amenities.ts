import {
  faUtensils,
  faWifi,
  faParking,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const AMENITIES = [
  {
    id: "a1",
    amenity: "Kitchen",
    icon: faUtensils,
  },
  {
    id: "a2",
    amenity: "Wifi",
    icon: faWifi,
  },
  {
    id: "a3",
    amenity: "Free street parking",
    icon: faParking,
  },

  {
    id: "a4",
    amenity: "TV",
    icon: faTv,
  },
];

export function getAllAmenities() {
  return AMENITIES;
}
