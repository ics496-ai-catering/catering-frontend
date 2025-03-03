import { Item, ItemTags } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { PropsWithChildren } from "react";

// const tagStyles: { [key in ItemTags]: string } = {
const tagStyles: Record<string, string> = {
  [ItemTags.DAIRY]: "bg-blue-200 text-blue-800",
  [ItemTags.VEGAN]: "bg-green-200 text-green-800",
  [ItemTags.PEANUTS]: "bg-yellow-200 text-yellow-800",
  [ItemTags.GLUTEN_FREE]: "bg-red-200 text-red-800",
  [ItemTags.SPICY]: "bg-orange-200 text-orange-800",
  [ItemTags.ORGANIC]: "bg-lime-200 text-lime-800",
};

/**
 * ItemCarouselFrame component
 *
 * This component displays the details of a singular item.
 *
 * @param item
 * @returns
 */
export default function ItemCarouselFrame({
  children,
  item,
  showDescription,
}: PropsWithChildren<{
  item: Item;
  showDescription: boolean;
}>) {
  return (
    <Card className="rounded-2xl [box-shadow:0_4px_17px_0_rgba(0,0,0,.12)]">
      <CardHeader className="pb-0">
        <CardTitle className="text-center text-2xl">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-4 gap-2">
        <Image
          src={`${item.image.url}`}
          width={250}
          height={171}
          alt={item.image.alt}
          className="rounded-2xl w-full"
        />
        <p className="text-sm uppercase">{item.type}</p>
        {showDescription && <p className="text-center">{item.description}</p>}
        <div className="flex gap-2 mt-4">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-1 rounded uppercase text-xs",
                tagStyles[tag]
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
