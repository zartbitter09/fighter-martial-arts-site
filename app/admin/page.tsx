"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  FileText,
  Calendar,
  Trophy,
  Settings,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Upload,
  Download,
} from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - in real app this would come from your database
  const stats = {
    totalUsers: 15420,
    totalArticles: 1247,
    totalEvents: 89,
    totalFighters: 2156,
    monthlyViews: 2840000,
    activeUsers: 8934,
  }

  const recentArticles = [
    {
      id: 1,
      title: "UFC 301: Jones vs Miocic Preview",
      author: "Admin",
      status: "published",
      views: 15420,
      date: "2025-06-15",
    },
    { id: 2, title: "Boxing Championship Results", author: "Editor", status: "draft", views: 0, date: "2025-06-14" },
    { id: 3, title: "Muay Thai Training Guide", author: "Admin", status: "published", views: 8934, date: "2025-06-13" },
  ]

  const recentUsers = [
    { id: 1, name: "Max Mustermann", email: "max@example.com", role: "user", joined: "2025-06-15", status: "active" },
    { id: 2, name: "Anna Schmidt", email: "anna@example.com", role: "editor", joined: "2025-06-14", status: "active" },
    { id: 3, name: "Tom Weber", email: "tom@example.com", role: "user", joined: "2025-06-13", status: "inactive" },
  ]

  const upcomingEvents = [
    { id: 1, title: "UFC 301", date: "2025-07-15", location: "Las Vegas", status: "confirmed", tickets: 15000 },
    { id: 2, title: "Boxing Championship", date: "2025-07-20", location: "London", status: "pending", tickets: 8000 },
    {
      id: 3,
      title: "Muay Thai Tournament",
      date: "2025-07-25",
      location: "Bangkok",
      status: "confirmed",
      tickets: 5000,
    },
  ]

  const fighters = [
    { id: 1, name: "Jon Jones", sport: "MMA", rank: 1, record: "27-1-0", status: "active" },
    { id: 2, name: "Canelo Alvarez", sport: "Boxing", rank: 1, record: "60-2-2", status: "active" },
    { id: 3, name: "Rodtang Jitmuangnon", sport: "Muay Thai", rank: 1, record: "270-42-10", status: "active" },
  ]

  const adminTabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "users", label: "Users", icon: Users },
    { id: "events", label: "Events", icon: Calendar },
    { id: "fighters", label: "Fighters", icon: Trophy },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Articles</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalArticles.toLocaleString()}</p>
              </div>
              <FileText className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Views</p>
                <p className="text-2xl font-bold text-gray-900">{(stats.monthlyViews / 1000000).toFixed(1)}M</p>
              </div>
              <Eye className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEvents}</p>
              </div>
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Fighters</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalFighters.toLocaleString()}</p>
              </div>
              <Trophy className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.slice(0, 5).map((article) => (
                <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{article.title}</h4>
                    <p className="text-sm text-gray-600">
                      by {article.author} • {article.date}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={article.status === "published" ? "default" : "secondary"}>{article.status}</Badge>
                    <span className="text-sm text-gray-500">{article.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{user.role}</Badge>
                    <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderArticles = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Article Management</h2>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          New Article
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{article.title}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{article.author}</td>
                    <td className="px-6 py-4">
                      <Badge variant={article.status === "published" ? "default" : "secondary"}>{article.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{article.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-600">{article.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline">{user.role}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Event Management</h2>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tickets</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{event.title}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{event.date}</td>
                    <td className="px-6 py-4 text-gray-600">{event.location}</td>
                    <td className="px-6 py-4">
                      <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>{event.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{event.tickets.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFighters = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Fighter Management</h2>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Fighter
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sport</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Record</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fighters.map((fighter) => (
                  <tr key={fighter.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{fighter.name}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{fighter.sport}</td>
                    <td className="px-6 py-4">
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">#{fighter.rank}</Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{fighter.record}</td>
                    <td className="px-6 py-4">
                      <Badge variant={fighter.status === "active" ? "default" : "secondary"}>{fighter.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Site Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
              <Input defaultValue="FIGHTER - Martial Arts Hub" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
              <Textarea defaultValue="Your ultimate source for martial arts news, rankings, and analysis." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <Input defaultValue="admin@fighter.com" />
            </div>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Upload Size (MB)</label>
              <Input defaultValue="10" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Allowed File Types</label>
              <Input defaultValue="jpg, jpeg, png, gif, mp4, pdf" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CDN URL</label>
              <Input defaultValue="https://cdn.fighter.com" />
            </div>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Test Upload
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Login Attempts Limit</span>
              <Input className="w-20" defaultValue="5" type="number" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Session Timeout (minutes)</span>
              <Input className="w-20" defaultValue="60" type="number" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backup & Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Auto Backup</span>
              <Button variant="outline" size="sm">
                Daily
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Last Backup</span>
              <span className="text-sm text-gray-600">2025-06-15 03:00</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Create Backup
              </Button>
              <Button variant="outline" className="flex-1">
                <Upload className="w-4 h-4 mr-2" />
                Restore
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "articles":
        return renderArticles()
      case "users":
        return renderUsers()
      case "events":
        return renderEvents()
      case "fighters":
        return renderFighters()
      case "settings":
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage your martial arts platform</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <Card className="sticky top-4">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {adminTabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
