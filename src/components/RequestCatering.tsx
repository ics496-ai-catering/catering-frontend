"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CateringInfoForm from "@/components/forms/CateringInfoForm";
import ContactInfoForm from "@/components/forms/ContactInfoForm";
import TabsContentCard from "@/components/TabsContentCard";
import { Item, Menu } from "@/lib/types";
import { useState } from "react";
import { ContactInfoFormData } from "@/lib/schemas/contactInfoSchema";
import { CateringInfoFormData } from "@/lib/schemas/cateringInfoSchema";
import OrderForm from "./forms/OrderForm";

export default function RequestCatering({
  item_data,
  menu_data,
}: {
  item_data: Item[];
  menu_data: Menu[];
}) {
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
        <OrderForm item_data={item_data} menu_data={menu_data} />
      </TabsContentCard>
      <TabsContentCard value="catering-info">
        <h1 className="font-medium text-2xl my-4">Basic Info & Services</h1>
        <CateringInfoForm
          onChangeSection={setTab}
          formData={cateringInfo}
          setFormData={setCateringInfo}
        />
      </TabsContentCard>
      <TabsContentCard value="finish">
        <h1 className="font-medium text-2xl my-4">Contact Info</h1>
        <ContactInfoForm
          onChangeSection={setTab}
          formData={contactInfo}
          setFormData={setContactInfo}
        />
      </TabsContentCard>
    </Tabs>
  );
}
