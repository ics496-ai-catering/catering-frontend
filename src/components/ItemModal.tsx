"use client";

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
export default function ItemModal({ items }: { items: Item[] }) {
  // TODO: Add a close button to the modal
  return (
    <Carousel>
      <CarouselContent className="w-[400px] h-[500px] items-center">
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <ItemFrame item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
