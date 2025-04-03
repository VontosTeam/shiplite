"use client"

import { useEffect, useRef, useState } from "react"
import type { Store } from "../data/stores"

interface MapProps {
  stores: Store[]
  selectedStore: Store | null
  onStoreSelect: (store: Store) => void
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function Map({ stores, selectedStore, onStoreSelect }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])
  const [infoWindow, setInfoWindow] = useState<any>(null)

  // Initialize the map
  useEffect(() => {
    if (!mapRef.current) return

    // Mock Google Maps initialization for the demo
    const mockMap = {
      setCenter: () => {},
      setZoom: () => {},
    }
    setMap(mockMap)

    // In a real implementation, you would use:
    /*
    window.initMap = () => {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.865143, lng: 151.209900 }, // Sydney, Australia
        zoom: 11,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      })
      
      const infoWindowInstance = new window.google.maps.InfoWindow()
      
      setMap(mapInstance)
      setInfoWindow(infoWindowInstance)
    }

    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
      }
    } else {
      window.initMap()
    }
    */
  }, [])

  // Update markers when stores or map changes
  useEffect(() => {
    if (!map) return

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null))

    // Create new markers
    const newMarkers = stores.map((store) => {
      // In a real implementation, you would use:
      /*
      const marker = new window.google.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map,
        title: store.name,
        icon: {
          url: selectedStore?.id === store.id 
            ? '/marker-selected.png' 
            : '/marker.png',
          scaledSize: new window.google.maps.Size(30, 40),
        }
      })
      
      marker.addListener('click', () => {
        onStoreSelect(store)
        
        const content = `
          <div class="p-2">
            <h3 class="font-semibold">${store.name}</h3>
            <p class="text-sm">${store.address}</p>
          </div>
        `
        
        infoWindow.setContent(content)
        infoWindow.open(map, marker)
      })
      
      return marker
      */

      // Mock marker for the demo
      return { setMap: () => {} }
    })

    setMarkers(newMarkers)

    // Center map on selected store
    if (selectedStore) {
      // In a real implementation, you would use:
      /*
      map.setCenter({ lat: selectedStore.lat, lng: selectedStore.lng })
      map.setZoom(15)
      
      // Open info window for selected store
      const selectedMarker = newMarkers.find((_, index) => 
        stores[index].id === selectedStore.id
      )
      
      if (selectedMarker && infoWindow) {
        const content = `
          <div class="p-2">
            <h3 class="font-semibold">${selectedStore.name}</h3>
            <p class="text-sm">${selectedStore.address}</p>
          </div>
        `
        
        infoWindow.setContent(content)
        infoWindow.open(map, selectedMarker)
      }
      */
    }
  }, [stores, selectedStore, map])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full">
        {/* Placeholder for Google Maps */}
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <p className="text-lg font-semibold mb-2">Interactive Map</p>
            <p className="text-sm text-gray-500 mb-4">
              Google Maps would display here with markers for each store location
            </p>

            {selectedStore ? (
              <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto text-left">
                <h3 className="font-semibold text-lg mb-2">{selectedStore.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{selectedStore.address}</p>
                <p className="text-sm text-gray-600 mb-2">Phone: {selectedStore.phone}</p>
                <p className="text-sm font-medium mb-2">
                  Hours: {selectedStore.twentyFourSeven ? "Open 24/7" : selectedStore.hours}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedStore.services.map((service, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
                <button className="bg-[#0033A0] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#002a80] transition-colors w-full">
                  Get Directions
                </button>
              </div>
            ) : (
              <p className="text-sm">Select a store to see details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

