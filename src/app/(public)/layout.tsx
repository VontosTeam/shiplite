import { DynamicNavbar, DynamicFooter } from "@/lib/dynamic-imports"
import { ClientToaster } from "@/lib/utils/client-wrappers"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <DynamicNavbar />
      <div className="flex-1">{children}</div>
      <DynamicFooter />
      <ClientToaster />
    </div>
  )
} 