"use client"

import { useState } from "react"
import { BarChart, Calendar, Download, FileText, Filter, LineChart, PieChart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for revenue chart
const revenueData = [
  { month: "Jan", revenue: 12000, expenses: 8000, profit: 4000 },
  { month: "Feb", revenue: 15000, expenses: 9000, profit: 6000 },
  { month: "Mar", revenue: 18000, expenses: 10000, profit: 8000 },
  { month: "Apr", revenue: 22000, expenses: 12000, profit: 10000 },
  { month: "May", revenue: 25000, expenses: 13000, profit: 12000 },
  { month: "Jun", revenue: 28000, expenses: 14000, profit: 14000 },
  { month: "Jul", revenue: 31000, expenses: 15000, profit: 16000 },
]

// Sample data for shipment volume chart
const shipmentVolumeData = [
  { month: "Jan", sydney: 120, melbourne: 80, brisbane: 60, perth: 40 },
  { month: "Feb", sydney: 150, melbourne: 90, brisbane: 70, perth: 50 },
  { month: "Mar", sydney: 180, melbourne: 100, brisbane: 80, perth: 60 },
  { month: "Apr", sydney: 220, melbourne: 120, brisbane: 90, perth: 70 },
  { month: "May", sydney: 250, melbourne: 130, brisbane: 100, perth: 80 },
  { month: "Jun", sydney: 280, melbourne: 140, brisbane: 110, perth: 90 },
  { month: "Jul", sydney: 310, melbourne: 150, brisbane: 120, perth: 100 },
]

// Sample data for customer acquisition chart
const customerAcquisitionData = [
  { month: "Jan", newCustomers: 50, returningCustomers: 120 },
  { month: "Feb", newCustomers: 60, returningCustomers: 140 },
  { month: "Mar", newCustomers: 70, returningCustomers: 160 },
  { month: "Apr", newCustomers: 80, returningCustomers: 180 },
  { month: "May", newCustomers: 90, returningCustomers: 200 },
  { month: "Jun", newCustomers: 100, returningCustomers: 220 },
  { month: "Jul", newCustomers: 110, returningCustomers: 240 },
]

// Sample data for shipment status distribution
const shipmentStatusData = [
  { name: "Delivered", value: 65, color: "#4CAF50" },
  { name: "In Transit", value: 20, color: "#2196F3" },
  { name: "Pending", value: 10, color: "#FFC107" },
  { name: "Delayed", value: 5, color: "#F44336" },
]

// Sample data for destination distribution
const destinationData = [
  { name: "Manila", value: 45, color: "#0033A0" },
  { name: "Cebu", value: 25, color: "#FFCD00" },
  { name: "Davao", value: 15, color: "#00843D" },
  { name: "Iloilo", value: 10, color: "#FF9800" },
  { name: "Others", value: 5, color: "#9E9E9E" },
]

export default function ReportsPage() {
  const [timeframe, setTimeframe] = useState("monthly")
  const [year, setYear] = useState("2023")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[150px]">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <SelectValue placeholder="Timeframe" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[120px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Year" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$151,000</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+12.5%</span> from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,510</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+8.2%</span> from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,450</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+14.3%</span> from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Shipment Value</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$100.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+5.7%</span> from last year
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue, expenses, and profit</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--primary))",
                    },
                    expenses: {
                      label: "Expenses",
                      color: "hsl(var(--destructive))",
                    },
                    profit: {
                      label: "Profit",
                      color: "hsl(var(--secondary))",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        fill="var(--color-revenue)"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="expenses"
                        stroke="var(--color-expenses)"
                        fill="var(--color-expenses)"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="profit"
                        stroke="var(--color-profit)"
                        fill="var(--color-profit)"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Shipment Volume by Location</CardTitle>
                <CardDescription>Monthly shipment volume by origin city</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    sydney: {
                      label: "Sydney",
                      color: "#0033A0",
                    },
                    melbourne: {
                      label: "Melbourne",
                      color: "#FFCD00",
                    },
                    brisbane: {
                      label: "Brisbane",
                      color: "#00843D",
                    },
                    perth: {
                      label: "Perth",
                      color: "#FF9800",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={shipmentVolumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="sydney" stroke="var(--color-sydney)" strokeWidth={2} />
                      <Line type="monotone" dataKey="melbourne" stroke="var(--color-melbourne)" strokeWidth={2} />
                      <Line type="monotone" dataKey="brisbane" stroke="var(--color-brisbane)" strokeWidth={2} />
                      <Line type="monotone" dataKey="perth" stroke="var(--color-perth)" strokeWidth={2} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle>Shipment Status Distribution</CardTitle>
                <CardDescription>Current status of all shipments</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={shipmentStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {shipmentStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle>Destination Distribution</CardTitle>
                <CardDescription>Top destinations in the Philippines</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={destinationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {destinationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New vs. returning customers</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    newCustomers: {
                      label: "New Customers",
                      color: "#0033A0",
                    },
                    returningCustomers: {
                      label: "Returning Customers",
                      color: "#FFCD00",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={customerAcquisitionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="newCustomers"
                        stroke="var(--color-newCustomers)"
                        fill="var(--color-newCustomers)"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="returningCustomers"
                        stroke="var(--color-returningCustomers)"
                        fill="var(--color-returningCustomers)"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>View detailed financial reports and statements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Revenue Report</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">$151,000</p>
                        <p className="text-xs text-muted-foreground">Total Revenue YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Expense Report</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">$81,000</p>
                        <p className="text-xs text-muted-foreground">Total Expenses YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Profit & Loss Statement</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">$70,000</p>
                        <p className="text-xs text-muted-foreground">Net Profit YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Tax Report</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">$15,100</p>
                        <p className="text-xs text-muted-foreground">Total Tax YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Financial Summary</CardTitle>
                    <CardDescription>Revenue, expenses, and profit by month</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ChartContainer
                      config={{
                        revenue: {
                          label: "Revenue",
                          color: "hsl(var(--primary))",
                        },
                        expenses: {
                          label: "Expenses",
                          color: "hsl(var(--destructive))",
                        },
                        profit: {
                          label: "Profit",
                          color: "hsl(var(--secondary))",
                        },
                      }}
                      className="h-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="var(--color-revenue)"
                            fill="var(--color-revenue)"
                            fillOpacity={0.2}
                          />
                          <Area
                            type="monotone"
                            dataKey="expenses"
                            stroke="var(--color-expenses)"
                            fill="var(--color-expenses)"
                            fillOpacity={0.2}
                          />
                          <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="var(--color-profit)"
                            fill="var(--color-profit)"
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipment Reports</CardTitle>
              <CardDescription>View detailed shipment analytics and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">1,510</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">On-Time Delivery Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">94.5%</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Shipment Weight</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">12.5 kg</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Shipment Volume by Location</CardTitle>
                    <CardDescription>Monthly shipment volume by origin city</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ChartContainer
                      config={{
                        sydney: {
                          label: "Sydney",
                          color: "#0033A0",
                        },
                        melbourne: {
                          label: "Melbourne",
                          color: "#FFCD00",
                        },
                        brisbane: {
                          label: "Brisbane",
                          color: "#00843D",
                        },
                        perth: {
                          label: "Perth",
                          color: "#FF9800",
                        },
                      }}
                      className="h-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={shipmentVolumeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line type="monotone" dataKey="sydney" stroke="var(--color-sydney)" strokeWidth={2} />
                          <Line type="monotone" dataKey="melbourne" stroke="var(--color-melbourne)" strokeWidth={2} />
                          <Line type="monotone" dataKey="brisbane" stroke="var(--color-brisbane)" strokeWidth={2} />
                          <Line type="monotone" dataKey="perth" stroke="var(--color-perth)" strokeWidth={2} />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipment Status Distribution</CardTitle>
                      <CardDescription>Current status of all shipments</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={shipmentStatusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {shipmentStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Destination Distribution</CardTitle>
                      <CardDescription>Top destinations in the Philippines</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={destinationData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {destinationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reports</CardTitle>
              <CardDescription>View detailed customer analytics and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">2,450</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">560</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Customer Retention Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">85.3%</p>
                        <p className="text-xs text-muted-foreground">YTD</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Acquisition</CardTitle>
                    <CardDescription>New vs. returning customers</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ChartContainer
                      config={{
                        newCustomers: {
                          label: "New Customers",
                          color: "#0033A0",
                        },
                        returningCustomers: {
                          label: "Returning Customers",
                          color: "#FFCD00",
                        },
                      }}
                      className="h-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={customerAcquisitionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="newCustomers"
                            stroke="var(--color-newCustomers)"
                            fill="var(--color-newCustomers)"
                            fillOpacity={0.2}
                          />
                          <Area
                            type="monotone"
                            dataKey="returningCustomers"
                            stroke="var(--color-returningCustomers)"
                            fill="var(--color-returningCustomers)"
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Location Distribution</CardTitle>
                      <CardDescription>Distribution of customers by location</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={[
                              { name: "Sydney", value: 40, color: "#0033A0" },
                              { name: "Melbourne", value: 30, color: "#FFCD00" },
                              { name: "Brisbane", value: 15, color: "#00843D" },
                              { name: "Perth", value: 10, color: "#FF9800" },
                              { name: "Others", value: 5, color: "#9E9E9E" },
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {[
                              { name: "Sydney", value: 40, color: "#0033A0" },
                              { name: "Melbourne", value: 30, color: "#FFCD00" },
                              { name: "Brisbane", value: 15, color: "#00843D" },
                              { name: "Perth", value: 10, color: "#FF9800" },
                              { name: "Others", value: 5, color: "#9E9E9E" },
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Satisfaction</CardTitle>
                      <CardDescription>Customer satisfaction ratings</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={[
                              { name: "Very Satisfied", value: 60, color: "#4CAF50" },
                              { name: "Satisfied", value: 25, color: "#8BC34A" },
                              { name: "Neutral", value: 10, color: "#FFC107" },
                              { name: "Dissatisfied", value: 4, color: "#FF9800" },
                              { name: "Very Dissatisfied", value: 1, color: "#F44336" },
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {[
                              { name: "Very Satisfied", value: 60, color: "#4CAF50" },
                              { name: "Satisfied", value: 25, color: "#8BC34A" },
                              { name: "Neutral", value: 10, color: "#FFC107" },
                              { name: "Dissatisfied", value: 4, color: "#FF9800" },
                              { name: "Very Dissatisfied", value: 1, color: "#F44336" },
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

