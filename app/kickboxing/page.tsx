import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, Users } from "lucide-react"

export default function KickboxingPage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "Glory 95",
      date: "2025-07-18",
      mainEvent: "Rico Verhoeven vs Badr Hari",
      location: "Amsterdam, Netherlands",
      status: "upcoming",
    },
    {
      id: 2,
      event: "ONE Friday Fights",
      date: "2025-07-25",
      mainEvent: "Superlek vs Takeru",
      location: "Bangkok, Thailand",
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "Rico Verhoeven", division: "Heavyweight", org: "Glory", record: "58-10-1" },
    { name: "Superlek Kiatmoo9", division: "Flyweight", org: "ONE", record: "168-34-4" },
    { name: "Chingiz Allazov", division: "Featherweight", org: "Glory", record: "57-6-0" },
    { name: "Tyjani Beztati", division: "Lightweight", org: "Glory", record: "27-6-0" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Kickboxing
          </h1>
          <p className="text-gray-600 text-lg">The art of eight limbs meets Western boxing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-90">Major Organizations</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-600">Events This Month</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">623</div>
              <div className="text-sm text-gray-600">Active Fighters</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">3.4M</div>
              <div className="text-sm text-gray-600">Global Fans</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{event.event}</h3>
                        <p className="text-indigo-600 font-medium">{event.mainEvent}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">TITLE FIGHT</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Champions</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {champions.map((champion, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index !== champions.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">{champion.name}</div>
                      <div className="text-sm text-indigo-600">{champion.division}</div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{champion.org}</span>
                        <span className="text-gray-500">{champion.record}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
