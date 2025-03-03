import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ItemCarousel from "./ItemCarousel";
import { Item } from "@/lib/types";

export default function ItemDialog({
  items,
  startIndex,
  trigger,
}: {
  items: Item[];
  startIndex: number;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-none border-none">
        <DialogTitle className="sr-only">Menu Item Modal</DialogTitle>
        <DialogDescription className="sr-only">
          A carousel display of menu items.
        </DialogDescription>
        <ItemCarousel items={items} start_index={startIndex} />
      </DialogContent>
    </Dialog>
  );
}
