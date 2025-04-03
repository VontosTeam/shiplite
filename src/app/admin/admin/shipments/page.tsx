"use client"

import { useState } from "react"
import {
  ArrowUpDown,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  Package,
  Search,
  Truck,
} from "lucide-react"
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
import { NewShipmentDialog } from "@/components/admin/shipments/new-shipment-dialog"

// Sample shipment data
const shipments = [
  {
    id: "SHP-1001",
    customer: "John Smith",
    origin: "Sydney, Australia",
    destination: "Manila, Philippines",
    status: "Pending",
    date: "2023-07-15",
    weight: "12.5 kg",
  },
  {
    id: "SHP-1002",
    customer: "Maria Santos",
    origin: "Melbourne, Australia",
    destination: "Cebu, Philippines",
    status: "In Transit",
    date: "2023-07-14",
    weight: "8.2 kg",
  },
  {
    id: "SHP-1003",
    customer: "David Johnson",
    origin: "Brisbane, Australia",
    destination: "Davao, Philippines",
    status: "Delivered",
    date: "2023-07-12",
    weight: "15.7 kg",
  },
  {
    id: "SHP-1004",
    customer: "Sarah Williams",
    origin: "Perth, Australia",
    destination: "Manila, Philippines",
    status: "Pending",
    date: "2023-07-15",
    weight: "5.3 kg",
  },
  {
    id: "SHP-1005",
    customer: "Michael Brown",
    origin: "Sydney, Australia",
    destination: "Baguio, Philippines",
    status: "In Transit",
    date: "2023-07-13",
    weight: "10.1 kg",
  },
  {
    id: "SHP-1006",
    customer: "Jennifer Lee",
    origin: "Adelaide, Australia",
    destination: "Manila, Philippines",
    status: "Delivered",
    date: "2023-07-10",
    weight: "7.8 kg",
  },
  {
    id: "SHP-1007",
    customer: "Robert Garcia",
    origin: "Melbourne, Australia",
    destination: "Iloilo, Philippines",
    status: "Delayed",
    date: "2023-07-11",
    weight: "9.4 kg",
  },
  {
    id: "SHP-1008",
    customer: "Emily Wilson",
    origin: "Sydney, Australia",
    destination: "Manila, Philippines",
    status: "In Transit",
    date: "2023-07-14",
    weight: "11.2 kg",
  },
  {
    id: "SHP-1009",
    customer: "Daniel Martinez",
    origin: "Brisbane, Australia",
    destination: "Cebu, Philippines",
    status: "Pending",
    date: "2023-07-16",
    weight: "6.5 kg",
  },
  {
    id: "SHP-1010",
    customer: "Sophia Anderson",
    origin: "Sydney, Australia",
    destination: "Manila, Philippines",
    status: "Delivered",
    date: "2023-07-09",
    weight: "14.3 kg",
  },
]

export default function ShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter shipments based on search term and status filter
  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || shipment.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        )
      case "in transit":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            In Transit
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Delivered
          </Badge>
        )
      case "delayed":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Delayed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "in transit":
        return <Truck className="h-4 w-4 text-blue-500" />
      case "delivered":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "delayed":
        return <Clock className="h-4 w-4 text-red-500" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Shipment Management</h1>
        <NewShipmentDialog />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search shipments..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in transit">In Transit</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle>Shipments</CardTitle>
          <CardDescription>Manage and track all shipments in the system</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Status
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredShipments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No shipments found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>{shipment.customer}</TableCell>
                      <TableCell>{shipment.origin}</TableCell>
                      <TableCell>{shipment.destination}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(shipment.status)}
                          {getStatusBadge(shipment.status)}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(shipment.date).toLocaleDateString()}</TableCell>
                      <TableCell>{shipment.weight}</TableCell>
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
                            <DropdownMenuItem>Edit shipment</DropdownMenuItem>
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Cancel shipment</DropdownMenuItem>
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

