import { Item, Menu } from "@/lib/types";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

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
    return (
      <Card
        key={index}
        className="w-[250px] rounded-lg [box-shadow:0_4px_10px_0_rgba(0,0,0,.12)]"
      >
        <CardHeader>
          <CardTitle>Menu #{menu_set.id}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <span className="text-sm">INCLUDES</span>
          <div className="flex flex-col gap-2 p-1 text-xs text-gray-800">
            {/* TODO: Clicking on the menu item should bring up ItemModal */}
            {menu_set.item_ids.map((item_id, index) => {
              const item = items.get(item_id);
              return <span key={index}>{item?.name ?? "no name"}</span>;
            })}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button className="bg-gray-600">more info</Button>
          <Button className="bg-green-600 hover:bg-green-800">+</Button>
        </CardFooter>
      </Card>
    );
  });
}
