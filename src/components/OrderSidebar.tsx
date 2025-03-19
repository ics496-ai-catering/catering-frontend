"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import useOrderStore from "@/lib/stores/orderStore";
import { Item } from "@/lib/types";

export function OrderSidebar() {
  const order: Item[] = useOrderStore((state) => state.order);
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <h1 className="font-medium">Your Order</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {order.length > 0 ? (
              order.map((item, index) => <SidebarGroupLabel key={index}>{item.name}</SidebarGroupLabel>)
            ) : (
              <SidebarGroupLabel>Your order is empty.</SidebarGroupLabel>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
