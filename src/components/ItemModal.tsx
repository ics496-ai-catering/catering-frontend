import { Item } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import ItemFrame from "./ItemFrame";

/**
 * ItemModal component
 *
 * This component wraps the ItemFrame componenet for pagination in a modal view.
 *
 * @returns
 */
export default function ItemModal({
  items,
  start_index,
}: {
  items: Item[];
  start_index: number;
}) {
  return (
    <Carousel opts={{ startIndex: start_index }}>
      <CarouselContent className="w-[400px] h-[500px] items-center">
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <ItemFrame item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="z-50" />
      <CarouselNext className="z-50" />
    </Carousel>
  );
}
