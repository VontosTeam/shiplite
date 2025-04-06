"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

interface SidebarContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue>({
  open: false,
  setOpen: () => {},
})

export function useSidebarContext() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { open, setOpen } = useSidebarContext()

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" hideClose className={cn(className)} {...props} />
      </Sheet>
      <div className={cn("hidden md:block", className)} {...props} />
    </>
  )
}

export function SidebarTrigger() {
  const { setOpen } = useSidebarContext()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="shrink-0 md:hidden"
      onClick={() => setOpen(true)}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />
}

interface SidebarMenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  asChild?: boolean
}

export function SidebarMenuButton({
  className,
  isActive,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "div"
  return <Comp className={cn(className)} {...props} />
}
