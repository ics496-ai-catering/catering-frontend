import { Item, Menu } from "@/lib/types";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import ItemDialog from "./ItemDialog";

/**
 * MenuFrame component
 *
 * This component displays the details of a singular menu.
 *
 * @returns
 */
export default function MenuFrame({
  menu,
  items,
}: {
  menu: Menu;
  items: Map<string, Item>;
}) {
  return menu.sets.map((menu_set, index) => {
    const items_in_menu = menu_set.item_ids
      .map((item_id) => items.get(item_id))
      .filter((x) => x !== undefined);

    return (
      <Card
        key={index}
        className="w-[250px] rounded-lg [box-shadow:0_4px_10px_0_rgba(0,0,0,.12)]"
      >
        <CardHeader>
          <CardTitle>Menu #{menu_set.id}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {items_in_menu.map((item, index) => (
              <Image
                key={index}
                src={item.image.url}
                alt={item.image.alt}
                width={250}
                height={171}
                className="w-8 h-8 rounded-full object-cover"
              />
            ))}
          </div>
          <span className="text-sm">INCLUDES</span>
          <div className="flex flex-col gap-2 p-1 text-xs text-gray-600">
            {items_in_menu.map((item, index) => (
              <ItemDialog
                key={index}
                items={items_in_menu}
                startIndex={index}
                trigger={<span className="cursor-pointer">{item.name}</span>}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <ItemDialog
            items={items_in_menu}
            startIndex={0}
            trigger={<Button className="bg-gray-600">more info</Button>}
          />
          <Button className="bg-green-600 hover:bg-green-800">+</Button>
        </CardFooter>
      </Card>
    );
  });
}
