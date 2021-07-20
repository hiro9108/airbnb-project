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
