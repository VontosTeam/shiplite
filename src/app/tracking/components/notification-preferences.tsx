"use client"

import type React from "react"

import { useState } from "react"
import { Bell, MessageSquare, Mail, AlertCircle } from "lucide-react"

export default function NotificationPreferences() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notificationMethods, setNotificationMethods] = useState({
    sms: true,
    email: false,
    whatsapp: false,
    viber: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would save the notification preferences
    alert("Notification preferences saved!")
  }

  const toggleNotificationMethod = (method: keyof typeof notificationMethods) => {
    setNotificationMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }))
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <Bell className="w-5 h-5 text-[#0033A0] mr-2" />
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
      </div>

      <p className="text-gray-600 mb-6">
        Receive real-time updates about your shipment. Choose your preferred notification methods below.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-700 mb-3">Notification Methods</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <button
              type="button"
              onClick={() => toggleNotificationMethod("sms")}
              className={`flex items-center justify-center p-4 rounded-md border ${
                notificationMethods.sms ? "border-[#0033A0] bg-blue-50" : "border-gray-300"
              }`}
            >
              <MessageSquare
                className={`w-5 h-5 mr-2 ${notificationMethods.sms ? "text-[#0033A0]" : "text-gray-500"}`}
              />
              <span className={notificationMethods.sms ? "text-[#0033A0] font-medium" : "text-gray-700"}>SMS</span>
            </button>

            <button
              type="button"
              onClick={() => toggleNotificationMethod("email")}
              className={`flex items-center justify-center p-4 rounded-md border ${
                notificationMethods.email ? "border-[#0033A0] bg-blue-50" : "border-gray-300"
              }`}
            >
              <Mail className={`w-5 h-5 mr-2 ${notificationMethods.email ? "text-[#0033A0]" : "text-gray-500"}`} />
              <span className={notificationMethods.email ? "text-[#0033A0] font-medium" : "text-gray-700"}>Email</span>
            </button>

            <button
              type="button"
              onClick={() => toggleNotificationMethod("whatsapp")}
              className={`flex items-center justify-center p-4 rounded-md border ${
                notificationMethods.whatsapp ? "border-[#0033A0] bg-blue-50" : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={notificationMethods.whatsapp ? "#0033A0" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`mr-2 ${notificationMethods.whatsapp ? "text-[#0033A0]" : "text-gray-500"}`}
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
              </svg>
              <span className={notificationMethods.whatsapp ? "text-[#0033A0] font-medium" : "text-gray-700"}>
                WhatsApp
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleNotificationMethod("viber")}
              className={`flex items-center justify-center p-4 rounded-md border ${
                notificationMethods.viber ? "border-[#0033A0] bg-blue-50" : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={notificationMethods.viber ? "#0033A0" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`mr-2 ${notificationMethods.viber ? "text-[#0033A0]" : "text-gray-500"}`}
              >
                <path d="M11.2 11c-.2-3.2 2-4.9 4.8-4.5m-4.8 4.5c-.2-3.2 2-4.9 4.8-4.5" />
                <path d="M13 7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
                <path d="M19.1 14c.8-8.8-7.3-10.9-10.4-7.1-3.6 4.4-1.9 9.5 1.7 11.6a12.5 12.5 0 0 0 11.4 0" />
                <path d="M9.5 9C10 4 15.5 4 16 9" />
                <path d="M13 13v3" />
                <path d="M12 16h2" />
              </svg>
              <span className={notificationMethods.viber ? "text-[#0033A0] font-medium" : "text-gray-700"}>Viber</span>
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
            <div>
              <p className="text-sm text-yellow-700">
                By enabling notifications, you agree to receive updates about your shipment status. Standard messaging
                rates may apply.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-[#0033A0] text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Preferences
        </button>
      </form>
    </div>
  )
}

