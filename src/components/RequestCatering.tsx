"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemModal from "@/components/ItemModal";
import CateringInfoForm from "@/components/forms/CateringInfoForm";
import ContactInfoForm from "@/components/forms/ContactInfoForm";
import TabsContentCard from "@/components/TabsContentCard";
import { Item, Menu } from "@/lib/types";
import { useState } from "react";
import MenuFrame from "./MenuFrame";
import { ContactInfoFormData } from "@/lib/schemas/contactInfoSchema";
import { CateringInfoFormData } from "@/lib/schemas/cateringInfoSchema";

export default function RequestCatering({
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

  const [tab, setTab] = useState<string>("create-order");
  const [contactInfo, setContactInfo] = useState<ContactInfoFormData>();
  const [cateringInfo, setCateringInfo] = useState<CateringInfoFormData>();

  return (
    <Tabs
      className="flex flex-col items-center w-full lg:w-[48rem] xl:w-3/4"
      value={tab}
      onValueChange={(tab) => setTab(tab)}
    >
      <TabsList className="grid w-full md:w-[48rem] grid-cols-3">
        <TabsTrigger className="text-xs" value="create-order">
          Create Your Order
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="catering-info">
          Catering Info
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="finish">
          Finish
        </TabsTrigger>
      </TabsList>
      <TabsContentCard className="space-y-4" value="create-order">
        <h1 className="font-medium text-2xl my-4">Choose ordering method</h1>
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
          <TabsContent value="menu-sets">
            <div>
              Select a Menu Go through the reccomended menus and select the
              order that best suits you. Keep in mind that prices are per
              person.
            </div>
            <div>$5 Menus 1 Main Entree</div>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              {menu_data.map((menu, index) => (
                <MenuFrame key={index} menu={menu} items={item_map} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="customize-order">
            <div className=" flex flex-col items-center gap-16">
              {/* Temporarily creating modals here; move them out later */}
              <ItemModal items={item_data.slice(0, 5)} />
              <ItemModal items={item_data.slice(5, 10)} />
            </div>
          </TabsContent>
          <TabsContent value="ai-recommender">AI recommendations</TabsContent>
        </Tabs>
      </TabsContentCard>
      <TabsContentCard
        value="catering-info"
      >
        <h1 className="font-medium text-2xl my-4">Basic Info & Services</h1>
        <CateringInfoForm onChangeSection={setTab} formData={cateringInfo} setFormData={setCateringInfo} />
      </TabsContentCard>
      <TabsContentCard value="finish">
        <h1 className="font-medium text-2xl my-4">Contact Info</h1>
        <ContactInfoForm onChangeSection={setTab} formData={contactInfo} setFormData={setContactInfo} />
      </TabsContentCard>
    </Tabs>
  );
}
