// import sampleItems from "@/items.json";
import sampleMenus from "@/menus.json";
import { Item, Menu } from "@/lib/types";
import RequestCatering from "@/components/RequestCatering";
import { loadFood } from "@/lib/loadFood";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Home() {
  // TODO: We could process the data by passing it into Zod for schema validation, and get matching enums.
  const item_data: Item[] = await loadFood();
  // const item_data = sampleItems;
  const menu_data: Menu[] = sampleMenus;

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="container mx-auto pt-8">
        <div className="flex flex-col items-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
          <h1 className="font-medium text-3xl">Request Catering</h1>
          <RequestCatering item_data={item_data} menu_data={menu_data}/>
        </div>
      </div>
    </SidebarProvider>
  );
}
