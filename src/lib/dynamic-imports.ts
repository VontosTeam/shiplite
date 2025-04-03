import dynamic from 'next/dynamic'

// UI Components
export const DynamicToaster = dynamic(
  () => import('@/components/ui/toaster').then(mod => mod.Toaster),
  { ssr: false }
)

// Layout Components
export const DynamicNavbar = dynamic(
  () => import('@/components/navbar'),
  { ssr: true }
)

export const DynamicFooter = dynamic(
  () => import('@/components/footer'),
  { ssr: true }
)

// Feature Components
export const DynamicFlightSchedules = dynamic(
  () => import('@/components/flight-schedules'),
  {
    ssr: true,
    loading: () => <div className="animate-pulse">Loading...</div>
  }
)

export const DynamicContactForm = dynamic(
  () => import('@/components/contact/contact-form'),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
      </div>
    )
  }
)

// Context Providers
export const DynamicLanguageProvider = dynamic(
  () => import('@/contexts/language-context').then(mod => mod.LanguageProvider),
  { ssr: true }
) 