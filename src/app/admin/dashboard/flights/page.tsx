"use client"

import { useState } from "react"
import { ArrowUpDown, Calendar, Download, Filter, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AddFlightDialog } from "@/components/admin/flights/add-flight-dialog"

// Sample flight data
const flights = [
  {
    id: "FLT-1001",
    origin: "Sydney, Australia",
    destination: "Manila, Philippines",
    departureDate: "2023-07-20",
    cutoffDate: "2023-07-18",
    status: "Scheduled",
    capacity: "80%",
    carrier: "Philippine Airlines",
  },
  {
    id: "FLT-1002",
    origin: "Melbourne, Australia",
    destination: "Manila, Philippines",
    departureDate: "2023-07-22",
    cutoffDate: "2023-07-20",
    status: "Scheduled",
    capacity: "65%",
    carrier: "Cebu Pacific",
  },
  {
    id: "FLT-1003",
    origin: "Brisbane, Australia",
    destination: "Manila, Philippines",
    departureDate: "2023-07-25",
    cutoffDate: "2023-07-23",
    status: "Scheduled",
    capacity: "45%",
    carrier: "Philippine Airlines",
  },
  {
    id: "FLT-1004",
    origin: "Sydney, Australia",
    destination: "Cebu, Philippines",
    departureDate: "2023-07-27",
    cutoffDate: "2023-07-25",
    status: "Scheduled",
    capacity: "30%",
    carrier: "Cebu Pacific",
  },
  {
    id: "FLT-1005",
    origin: "Perth, Australia",
    destination: "Manila, Philippines",
    departureDate: "2023-07-30",
    cutoffDate: "2023-07-28",
    status: "Scheduled",
    capacity: "20%",
    carrier: "Philippine Airlines",
  },
  {
    id: "FLT-1006",
    origin: "Sydney, Australia",
    destination: "Manila, Philippines",
    departureDate: "2023-08-02",
    cutoffDate: "2023-07-31",
    status: "Scheduled",
    capacity: "10%",
    carrier: "Cebu Pacific",
  },
  {
    id: "FLT-1007",
    origin: "Melbourne, Australia",
    destination: "Davao, Philippines",
    departureDate: "2023-08-05",
    cutoffDate: "2023-08-03",
    status: "Scheduled",
    capacity: "5%",
    carrier: "Philippine Airlines",
  },
]

export default function FlightsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [carrierFilter, setCarrierFilter] = useState("all")
  const [showAddFlightDialog, setShowAddFlightDialog] = useState(false)

  // Filter flights based on search term and carrier filter
  const filteredFlights = flights.filter((flight) => {
    const matchesSearch =
      flight.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCarrier = carrierFilter === "all" || flight.carrier.toLowerCase() === carrierFilter.toLowerCase()

    return matchesSearch && matchesCarrier
  })

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Get capacity color
  const getCapacityColor = (capacity: string) => {
    const capacityValue = Number.parseInt(capacity)
    if (capacityValue >= 80) return "text-red-500"
    if (capacityValue >= 50) return "text-yellow-500"
    return "text-green-500"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Flight & Cargo Scheduling</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={() => setShowAddFlightDialog(true)}>
            <Calendar className="mr-2 h-4 w-4" />
            Add Flight
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search flights..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={carrierFilter} onValueChange={setCarrierFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by carrier" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Carriers</SelectItem>
              <SelectItem value="philippine airlines">Philippine Airlines</SelectItem>
              <SelectItem value="cebu pacific">Cebu Pacific</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar View
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle>Flight Schedule</CardTitle>
          <CardDescription>Manage and track all scheduled flights and cargo shipments</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Departure Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Cut-off Date</TableHead>
                  <TableHead>Carrier</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFlights.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No flights found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredFlights.map((flight) => (
                    <TableRow key={flight.id}>
                      <TableCell className="font-medium">{flight.id}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span>{flight.origin}</span>
                          <span className="text-xs text-muted-foreground">to {flight.destination}</span>
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(flight.departureDate)}</TableCell>
                      <TableCell>{formatDate(flight.cutoffDate)}</TableCell>
                      <TableCell>{flight.carrier}</TableCell>
                      <TableCell>
                        <span className={getCapacityColor(flight.capacity)}>{flight.capacity}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {flight.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit schedule</DropdownMenuItem>
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Cancel flight</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

