"use client"

import { useState } from "react"
import { ArrowUpDown, Edit, Filter, MoreHorizontal, Package, Save, Search, Plus } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddPromotionDialog } from "@/components/admin/pricing/add-promotion-dialog"
import { AddRateDialog } from "@/components/admin/pricing/add-rate-dialog"

// Sample pricing data
const pricingData = [
  {
    id: "PRC-1001",
    weightRange: "Up to 5 kg",
    price: 55,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Standard",
  },
  {
    id: "PRC-1002",
    weightRange: "Up to 10 kg",
    price: 85,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Standard",
  },
  {
    id: "PRC-1003",
    weightRange: "Up to 15 kg",
    price: 105,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Standard",
  },
  {
    id: "PRC-1004",
    weightRange: "Up to 20 kg",
    price: 120,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Standard",
  },
  {
    id: "PRC-1005",
    weightRange: "Up to 30 kg",
    price: 150,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Standard",
  },
  {
    id: "PRC-1006",
    weightRange: "Over 30 kg",
    price: 5,
    currency: "AUD",
    status: "Active",
    lastUpdated: "2023-07-01",
    type: "Per kg",
  },
]

// Sample promotions data
const promotionsData = [
  {
    id: "PROMO-1001",
    name: "Summer Special",
    code: "SUMMER2023",
    discount: 10,
    discountType: "Percentage",
    startDate: "2023-07-01",
    endDate: "2023-08-31",
    status: "Active",
    usageLimit: 1000,
    usageCount: 245,
  },
  {
    id: "PROMO-1002",
    name: "New Customer",
    code: "WELCOME",
    discount: 15,
    discountType: "Percentage",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "Active",
    usageLimit: 500,
    usageCount: 320,
  },
  {
    id: "PROMO-1003",
    name: "Bulk Shipping",
    code: "BULK10",
    discount: 10,
    discountType: "Percentage",
    startDate: "2023-06-01",
    endDate: "2023-09-30",
    status: "Active",
    usageLimit: 200,
    usageCount: 87,
  },
  {
    id: "PROMO-1004",
    name: "Fixed Discount",
    code: "FLAT20",
    discount: 20,
    discountType: "Fixed Amount",
    startDate: "2023-07-15",
    endDate: "2023-08-15",
    status: "Scheduled",
    usageLimit: 300,
    usageCount: 0,
  },
  {
    id: "PROMO-1005",
    name: "Easter Special",
    code: "EASTER2023",
    discount: 15,
    discountType: "Percentage",
    startDate: "2023-04-01",
    endDate: "2023-04-15",
    status: "Expired",
    usageLimit: 500,
    usageCount: 423,
  },
]

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [showAddRateDialog, setShowAddRateDialog] = useState(false)
  const [showAddPromotionDialog, setShowAddPromotionDialog] = useState(false)
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null)
  const [editedPrice, setEditedPrice] = useState<number | null>(null)

  // Filter pricing data based on search term and status filter
  const filteredPricing = pricingData.filter((price) => {
    const matchesSearch =
      price.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      price.weightRange.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || price.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  // Filter promotions data based on search term and status filter
  const filteredPromotions = promotionsData.filter((promo) => {
    const matchesSearch =
      promo.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.code.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || promo.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  // Handle price edit
  const handleEditPrice = (id: string, currentPrice: number) => {
    setEditingPriceId(id)
    setEditedPrice(currentPrice)
  }

  // Handle price save
  const handleSavePrice = (id: string) => {
    // In a real app, you would save the updated price to the backend
    setEditingPriceId(null)
    setEditedPrice(null)
  }

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Inactive
          </Badge>
        )
      case "scheduled":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Scheduled
          </Badge>
        )
      case "expired":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Expired
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Pricing & Promotions</h1>
      </div>

      <Tabs defaultValue="pricing" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pricing">Shipping Rates</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
        </TabsList>

        <TabsContent value="pricing" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pricing..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button onClick={() => setShowAddRateDialog(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Rate
                </Button>
                <Button onClick={() => setShowAddPromotionDialog(true)}>
                  <Save className="mr-2 h-4 w-4" />
                  Add Promotion
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="p-4">
              <CardTitle>Shipping Rates</CardTitle>
              <CardDescription>Manage and update shipping rates for different weight ranges</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Weight Range</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPricing.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="h-24 text-center">
                          No pricing data found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPricing.map((price) => (
                        <TableRow key={price.id}>
                          <TableCell className="font-medium">{price.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Package className="h-4 w-4 text-muted-foreground" />
                              {price.weightRange}
                            </div>
                          </TableCell>
                          <TableCell>
                            {editingPriceId === price.id ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  type="number"
                                  value={editedPrice !== null ? editedPrice : price.price}
                                  onChange={(e) => setEditedPrice(Number.parseFloat(e.target.value))}
                                  className="w-20 h-8"
                                />
                                <Button size="sm" variant="ghost" onClick={() => handleSavePrice(price.id)}>
                                  <Save className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                {price.currency} {price.price.toFixed(2)}
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleEditPrice(price.id, price.price)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{price.type}</TableCell>
                          <TableCell>{getStatusBadge(price.status)}</TableCell>
                          <TableCell>{new Date(price.lastUpdated).toLocaleDateString()}</TableCell>
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
                                <DropdownMenuItem onClick={() => handleEditPrice(price.id, price.price)}>
                                  Edit price
                                </DropdownMenuItem>
                                <DropdownMenuItem>Change status</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search promotions..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
              <AddPromotionDialog />
            </div>
          </div>

          <Card>
            <CardHeader className="p-4">
              <CardTitle>Promotions</CardTitle>
              <CardDescription>Manage promotional discounts and special offers</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPromotions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="h-24 text-center">
                          No promotions found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPromotions.map((promo) => (
                        <TableRow key={promo.id}>
                          <TableCell className="font-medium">{promo.id}</TableCell>
                          <TableCell>{promo.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-50 font-mono">
                              {promo.code}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {promo.discountType === "Percentage"
                              ? `${promo.discount}%`
                              : `${promo.discount} ${promo.discountType === "Fixed Amount" ? "AUD" : ""}`}
                          </TableCell>
                          <TableCell>{getStatusBadge(promo.status)}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="text-xs">From: {new Date(promo.startDate).toLocaleDateString()}</span>
                              <span className="text-xs">To: {new Date(promo.endDate).toLocaleDateString()}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="text-xs">
                                {promo.usageCount} / {promo.usageLimit}
                              </span>
                              <div className="h-1.5 w-24 bg-gray-200 rounded-full mt-1">
                                <div
                                  className="h-1.5 bg-philippine-blue rounded-full"
                                  style={{ width: `${(promo.usageCount / promo.usageLimit) * 100}%` }}
                                ></div>
                              </div>
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
                                <DropdownMenuItem>Edit promotion</DropdownMenuItem>
                                <DropdownMenuItem>View usage</DropdownMenuItem>
                                {promo.status === "Active" ? (
                                  <DropdownMenuItem className="text-amber-600">Deactivate</DropdownMenuItem>
                                ) : promo.status === "Inactive" || promo.status === "Expired" ? (
                                  <DropdownMenuItem className="text-green-600">Activate</DropdownMenuItem>
                                ) : null}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

