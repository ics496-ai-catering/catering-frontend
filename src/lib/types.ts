export type Item = {
  id: string;
  type: string;
  name: string;
  description: string,
  image: {
    url: string;
    alt: string;
  };
  regions: string[];
  tags?: string[];
  popularity: number;
};

export enum ItemTags {
  DAIRY = "DAIRY",
  VEGAN = "VEGAN",
  PEANUTS = "PEANUTS",
  GLUTEN_FREE = "GLUTEN_FREE",
  SPICY = "SPICY",
  ORGANIC = "ORGANIC",
}

export type MenuSet = {
  id: string;
  item_ids: string[];
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  contains: {
    entree: number;
    sides: number;
    pastries: number;
    scratch: number;
    fruit: number;
    salad: number;
    drinks: number;
  };
  sets: MenuSet[];
};
