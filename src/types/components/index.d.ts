import { FC, ReactNode } from 'react'

// UI Components
export interface ToasterProps {
  // Add any props if needed
}
export const Toaster: FC<ToasterProps>

// Layout Components
export interface NavbarProps {
  // Add any props if needed
}
export const Navbar: FC<NavbarProps>

export interface FooterProps {
  // Add any props if needed
}
export const Footer: FC<FooterProps>

// Feature Components
export interface FlightSchedulesProps {
  // Add any props if needed
}
export const FlightSchedules: FC<FlightSchedulesProps>

export interface ContactFormProps {
  // Add any props if needed
}
export const ContactForm: FC<ContactFormProps>

// Context Providers
export interface LanguageProviderProps {
  children: ReactNode
}
export const LanguageProvider: FC<LanguageProviderProps> 