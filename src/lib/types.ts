export type Item = {
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
