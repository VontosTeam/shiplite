"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ContactInfo() {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#0033A0]">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-[#FFCD00] mr-4 flex-shrink-0" />
          <div>
            <p className="font-poppins font-medium">Email</p>
            <a href="mailto:support@shiplite.com.au" className="text-[#0033A0] hover:text-[#FFCD00] transition-colors">
              support@shiplite.com.au
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-[#FFCD00] mr-4 flex-shrink-0" />
          <div>
            <p className="font-poppins font-medium">Phone</p>
            <p className="mb-1">AU: +61 X XXXX XXXX</p>
            <p>PH: +63 X XXXX XXXX</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-[#FFCD00] mr-4 flex-shrink-0" />
          <div>
            <p className="font-poppins font-medium">Main Office</p>
            <p>123 Shipping Lane, Sydney NSW 2000, Australia</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-montserrat text-lg font-semibold mb-4">Connect with Us</h3>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M9 14a5 5 0 0 0 6 0" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 9.5V4.5C4 3.67 4.67 3 5.5 3H9.5C10.33 3 11 3.67 11 4.5V9.5C11 10.33 10.33 11 9.5 11H5.5C4.67 11 4 10.33 4 9.5Z" />
              <path d="M13 19.5V14.5C13 13.67 13.67 13 14.5 13H18.5C19.33 13 20 13.67 20 14.5V19.5C20 20.33 19.33 21 18.5 21H14.5C13.67 21 13 20.33 13 19.5Z" />
              <path d="M4 19.5V14.5C4 13.67 4.67 13 5.5 13H9.5C10.33 13 11 13.67 11 14.5V19.5C11 20.33 10.33 21 9.5 21H5.5C4.67 21 4 20.33 4 19.5Z" />
              <path d="M13 9.5V4.5C13 3.67 13.67 3 14.5 3H18.5C19.33 3 20 3.67 20 4.5V9.5C20 10.33 19.33 11 18.5 11H14.5C13.67 11 13 10.33 13 9.5Z" />
            </svg>
            <span className="sr-only">Viber</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.22.66-.48l-.01-1.7c-2.68.58-3.25-1.3-3.25-1.3-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.27 1.05 2.82.8.09-.63.34-1.05.62-1.3-2.17-.24-4.45-1.08-4.45-4.82 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.23.1-2.55 0 0 .83-.27 2.7 1a9.4 9.4 0 0 1 5 0c1.87-1.27 2.7-1 2.7-1 .53 1.32.2 2.3.1 2.55.62.68 1 1.55 1 2.62 0 3.75-2.28 4.58-4.45 4.82.35.3.66.9.66 1.8l-.01 2.67c0 .26.16.57.66.48A10 10 0 0 0 12 2Z" />
            </svg>
            <span className="sr-only">Messenger</span>
          </Button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <h3 className="font-montserrat text-lg font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

