"use client"

import { useState } from "react"
import { ArrowUpDown, Clock, Download, Filter, MoreHorizontal, Search, MessageSquarePlus } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewTicketDialog } from "@/components/admin/support/new-ticket-dialog"

// Sample support tickets data
const tickets = [
  {
    id: "TKT-1001",
    customer: "John Smith",
    email: "john.smith@example.com",
    subject: "Shipment Delay",
    message: "My shipment (SHP-1001) was supposed to arrive yesterday but it still shows as in transit.",
    status: "Open",
    priority: "High",
    category: "Shipment Issue",
    createdAt: "2023-07-15T10:30:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1002",
    customer: "Maria Santos",
    email: "maria.santos@example.com",
    subject: "Wrong Address",
    message: "I entered the wrong address for my shipment (SHP-1002). Can you please update it?",
    status: "In Progress",
    priority: "Medium",
    category: "Address Change",
    createdAt: "2023-07-14T15:45:00",
    assignedTo: "David Wilson",
  },
  {
    id: "TKT-1003",
    customer: "David Johnson",
    email: "david.johnson@example.com",
    subject: "Damaged Package",
    message: "My package (SHP-1003) arrived damaged. I would like to file a claim.",
    status: "Resolved",
    priority: "High",
    category: "Damage Claim",
    createdAt: "2023-07-12T09:15:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1004",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    subject: "Billing Question",
    message: "I was charged more than the quoted price for my shipment (SHP-1004). Can you explain why?",
    status: "Open",
    priority: "Medium",
    category: "Billing",
    createdAt: "2023-07-15T11:20:00",
    assignedTo: "Unassigned",
  },
  {
    id: "TKT-1005",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    subject: "Missing Items",
    message: "Some items are missing from my shipment (SHP-1005). I need help locating them.",
    status: "In Progress",
    priority: "High",
    category: "Missing Items",
    createdAt: "2023-07-13T14:30:00",
    assignedTo: "David Wilson",
  },
  {
    id: "TKT-1006",
    customer: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    subject: "Tracking Not Working",
    message: "The tracking link for my shipment (SHP-1006) is not working. Can you provide an update?",
    status: "Resolved",
    priority: "Low",
    category: "Tracking Issue",
    createdAt: "2023-07-10T08:45:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1007",
    customer: "Robert Garcia",
    email: "robert.garcia@example.com",
    subject: "Refund Request",
    message: "I would like to request a refund for my shipment (SHP-1007) as it was significantly delayed.",
    status: "Open",
    priority: "Medium",
    category: "Refund",
    createdAt: "2023-07-14T16:30:00",
    assignedTo: "Unassigned",
  },
]

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [showNewTicketDialog, setShowNewTicketDialog] = useState(false)

  // Filter tickets based on search term, status filter, priority filter, and active tab
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || ticket.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesPriority = priorityFilter === "all" || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "open" && ticket.status === "Open") ||
      (activeTab === "in-progress" && ticket.status === "In Progress") ||
      (activeTab === "resolved" && ticket.status === "Resolved")

    return matchesSearch && matchesStatus && matchesPriority && matchesTab
  })

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Open
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            In Progress
          </Badge>
        )
      case "Resolved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get priority badge color
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Medium
          </Badge>
        )
      case "Low":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  // Format date to relative time
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
      return "Just now"
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
    } else {
      const days = Math.floor(diffInSeconds / 86400)
      return `${days} ${days === 1 ? "day" : "days"} ago`
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Customer Support</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={() => setShowNewTicketDialog(true)}>
            <MessageSquarePlus className="mr-2 h-4 w-4" />
            New Ticket
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Tickets</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tickets..."
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
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <SelectValue placeholder="Filter by priority" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Manage and respond to customer inquiries</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Priority
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="h-24 text-center">
                          No tickets found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredTickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={ticket.customer} />
                                <AvatarFallback>
                                  {ticket.customer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{ticket.customer}</p>
                                <p className="text-xs text-muted-foreground">{ticket.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <p className="font-medium">{ticket.subject}</p>
                              <p className="truncate text-xs text-muted-foreground max-w-[200px]">{ticket.message}</p>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                          <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                          <TableCell>{formatRelativeTime(ticket.createdAt)}</TableCell>
                          <TableCell>
                            {ticket.assignedTo === "Unassigned" ? (
                              <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                                Unassigned
                              </Badge>
                            ) : (
                              ticket.assignedTo
                            )}
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
                                <DropdownMenuItem>Respond</DropdownMenuItem>
                                <DropdownMenuItem>Assign ticket</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {ticket.status !== "Resolved" ? (
                                  <DropdownMenuItem className="text-green-600">Mark as resolved</DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem className="text-yellow-600">Reopen ticket</DropdownMenuItem>
                                )}
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

        <TabsContent value="open" className="space-y-4">
          {/* Same table structure as above, filtered for open tickets */}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {/* Same table structure as above, filtered for in-progress tickets */}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {/* Same table structure as above, filtered for resolved tickets */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

