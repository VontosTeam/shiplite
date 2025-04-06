"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import {
  BarChart3,
  Calendar,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  Package,
  Settings,
  Store,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
  useSidebarContext,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-is-mobile"

interface AdminLayoutProps {
  children: React.ReactNode
}

function AdminLayoutContent({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useIsMobile()
  const { setOpen } = useSidebarContext()

  useEffect(() => {
    if (isMobile) {
      // Close sidebar immediately on route change
      setOpen(false)
    }
  }, [pathname, isMobile, setOpen])

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
    <div className="fixed inset-0 flex bg-background">
      <Sidebar className="z-50 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <SidebarHeader className="px-3 py-2">
          <div className="flex items-center px-2">
            <Link href="/admin/dashboard" className="flex items-center">
              <Image
                src="/images/logos/shiplite-logo-red.webp"
                alt="ShipLite Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
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
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      route.active 
                        ? "bg-primary/10 text-primary hover:bg-primary/15" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <route.icon className={cn(
                      "h-5 w-5",
                      route.active && "text-primary"
                    )} />
                    <span className="font-medium">{route.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t border-border/50 bg-muted/50 p-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@shiplite.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 overflow-hidden">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-xl font-bold">{routes.find((route) => route.active)?.label || "Dashboard"}</h1>
          </div>
        </div>
        <div className="h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  )
}

