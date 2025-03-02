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
  return (
    <Card className="w-[250px] rounded-lg [box-shadow:0_4px_10px_0_rgba(0,0,0,.12)]">
      <CardHeader>
        <CardTitle>Menu #{menu.id}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-4 gap-2">
        <span className="text-sm">INCLUDES</span>
        {menu.sets[0].item_ids.map((item_id) => {
          const item = items.get(item_id);
          return <span key={item_id}>{item?.name ?? "no name"}</span>;
        })}
      </CardContent>
      <CardFooter className="justify-between">
        <Button>more info</Button>
        <Button>+</Button>
      </CardFooter>
    </Card>
  );
}
