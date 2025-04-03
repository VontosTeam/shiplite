'use client'

import dynamic from 'next/dynamic'
import { type FC } from 'react'

const Loading: FC = () => (
  <div className="animate-pulse">Loading...</div>
)

const ContactFormLoading: FC = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-gray-200 rounded" />
    <div className="h-10 bg-gray-200 rounded" />
    <div className="h-32 bg-gray-200 rounded" />
  </div>
)

// Client-side only components
export const ClientToaster = dynamic(
  () => import('@/components/ui/toaster').then(mod => mod.Toaster),
  { ssr: false, loading: Loading }
)

export const ClientContactForm = dynamic(
  () => import('@/components/contact/contact-form').then(mod => mod.default),
  {
    ssr: false,
    loading: ContactFormLoading
  }
) 