"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderForm from "@/components/forms/OrderForm";
import CateringInfoForm from "@/components/forms/CateringInfoForm";
import ContactInfoForm from "@/components/forms/ContactInfoForm";
import { ContactInfoFormData } from "@/lib/schemas/contactInfoSchema";
import { CateringInfoFormData } from "@/lib/schemas/cateringInfoSchema";
import TabsContentCard from "@/components/TabsContentCard";
import { Item, Menu } from "@/lib/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UtensilsIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { OrderSidebar } from "@/components/OrderSidebar";

export default function RequestCatering({
  item_data,
  menu_data,
}: {
  item_data: Item[];
  menu_data: Menu[];
}) {
  const [tab, setTab] = useState<string>("create-order");
  const { toggleSidebar } = useSidebar();

  // const order: Item[] = useOrderStore((state) => state.order);
  const [cateringInfo, setCateringInfo] = useState<CateringInfoFormData>();
  const [contactInfo, setContactInfo] = useState<ContactInfoFormData>();

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
        <div className="flex justify-between my-4">
          <h1 className="font-medium text-2xl">Choose ordering method</h1>
          <Button size="sm" onClick={toggleSidebar} className="bg-green-600"><UtensilsIcon strokeWidth={3} /> View your order</Button>
        </div>
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
      <OrderSidebar />
    </Tabs>
  );
}
