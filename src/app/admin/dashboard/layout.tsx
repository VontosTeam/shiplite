"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  Box,
  Calendar,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  Package,
  Settings,
  Store,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
      active: pathname === "/admin/dashboard",
    },
    {
      label: "Shipments",
      icon: Package,
      href: "/admin/dashboard/shipments",
      active: pathname === "/admin/dashboard/shipments",
    },
    {
      label: "Users",
      icon: Users,
      href: "/admin/dashboard/users",
      active: pathname === "/admin/dashboard/users",
    },
    {
      label: "Pricing",
      icon: CreditCard,
      href: "/admin/dashboard/pricing",
      active: pathname === "/admin/dashboard/pricing",
    },
    {
      label: "Flight Schedule",
      icon: Calendar,
      href: "/admin/dashboard/flights",
      active: pathname === "/admin/dashboard/flights",
    },
    {
      label: "Store Partners",
      icon: Store,
      href: "/admin/dashboard/stores",
      active: pathname === "/admin/dashboard/stores",
    },
    {
      label: "Customer Support",
      icon: HelpCircle,
      href: "/admin/dashboard/support",
      active: pathname === "/admin/dashboard/support",
    },
    {
      label: "Reports",
      icon: BarChart3,
      href: "/admin/dashboard/reports",
      active: pathname === "/admin/dashboard/reports",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/dashboard/settings",
      active: pathname === "/admin/dashboard/settings",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="px-3 py-2">
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/shiplite-logo-red.png"
                  alt="ShipLite"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={route.active}>
                    <Link 
                      href={route.href} 
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        route.active 
                          ? "bg-primary/10 text-primary hover:bg-primary/15" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <route.icon className={cn(
                        "h-5 w-5",
                        route.active && "text-primary"
                      )} />
                      <span>{route.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@shiplite.com</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">{routes.find((route) => route.active)?.label || "Dashboard"}</h1>
            </div>
          </div>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}

