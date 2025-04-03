import dynamic from 'next/dynamic'
import { type FC, type ReactNode } from 'react'

interface LoadingProps {
  children?: ReactNode;
}

const Loading: FC<LoadingProps> = () => (
  <div className="animate-pulse">Loading...</div>
)

const ContactFormLoading: FC<LoadingProps> = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-gray-200 rounded" />
    <div className="h-10 bg-gray-200 rounded" />
    <div className="h-32 bg-gray-200 rounded" />
  </div>
)

// UI Components
export const DynamicToaster = dynamic(
  () => import('@/components/ui/toaster').then(mod => mod.Toaster),
  { loading: Loading }
)

// Layout Components
export const DynamicNavbar = dynamic(
  () => import('@/components/navbar').then(mod => mod.default),
  { ssr: true }
)

export const DynamicFooter = dynamic(
  () => import('@/components/footer').then(mod => mod.default),
  { ssr: true }
)

// Feature Components
export const DynamicFlightSchedules = dynamic(
  () => import('@/components/flight-schedules').then(mod => mod.default),
  {
    ssr: true,
    loading: Loading
  }
)

export const DynamicContactForm = dynamic(
  () => import('@/components/contact/contact-form').then(mod => mod.default),
  {
    loading: ContactFormLoading
  }
)

// Context Providers
export const DynamicLanguageProvider = dynamic(
  () => import('@/contexts/language-context').then(mod => mod.LanguageProvider),
  { ssr: true }
) 