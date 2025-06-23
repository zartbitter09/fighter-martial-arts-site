import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin } from "lucide-react"

export default function LivePage() {
  const liveEvents = [
    {
      id: 1,
      title: "UFC 301: Main Event",
      status: "LIVE",
      viewers: "2.3M",
      location: "Las Vegas, NV",
      time: "Round 3 - 2:45",
      fighters: ["Jon Jones", "Stipe Miocic"],
    },
    {
      id: 2,
      title: "Bellator 302: Co-Main",
      status: "UPCOMING",
      viewers: "850K",
      location: "London, UK",
      time: "Starts in 45 min",
      fighters: ["Michael Page", "Douglas Lima"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Live Events
          </h1>
          <p className="text-gray-600">Watch live martial arts events and get real-time updates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {liveEvents.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant={event.status === "LIVE" ? "destructive" : "secondary"}
                    className={event.status === "LIVE" ? "bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" : ""}
                  >
                    {event.status}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.viewers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.fighters.join(" vs ")}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-indigo-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    {event.status === "LIVE" ? "Watch Live" : "Set Reminder"}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
