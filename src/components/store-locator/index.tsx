"use client"

import { useState } from "react"
import { MapPin, Search, Phone, Clock, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - replace with actual API call
const STORE_LOCATIONS = [
  {
    id: 1,
    name: "Filipino Grocery Sydney",
    address: "123 George Street, Sydney NSW 2000",
    phone: "(02) 9123 4567",
    hours: "Mon-Sat: 9AM-6PM, Sun: 10AM-4PM",
    type: "Grocery Store",
  },
  {
    id: 2,
    name: "Manila Express Remittance",
    address: "45 Market Street, Sydney NSW 2000",
    phone: "(02) 9234 5678",
    hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM",
    type: "Remittance Center",
  },
  {
    id: 3,
    name: "Pinoy Store Parramatta",
    address: "78 Church Street, Parramatta NSW 2150",
    phone: "(02) 9345 6789",
    hours: "Mon-Sun: 9AM-7PM",
    type: "Grocery Store",
  },
]

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStores, setFilteredStores] = useState(STORE_LOCATIONS)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    
    const filtered = STORE_LOCATIONS.filter(
      store =>
        store.name.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query) ||
        store.type.toLowerCase().includes(query)
    )
    setFilteredStores(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0033A0] mb-4 font-montserrat">Store Partners & Drop-Off Locations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find ShipLite partner locations near you for convenient package drop-off. Our partners include Filipino grocery
          stores, remittance centers, and community shops.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by location name, address, or type..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {filteredStores.map(store => (
            <Card key={store.id} className="border-2 border-[#0033A0]/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0033A0] font-montserrat">{store.name}</h3>
                      <p className="text-sm text-muted-foreground">{store.type}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mt-1" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4 mt-1" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 mt-1" />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto"
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(store.address)}`, '_blank')}
                    >
                      View on Map
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 