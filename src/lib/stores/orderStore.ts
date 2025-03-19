import { create } from "zustand";
import { Item } from "@/lib/types";

type Store = {
  order: Item[];
}

type Action = {
  addItem: (item: Item) => void,
  removeItem: (id: number) => void,
}

const useOrderStore = create<Store & Action>((set) => ({
  order: [],
  addItem: (item: Item) => {
    set((state) => ({ order: [...state.order, item] }));
  },
  removeItem: (id: number) => {
    set((state) => {
      const newOrder: Item[] = state.order;
      const toRemoveIndex: number = newOrder.findLastIndex((item) => item.id === id);
      // TODO: maybe need some error handling here in case toRemoveIndex is -1 for some reason?
      newOrder.splice(toRemoveIndex, 1);
      return { order: newOrder };
    });
  },
}));

export default useOrderStore;
