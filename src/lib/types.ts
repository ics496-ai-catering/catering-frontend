export type Item = {
  id: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  type: string;
  description: string;
  tags?: string[];
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
