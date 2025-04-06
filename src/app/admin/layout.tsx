import { type ReactNode } from "react"
import { ClientToaster } from "@/lib/utils/client-wrappers"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {children}
      <ClientToaster />
    </div>
  )
} 