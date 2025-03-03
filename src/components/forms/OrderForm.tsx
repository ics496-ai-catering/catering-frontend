"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ItemModal from "../ItemModal";
import MenuFrame from "../MenuFrame";
import { Item, Menu } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";

export default function OrderForm({
  item_data,
  menu_data,
}: {
  item_data: Item[];
  menu_data: Menu[];
}) {
  // This is temporary. Would be good to use a proper data store (zustand?)
  const item_map: Map<Item["id"], Item> = new Map(
    item_data.map((item) => [item.id, item])
  );

  const [selectedMenuId, setSelectedMenuId] = useState<Menu["id"]>("1");
  const selectedMenu = menu_data.find((m) => m.id == selectedMenuId);

  // TODO: Use zustand to store the menus that users have added.

  return (
    <Tabs className="mx-auto space-y-4" defaultValue="menu-sets">
      {/* TODO: style these tabs to look like the original cards */}
      <TabsList className="grid grid-cols-3">
        <TabsTrigger className="text-xs" value="menu-sets">
          Recommended Menu Sets
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="customize-order">
          Customize My Catering Order
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="ai-recommender">
          Help Me Pick
        </TabsTrigger>
      </TabsList>
      <TabsContent className="space-y-4" value="menu-sets">
        <span className="font-bold">Select a Menu. </span>
        <span className="text-sm text-gray-600">
          Go through the recommended menus and select the order that best suits
          you.{" "}
        </span>
        <span className="text-sm text-gray-600 underline">
          Keep in mind that the prices are per person.
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          {menu_data
            .sort((a, b) => a.price - b.price)
            .map((menu, index) => (
              <Button
                key={index}
                className="w-[100px] h-[75px]"
                onClick={() => setSelectedMenuId(menu.id)}
              >
                ${menu.price}
              </Button>
            ))}
        </div>
        <div className="text-center">
          <h1 className="text-2xl text-green-600 font-bold">
            ${selectedMenu?.price} Menus
          </h1>
          {selectedMenu &&
            Object.entries(selectedMenu.contains)
              .filter(([, value]) => value > 0)
              .map(
                ([key, value]) =>
                  `${key.charAt(0).toUpperCase() + key.slice(1)} ${value}`
              )
              .join(", ")}
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {selectedMenu ? (
            <MenuFrame menu={selectedMenu} items={item_map} />
          ) : (
            <p>No menus available!</p>
          )}
        </div>
      </TabsContent>
      <TabsContent value="customize-order">
        <div className="flex flex-col items-center gap-16">
          {/* Temporarily creating modals here; move them out later */}
          <ItemModal items={item_data.slice(0, 5)} start_index={0} />
          <ItemModal items={item_data.slice(5, 10)} start_index={0} />
        </div>
      </TabsContent>
      <TabsContent value="ai-recommender">AI recommendations</TabsContent>
    </Tabs>
  );
}
