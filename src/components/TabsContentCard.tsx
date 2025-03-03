import { ReactNode } from "react";
import { TabsContent } from "@/components/ui/tabs";

export default function TabsContentCard({ className, value, children }: { className?: string, value: string, children?: ReactNode }) {
  return (
    <TabsContent
      className={`bg-gray-50 p-4 m-4 w-full border-2 rounded-md ${className}`}
      value={value}
    >
      {children}
    </TabsContent>
  );
}