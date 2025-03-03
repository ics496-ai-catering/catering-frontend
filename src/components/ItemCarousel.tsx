import { Item } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import ItemCarouselFrame from "./ItemCarouselFrame";

/**
 * ItemCarousel component
 *
 * This component wraps individual ItemCarouselFrame components in a carousel.
 *
 * @returns
 */
export default function ItemCarousel({
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
            <ItemCarouselFrame item={item} showDescription={true} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
