import ItemModal from "@/components/ItemModal";
import { Item } from "@/lib/types";
import sampleItems from "@/sample_items.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CateringInfoForm from "@/components/forms/CateringInfoForm";
import ContactInfoForm from "@/components/forms/ContactInfoForm";

export default function Home() {
  // TODO: We could process the data by passing it into Zod for schema validation, and get matching enums.
  const data: Item[] = sampleItems;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="font-medium text-3xl">Request Catering</h1>
        <Tabs className="w-[60rem]" defaultValue="create-order">
          <TabsList className="mx-auto grid w-[45rem] grid-cols-3">
            <TabsTrigger className="text-xs" value="create-order">Create Your Order</TabsTrigger>
            <TabsTrigger className="text-xs" value="catering-info">Catering Info</TabsTrigger>
            <TabsTrigger className="text-xs" value="finish">Finish</TabsTrigger>
          </TabsList>
          <TabsContent className="bg-gray-50 p-4 m-4 border-2 rounded-md" value="create-order">
            <h1 className="font-medium text-2xl my-4">Choose ordering method</h1>
            <Tabs className="mx-auto w-full" defaultValue="menu-sets">
              {/* TODO: style these tabs to look like the original cards */}
              <TabsList className="grid grid-cols-3">
                <TabsTrigger className="text-xs" value="menu-sets">Recommended Menu Sets</TabsTrigger>
                <TabsTrigger className="text-xs" value="customize-order">Customize My Catering Order</TabsTrigger>
                <TabsTrigger className="text-xs" value="ai-recommender">Help Me Pick</TabsTrigger>
              </TabsList>
              <TabsContent value="menu-sets">
                Menu sets
              </TabsContent>
              <TabsContent value="customize-order">
                <div className=" flex flex-col items-center gap-16">
                  {/* Temporarily creating modals here; move them out later */}
                  <ItemModal items={data.slice(0, 5)}/>
                  <ItemModal items={data.slice(5, 10)}/>
                </div>
              </TabsContent>
              <TabsContent value="ai-recommender">
                AI recommendations
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent className="bg-gray-50 p-4 m-4 border-2 rounded-md" value="catering-info">
            <h1 className="font-medium text-2xl my-4">Basic Info & Services</h1>
            <CateringInfoForm />
          </TabsContent>
          <TabsContent className="bg-gray-50 p-4 m-4 border-2 rounded-md" value="finish">
            <h1 className="font-medium text-2xl my-4">Contact Info</h1>
            <ContactInfoForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
