import { Item, ItemTags } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

// const tagStyles: { [key in ItemTags]: string } = {
export const tagStyles: Record<string, string> = {
  [ItemTags.DAIRY]: "bg-blue-200 text-blue-800",
  [ItemTags.VEGAN]: "bg-green-200 text-green-800",
  [ItemTags.PEANUTS]: "bg-yellow-200 text-yellow-800",
  [ItemTags.GLUTEN_FREE]: "bg-red-200 text-red-800",
  [ItemTags.SPICY]: "bg-orange-200 text-orange-800",
  [ItemTags.ORGANIC]: "bg-lime-200 text-lime-800",
};

/**
 * ItemFrame component
 *
 * This component displays the details of a singular item.
 *
 * @param item
 * @returns
 */
export default function ItemFrame({
  item,
  index,
}: {
  item: Item;
  index: number;
}) {
  return (
    <div
      key={index}
      className="w-[400px] h-[500px] rounded-2xl [box-shadow:0_4px_17px_0_rgba(0,0,0,.12)]"
    >
      <motion.div
        className="flex flex-col items-center p-4 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-bold text-2xl">{item.name}</h1>
        <Image
          src={`/food/${item.image.url}`}
          width={250}
          height={187.5}
          alt={item.image.alt}
          className="rounded-2xl w-full"
        />
        <p className="text-sm uppercase">{item.type}</p>
        <p className="text-center">{item.description}</p>
        <div className="flex gap-2 mt-4">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className={cn("px-2 py-1 rounded uppercase", tagStyles[tag])}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
