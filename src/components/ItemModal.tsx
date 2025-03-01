import { cn } from "@/lib/utils";
import Image from "next/image";

export type ItemModalProps = {
  name: string;
  image: {
    url: string;
    alt: string;
  };
  type: string;
  description: string;
  tags?: string[];
};

export enum ItemTags {
  DAIRY = "DAIRY",
  VEGAN = "VEGAN",
  PEANUTS = "PEANUTS",
  GLUTEN_FREE = "GLUTEN_FREE",
  SPICY = "SPICY",
  ORGANIC = "ORGANIC",
}

// const tagStyles: { [key in ItemTags]: string } = {
const tagStyles: Record<string, string> = {
  [ItemTags.DAIRY]: "bg-blue-200 text-blue-800",
  [ItemTags.VEGAN]: "bg-green-200 text-green-800",
  [ItemTags.PEANUTS]: "bg-yellow-200 text-yellow-800",
  [ItemTags.GLUTEN_FREE]: "bg-red-200 text-red-800",
  [ItemTags.SPICY]: "bg-orange-200 text-orange-800",
  [ItemTags.ORGANIC]: "bg-lime-200 text-lime-800",
};

export default function ItemModal(props: ItemModalProps) {
  return (
    <div className="w-[400px] h-[500px] bg-slate-100 rounded-lg flex flex-col items-center p-4 gap-2 border-2 border-black shadow-xl">
      <h1 className="font-bold text-2xl">{props.name}</h1>
      <Image
        src={`/food/${props.image.url}`}
        width={250}
        height={187.5}
        alt={props.image.alt}
        className="rounded-2xl w-full"
      />
      <p className="text-sm uppercase">{props.type}</p>
      <p className="text-center">{props.description}</p>
      <div className="flex gap-2 mt-4">
        {props.tags?.map((tag) => (
          <span
            key={tag}
            className={cn("px-2 py-1 rounded uppercase", tagStyles[tag])}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
