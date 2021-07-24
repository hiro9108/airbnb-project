import { Icon } from "@fortawesome/fontawesome-svg-core";

export type metaProps = {
  description: string;
  title: string;
};

export type buttonProp = {
  button: string;
};

export type navbarProp = {
  classNameNavbar: string;
  classNameUser: string;
};

export type roomProp = {
  room: {
    id: string;
    name: string;
    subTitle: string;
    star: number;
    reviewCount: number;
    images: string[];
    address: { country: string; province: string; city: string };
    map: string;
    room: {
      maximumGuest: number;
      bedroom: string;
      bed: string;
      bathroom: string;
    };
    highLights: {
      icon: any;
      title: string;
      description: string;
    }[];
    additionalInfo: string[];
    description: string;
    bedRoomInfo: {
      bed: string;
      type: string;
    }[];
    amenities: {
      amenity: string;
      icon: any;
    }[];
    rules: string[];
    healthInfo: string[];
    cancelPolicy: string;
    reviews: {
      date: string;
      comment: string;
      userId: string;
    }[];
    ownerId: string;
  };
};

export type topProp = {
  name: string;
  star: number;
  reviewCount: number;
  address: { country: string; province: string; city: string };
};

export type imageProp = {
  images: string[];
};

export type detailProp = {
  subTitle: string;
  room: {
    maximumGuest: number;
    bedroom: string;
    bed: string;
    bathroom: string;
  };
  icon: string;
  highLights: {
    icon: any;
    title: string;
    description: string;
  }[];
  additionalInfo: string[];
  description: string;
  bedRoomInfo: { bed: string; type: string }[];
  amenities: { amenity: string; icon: any }[];
  ownerName: string;
};
export type thingsProp = {
  rules: string[];
  healthInfo: string[];
  cancelPolicy: string;
};

export type reviewProp = {
  star: number;
  reviewCount: number;
  reviews: { date: string; comment: string; userId: string }[];
};

export type mapProp = {
  address: { country: string; province: string; city: string };
  map: string;
};

export type ownerProp = {
  owner: {
    id: string;
    name: string;
    icon: string;
    joined: string;
    reviewsCount: number;
    msg: string;
    policyNumber: number;
    language: string;
    responceRate: number;
    responceTime: string;
  };
};

export interface data {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  price: number;
}

export type searchProp = {
  searchItem: string;
};
