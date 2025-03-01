"use client";

import { Item } from "@/lib/types";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ItemFrame from "./ItemFrame";
import { AnimatePresence, motion } from "motion/react";

/**
 * ItemModal component
 *
 * This component wraps the ItemFrame componenet for pagination in a modal view.
 *
 * @returns
 */
export default function ItemModal({ items }: { items: Item[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);

  useEffect(() => {
    setIsFirstItem(currentIndex <= 0);
    setIsLastItem(currentIndex >= items.length - 1);
  }, [currentIndex, items.length]);

  // TODO: Add a close button to the modal
  // TODO: We could make it infinite pagination instead (return to 0 when reaching the end)
  return (
    <AnimatePresence mode="wait">
      <motion.div className="relative">
        <motion.button
          onClick={() => setCurrentIndex((index) => index - 1)}
          disabled={isFirstItem}
          className={cn(
            "absolute -left-10 top-1/2",
            isFirstItem && "cursor-not-allowed"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={32} className="fill-slate-100" />
        </motion.button>
        <ItemFrame index={currentIndex} item={items[currentIndex]} />
        <motion.button
          onClick={() => setCurrentIndex((index) => index + 1)}
          disabled={isLastItem}
          className={cn(
            "absolute -right-10 top-1/2",
            isLastItem && "cursor-not-allowed"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={32} className="fill-slate-100" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
