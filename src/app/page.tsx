import ItemModal from "@/components/ItemModal";
import { Item } from "@/lib/types";
import sampleItems from "@/sample_items.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CateringInfoForm from "@/components/forms/CateringInfoForm";
import ContactInfoForm from "@/components/forms/ContactInfoForm";
import RequestCatering from "@/components/RequestCatering";

export default function Home() {
  // TODO: We could process the data by passing it into Zod for schema validation, and get matching enums.
  const data: Item[] = sampleItems;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="font-medium text-3xl">Request Catering</h1>
        <RequestCatering data={data} />
      </div>
    </div>
  );
}
