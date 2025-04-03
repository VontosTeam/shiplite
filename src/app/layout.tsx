import { Inter, Montserrat } from "next/font/google"
import { DynamicToaster, DynamicLanguageProvider } from "@/lib/dynamic-imports"
import { ClientToaster } from "@/components/client-wrappers"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata = {
  title: "ShipLite",
  description: "The Smart Way to Send Gifts & Essentials to the Philippines",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.className, montserrat.variable)}>
      <head>
        <link rel="dns-prefetch" href="/api" />
        <link rel="preconnect" href="/api" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body 
        className="min-h-screen bg-background font-sans antialiased"
        style={{ colorScheme: 'light' }}
      >
        <DynamicLanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
          <ClientToaster />
        </DynamicLanguageProvider>
      </body>
    </html>
  )
}