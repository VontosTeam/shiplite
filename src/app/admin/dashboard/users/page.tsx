"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Search, User } from "lucide-react"
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
import { AddUserDialog } from "@/components/admin/users/add-user-dialog"

// Sample user data
const users = [
  {
    id: "USR-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    location: "Sydney, Australia",
    status: "Active",
    role: "Customer",
    lastActive: "2023-07-15T10:30:00",
    shipments: 12,
  },
  {
    id: "USR-1002",
    name: "Maria Santos",
    email: "maria.santos@example.com",
    location: "Melbourne, Australia",
    status: "Active",
    role: "Customer",
    lastActive: "2023-07-14T15:45:00",
    shipments: 8,
  },
  {
    id: "USR-1003",
    name: "David Johnson",
    email: "david.johnson@example.com",
    location: "Brisbane, Australia",
    status: "Inactive",
    role: "Customer",
    lastActive: "2023-06-30T09:15:00",
    shipments: 5,
  },
  {
    id: "USR-1004",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    location: "Perth, Australia",
    status: "Active",
    role: "Customer",
    lastActive: "2023-07-15T11:20:00",
    shipments: 3,
  },
  {
    id: "USR-1005",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    location: "Sydney, Australia",
    status: "Suspended",
    role: "Customer",
    lastActive: "2023-07-10T14:30:00",
    shipments: 7,
  },
  {
    id: "USR-1006",
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    location: "Adelaide, Australia",
    status: "Active",
    role: "Staff",
    lastActive: "2023-07-15T08:45:00",
    shipments: 0,
  },
  {
    id: "USR-1007",
    name: "Robert Garcia",
    email: "robert.garcia@example.com",
    location: "Melbourne, Australia",
    status: "Active",
    role: "Customer",
    lastActive: "2023-07-14T16:30:00",
    shipments: 4,
  },
  {
    id: "USR-1008",
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    location: "Sydney, Australia",
    status: "Active",
    role: "Customer",
    lastActive: "2023-07-15T09:10:00",
    shipments: 9,
  },
  {
    id: "USR-1009",
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    location: "Brisbane, Australia",
    status: "Inactive",
    role: "Customer",
    lastActive: "2023-07-05T13:20:00",
    shipments: 2,
  },
  {
    id: "USR-1010",
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    location: "Sydney, Australia",
    status: "Active",
    role: "Admin",
    lastActive: "2023-07-15T10:00:00",
    shipments: 0,
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Filter users based on search term, status filter, and role filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesRole
  })

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
      case "suspended":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Suspended
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
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
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={() => setShowAddDialog(true)}>
            <User className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
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
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <SelectValue placeholder="Filter by role" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
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
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage and track all users in the system</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Status
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Role
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Shipments</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{user.location}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            user.role === "Admin"
                              ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                              : user.role === "Staff"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100",
                          )}
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatRelativeTime(user.lastActive)}</TableCell>
                      <TableCell>{user.shipments}</TableCell>
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
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuItem>View shipments</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {user.status === "Active" ? (
                              <DropdownMenuItem className="text-amber-600">Suspend account</DropdownMenuItem>
                            ) : user.status === "Suspended" ? (
                              <DropdownMenuItem className="text-green-600">Reactivate account</DropdownMenuItem>
                            ) : null}
                            <DropdownMenuItem className="text-red-600">Delete account</DropdownMenuItem>
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

