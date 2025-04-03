"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { ArrowUpDown, Download, Filter, MapPin, MoreHorizontal, Search, Store } from "lucide-react"
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
import { AddStoreDialog } from "@/components/admin/stores/add-store-dialog"

// Sample store data
const stores = [
  {
    id: "STR-1001",
    name: "Sydney Central Store",
    address: "123 George St, Sydney, NSW 2000",
    phone: "+61 2 1234 5678",
    status: "Active",
    type: "Drop-off Point",
    services: ["Package Drop-off", "Packaging Assistance"],
    openingHours: "Mon-Fri: 9am-5pm, Sat: 10am-2pm",
  },
  {
    id: "STR-1002",
    name: "Melbourne City Hub",
    address: "456 Collins St, Melbourne, VIC 3000",
    phone: "+61 3 2345 6789",
    status: "Active",
    type: "Partner Store",
    services: ["Package Drop-off", "Packaging Assistance", "Remittance"],
    openingHours: "Mon-Sat: 9am-6pm",
  },
  {
    id: "STR-1003",
    name: "Brisbane ShipLite Center",
    address: "789 Queen St, Brisbane, QLD 4000",
    phone: "+61 7 3456 7890",
    status: "Active",
    type: "Drop-off Point",
    services: ["Package Drop-off"],
    openingHours: "Mon-Fri: 8:30am-5:30pm",
  },
  {
    id: "STR-1004",
    name: "Perth Shipping Hub",
    address: "101 Murray St, Perth, WA 6000",
    phone: "+61 8 4567 8901",
    status: "Inactive",
    type: "Partner Store",
    services: ["Package Drop-off", "Packaging Assistance", "Remittance"],
    openingHours: "Mon-Sat: 9am-5pm",
  },
  {
    id: "STR-1005",
    name: "Adelaide Central",
    address: "202 North Terrace, Adelaide, SA 5000",
    phone: "+61 8 5678 9012",
    status: "Active",
    type: "Drop-off Point",
    services: ["Package Drop-off"],
    openingHours: "Mon-Fri: 9am-5pm",
  },
  {
    id: "STR-1006",
    name: "Canberra ShipLite",
    address: "303 Northbourne Ave, Canberra, ACT 2601",
    phone: "+61 2 6789 0123",
    status: "Active",
    type: "Partner Store",
    services: ["Package Drop-off", "Packaging Assistance", "Remittance"],
    openingHours: "Mon-Fri: 9am-5:30pm, Sat: 10am-2pm",
  },
  {
    id: "STR-1007",
    name: "Hobart Shipping Center",
    address: "404 Elizabeth St, Hobart, TAS 7000",
    phone: "+61 3 7890 1234",
    status: "Active",
    type: "Drop-off Point",
    services: ["Package Drop-off"],
    openingHours: "Mon-Fri: 9am-5pm",
  },
  {
    id: "STR-1008",
    name: "Darwin ShipLite",
    address: "505 Mitchell St, Darwin, NT 0800",
    phone: "+61 8 8901 2345",
    status: "Inactive",
    type: "Partner Store",
    services: ["Package Drop-off", "Packaging Assistance"],
    openingHours: "Mon-Fri: 8am-4pm",
  },
]

export default function StoresPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [showAddStoreDialog, setShowAddStoreDialog] = useState(false)

  // Filter stores based on search term, status filter, and type filter
  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || store.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesType = typeFilter === "all" || store.type.toLowerCase() === typeFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Store Partners & Drop-Off Locations</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={() => setShowAddStoreDialog(true)}>
            <Store className="mr-2 h-4 w-4" />
            Add Store
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search stores..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <SelectValue placeholder="Filter by type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="drop-off point">Drop-off Point</SelectItem>
              <SelectItem value="partner store">Partner Store</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <MapPin className="mr-2 h-4 w-4" />
            Map View
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle>Store Partners</CardTitle>
          <CardDescription>Manage and track all store partners and drop-off locations</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Status
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStores.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No stores found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredStores.map((store) => (
                    <TableRow key={store.id}>
                      <TableCell className="font-medium">{store.id}</TableCell>
                      <TableCell>{store.name}</TableCell>
                      <TableCell>
                        <div className="flex items-start gap-1">
                          <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-muted-foreground" />
                          <span className="text-sm">{store.address}</span>
                        </div>
                      </TableCell>
                      <TableCell>{store.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            store.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100",
                          )}
                        >
                          {store.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{store.type}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {store.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-50">
                              {service}
                            </Badge>
                          ))}
                        </div>
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
                            <DropdownMenuItem>Edit store</DropdownMenuItem>
                            <DropdownMenuItem>Update services</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {store.status === "Active" ? (
                              <DropdownMenuItem className="text-amber-600">Deactivate store</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-green-600">Activate store</DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">Remove store</DropdownMenuItem>
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

