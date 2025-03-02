import { faker } from "@faker-js/faker";
import { Item, ItemTags, Menu, MenuSet } from "./lib/types";
import { writeFileSync } from "fs";

const generateItems = (count: number): Item[] => {
  const foodImages = [
    "/food/bbq_ribs.jpg",
    "/food/beef_tacos.webp",
    "/food/chicken_caesar_salad.jpeg",
    "/food/falafel_wrap.jpg",
    "/food/grilled_salmon.jpg",
    "/food/lemon_herb.jpg",
    "/food/margherita_pizza.jpg",
    "/food/pad_thai.webp",
    "/food/thai_basil_chicken.jpg",
    "/food/vegetarian_lasagna.jpg",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: faker.commerce.productName(),
    image: {
      url: faker.helpers.arrayElement(foodImages),
      alt: faker.commerce.productAdjective(),
    },
    type: faker.helpers.arrayElement([
      "Mediterranean",
      "Greek",
      "Italian",
      "Mexican",
      "Asian",
    ]),
    description: faker.commerce.productDescription(),
    tags: faker.helpers.arrayElements(
      Object.values(ItemTags),
      faker.number.int({ min: 1, max: 3 })
    ),
  }));
};

const generateMenus = (menuCount: number, items: Item[]): Menu[] => {
  const prices = faker.helpers.uniqueArray(
    Array.from({ length: 100 }, (_, i) => i + 1),
    menuCount
  );

  return Array.from({ length: menuCount }, (_, i) => {
    const numSets = 2;
    const itemsPerSet = 5;
    const itemIds = faker.helpers.shuffle(items.map((item) => item.id));

    const sets: MenuSet[] = Array.from({ length: numSets }, (_, setIndex) => ({
      id: `${setIndex + 1}`,
      item_ids: itemIds.slice(
        setIndex * itemsPerSet,
        (setIndex + 1) * itemsPerSet
      ),
    }));

    return {
      id: (i + 1).toString(),
      name: faker.commerce.department() + " Feast",
      price: prices[i],
      contains: {
        entree: itemsPerSet - 2,
        sides: 1,
        pastries: 0,
        scratch: 0,
        fruit: 1,
        salad: 1,
        drinks: 1,
      },
      sets,
    };
  });
};

const items = generateItems(20);
const menus = generateMenus(5, items);

writeFileSync("src/items.json", JSON.stringify(items, null, 2));
writeFileSync("src/menus.json", JSON.stringify(menus, null, 2));
