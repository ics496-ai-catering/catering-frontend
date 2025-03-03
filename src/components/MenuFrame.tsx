import { Item, Menu } from "@/lib/types";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ItemModal from "./ItemModal";

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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gray-600">more info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-background-none border-none">
              <DialogTitle className="sr-only">Menu Item Modal</DialogTitle>
              <DialogDescription className="sr-only">
                A carousel display of menu items.
              </DialogDescription>
              <ItemModal items={items_in_menu} start_index={0} />
            </DialogContent>
          </Dialog>
          <Button className="bg-green-600 hover:bg-green-800">+</Button>
        </CardFooter>
      </Card>
    );
  });
}
