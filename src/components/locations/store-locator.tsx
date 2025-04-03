"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  MapPin,
  Search,
  Filter,
  MapIcon,
  ListFilter,
  Star,
  StarOff,
  Clock,
  Package,
  Truck,
  Phone,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import Map from "./map"
import { type Store, stores } from "../data/stores"

export default function StoreLocator() {
  const searchParams = useSearchParams()
  const initialLocation = searchParams.get("location") || ""
  const [searchQuery, setSearchQuery] = useState(initialLocation)
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores)
  const [selectedStore, setSelectedStore] = useState<Store | null>(null)
  const [view, setView] = useState("map")
  const [filters, setFilters] = useState({
    twentyFourSeven: false,
    packagingAssistance: false,
    courierDropOff: false,
  })
  const [favorites, setFavorites] = useState<string[]>([])
  const [recentlyVisited, setRecentlyVisited] = useState<string[]>([])
  const { toast } = useToast()
  const isMobile = useMobile()

  // Filter stores based on search query and filters
  useEffect(() => {
    let results = stores

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (store) =>
          store.name.toLowerCase().includes(query) ||
          store.address.toLowerCase().includes(query) ||
          store.suburb.toLowerCase().includes(query) ||
          store.postcode.toString().includes(query),
      )
    }

    // Apply checkbox filters
    if (filters.twentyFourSeven) {
      results = results.filter((store) => store.twentyFourSeven)
    }
    if (filters.packagingAssistance) {
      results = results.filter((store) => store.services.includes("Packaging Assistance"))
    }
    if (filters.courierDropOff) {
      results = results.filter((store) => store.services.includes("Courier Drop-Off"))
    }

    setFilteredStores(results)
  }, [searchQuery, filters])

  // Handle store selection
  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store)

    // Add to recently visited if not already in the list
    if (!recentlyVisited.includes(store.id)) {
      const newRecentlyVisited = [store.id, ...recentlyVisited].slice(0, 5)
      setRecentlyVisited(newRecentlyVisited)
      localStorage.setItem("recentlyVisited", JSON.stringify(newRecentlyVisited))
    }

    // Switch to map view on mobile when a store is selected
    if (isMobile && view === "list") {
      setView("map")
    }
  }

  // Toggle favorite status
  const toggleFavorite = (storeId: string) => {
    let newFavorites
    if (favorites.includes(storeId)) {
      newFavorites = favorites.filter((id) => id !== storeId)
      toast({
        title: "Removed from favorites",
        description: "This location has been removed from your favorites.",
      })
    } else {
      newFavorites = [...favorites, storeId]
      toast({
        title: "Added to favorites",
        description: "This location has been added to your favorites.",
      })
    }
    setFavorites(newFavorites)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  // Load favorites and recently visited from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    const storedRecentlyVisited = localStorage.getItem("recentlyVisited")

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }

    if (storedRecentlyVisited) {
      setRecentlyVisited(JSON.parse(storedRecentlyVisited))
    }
  }, [])

  // Get directions to the selected store
  const getDirections = (address: string) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat text-[#0033A0]">
        Find a ShipLite Drop-Off Location Near You
      </h1>
      <p className="text-center text-gray-600 mb-8 font-poppins">
        Locate our partner stores for convenient package drop-offs
      </p>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search by suburb, postcode or store name"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setSearchQuery("")}>
              <Filter size={16} />
              Clear
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="twentyFourSeven"
              checked={filters.twentyFourSeven}
              onCheckedChange={(checked) => setFilters({ ...filters, twentyFourSeven: checked as boolean })}
            />
            <label
              htmlFor="twentyFourSeven"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
            >
              <Clock size={16} className="text-[#0033A0]" />
              24/7 Locations
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="packagingAssistance"
              checked={filters.packagingAssistance}
              onCheckedChange={(checked) => setFilters({ ...filters, packagingAssistance: checked as boolean })}
            />
            <label
              htmlFor="packagingAssistance"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
            >
              <Package size={16} className="text-[#0033A0]" />
              Packaging Assistance
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="courierDropOff"
              checked={filters.courierDropOff}
              onCheckedChange={(checked) => setFilters({ ...filters, courierDropOff: checked as boolean })}
            />
            <label
              htmlFor="courierDropOff"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
            >
              <Truck size={16} className="text-[#0033A0]" />
              Courier Drop-Off
            </label>
          </div>
        </div>
      </div>

      {/* Mobile View Toggle */}
      {isMobile && (
        <div className="mb-4">
          <Tabs value={view} onValueChange={setView} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="map" className="flex items-center gap-2">
                <MapIcon size={16} />
                Map View
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <ListFilter size={16} />
                List View
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Section - Hidden on mobile when list view is active */}
        {(!isMobile || view === "map") && (
          <div className="lg:w-2/3 h-[500px] lg:h-[700px] bg-white rounded-lg shadow-md overflow-hidden">
            <Map stores={filteredStores} selectedStore={selectedStore} onStoreSelect={handleStoreSelect} />
          </div>
        )}

        {/* Store Listings - Hidden on mobile when map view is active */}
        {(!isMobile || view === "list") && (
          <div className="lg:w-1/3 space-y-4">
            {/* Recently Visited Section */}
            {recentlyVisited.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-3 font-montserrat text-[#0033A0]">Recently Visited</h2>
                <div className="space-y-2">
                  {recentlyVisited.map((storeId) => {
                    const store = stores.find((s) => s.id === storeId)
                    if (!store) return null
                    return (
                      <Button
                        key={store.id}
                        variant="ghost"
                        className="w-full justify-start text-left font-normal h-auto py-2"
                        onClick={() => handleStoreSelect(store)}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#0033A0] flex-shrink-0" />
                          <div>
                            <p className="font-medium">{store.name}</p>
                            <p className="text-sm text-gray-500">{store.suburb}</p>
                          </div>
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Favorites Section */}
            {favorites.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-3 font-montserrat text-[#0033A0]">Favorite Locations</h2>
                <div className="space-y-2">
                  {favorites.map((storeId) => {
                    const store = stores.find((s) => s.id === storeId)
                    if (!store) return null
                    return (
                      <Button
                        key={store.id}
                        variant="ghost"
                        className="w-full justify-start text-left font-normal h-auto py-2"
                        onClick={() => handleStoreSelect(store)}
                      >
                        <div className="flex items-center gap-2">
                          <Star size={16} className="text-[#FFCD00] flex-shrink-0" />
                          <div>
                            <p className="font-medium">{store.name}</p>
                            <p className="text-sm text-gray-500">{store.suburb}</p>
                          </div>
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Store Listings */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-3 font-montserrat text-[#0033A0]">
                {filteredStores.length} Locations Found
              </h2>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredStores.length > 0 ? (
                  filteredStores.map((store) => (
                    <Card
                      key={store.id}
                      className={`overflow-hidden cursor-pointer transition-all ${selectedStore?.id === store.id ? "ring-2 ring-[#0033A0]" : ""}`}
                      onClick={() => handleStoreSelect(store)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              {store.logo ? (
                                <img
                                  src={store.logo || "/placeholder.svg"}
                                  alt={store.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <MapPin size={24} className="text-[#0033A0]" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold">{store.name}</h3>
                              <p className="text-sm text-gray-500">
                                {store.suburb}, {store.postcode}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(store.id)
                            }}
                          >
                            {favorites.includes(store.id) ? (
                              <Star size={20} className="text-[#FFCD00] fill-[#FFCD00]" />
                            ) : (
                              <StarOff size={20} className="text-gray-400" />
                            )}
                          </Button>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {store.twentyFourSeven && (
                            <Badge variant="outline" className="flex items-center gap-1 bg-blue-50">
                              <Clock size={12} />
                              24/7
                            </Badge>
                          )}
                          {store.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No locations found. Try adjusting your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected Store Details */}
      {selectedStore && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-4 z-10 lg:hidden">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{selectedStore.name}</h3>
            <Button variant="ghost" size="icon" onClick={() => toggleFavorite(selectedStore.id)}>
              {favorites.includes(selectedStore.id) ? (
                <Star size={20} className="text-[#FFCD00] fill-[#FFCD00]" />
              ) : (
                <StarOff size={20} className="text-gray-400" />
              )}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-2">{selectedStore.address}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Phone size={14} />
            <a href={`tel:${selectedStore.phone}`} className="hover:underline">
              {selectedStore.phone}
            </a>
          </div>
          <div className="flex gap-2 mb-3">
            {selectedStore.twentyFourSeven ? (
              <Badge className="bg-green-100 text-green-800 border-green-200">Open 24/7</Badge>
            ) : (
              <Badge variant="outline" className="text-gray-700">
                {selectedStore.hours}
              </Badge>
            )}
          </div>
          <Button
            className="w-full bg-[#0033A0] hover:bg-[#002a80]"
            onClick={() => getDirections(selectedStore.address)}
          >
            <ExternalLink size={16} className="mr-2" />
            Get Directions
          </Button>
        </div>
      )}
    </div>
  )
}

