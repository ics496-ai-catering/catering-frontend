import ItemModal from "@/components/ItemModal";
import { Item } from "@/lib/types";
import sampleItems from "@/sample_items.json";

export default function Home() {
  // TODO: We could process the data by passing it into Zod for schema validation, and get matching enums.
  const data: Item[] = sampleItems;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Request Catering</h1>
        <div>Something goes here...</div>

        {/* Temporarily creating modals here; move them out later */}
        <ItemModal items={data.slice(0, 5)} />
        <ItemModal items={data.slice(5, 10)} />
      </div>
    </div>
  );
}
