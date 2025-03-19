import { promises as fs } from "fs";
import Papa from "papaparse";
import { Item } from "@/lib/types";

type Entry = {
  food_id: number,
  type: string,
  name: string,
  regions: string,
  dairy_free: number,
  gluten_free: number,
  peanut_free: number,
  popularity: number,
};

export async function loadFood(): Promise<Item[]> {
  return await fs.readFile("src/food.csv", "utf8")
    .then(file => {
      const parseResult: Papa.ParseResult<Entry> = Papa.parse(file, {
        dynamicTyping: true,
        delimiter: ";",
        header: true,
        skipEmptyLines: true,
        preview: 20,
      });
      const items: Item[] = parseResult.data.map((result: Entry): Item => {
        const { food_id, type, name, regions, dairy_free, gluten_free, peanut_free, popularity } = result;
        const tags: string[] = [];
        if (dairy_free === 0) tags.push("DAIRY");
        if (gluten_free === 1) tags.push("GLUTEN_FREE");
        if (peanut_free === 0) tags.push("PEANUTS");
        return {
          id: food_id,
          type,
          name,
          image: {
            url: "/food/lemon_herb.jpg",
            alt: "Image of " + name,
          },
          regions: regions.split(", "),
          tags,
          popularity,
        };
      });
      return items;
    });
}
