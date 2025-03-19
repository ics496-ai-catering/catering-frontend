import { UtensilsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";


export default function ViewOrderButton(){
  const { toggleSidebar } = useSidebar();
  return (
    <Button size="sm" onClick={toggleSidebar} className="bg-green-600">
      <UtensilsIcon strokeWidth={3} /> View your order
    </Button>
  );
};
