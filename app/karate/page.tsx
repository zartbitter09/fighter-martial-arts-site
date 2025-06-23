import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Users, Medal } from "lucide-react"

export default function KaratePage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "World Karate Championships",
      date: "2025-08-10",
      location: "Tokyo, Japan",
      categories: ["Kata", "Kumite"],
      status: "upcoming",
    },
    {
      id: 2,
      event: "European Karate Championships",
      date: "2025-09-15",
      location: "Paris, France",
      categories: ["Youth", "Senior"],
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "Ryo Kiyuna", discipline: "Kata", country: "Japan", achievements: "3x World Champion" },
    { name: "Sandra Sanchez", discipline: "Kata", country: "Spain", achievements: "Olympic Gold 2021" },
    { name: "Rafael Aghayev", discipline: "Kumite -75kg", country: "Azerbaijan", achievements: "5x World Champion" },
    { name: "Alisa Buchinger", discipline: "Kumite -68kg", country: "Austria", achievements: "World Champion 2023" },
  ]

  const styles = [
    { name: "Shotokan", origin: "Japan", characteristics: "Linear movements, deep stances" },
    { name: "Kyokushin", origin: "Japan", characteristics: "Full contact, conditioning" },
    { name: "Wado-Ryu", origin: "Japan", characteristics: "Soft movements, evasion" },
    { name: "Goju-Ryu", origin: "Okinawa", characteristics: "Hard and soft techniques" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Karate
          </h1>
          <p className="text-gray-600 text-lg">The way of the empty hand - Traditional martial art from Okinawa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm opacity-90">Major Styles</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Medal className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Olympic Disciplines</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">100M+</div>
              <div className="text-sm text-gray-600">Practitioners Worldwide</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">195</div>
              <div className="text-sm text-gray-600">WKF Member Countries</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Championships</h2>
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
                        <p className="text-indigo-600 font-medium">{event.location}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">CHAMPIONSHIP</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{event.date}</span>
                      <div className="flex space-x-2">
                        {event.categories.map((cat, idx) => (
                          <Badge key={idx} variant="outline" className="border-indigo-200 text-indigo-700 text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">World Champions</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {champions.map((champion, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index !== champions.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">{champion.name}</div>
                      <div className="text-sm text-indigo-600">{champion.discipline}</div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{champion.country}</span>
                        <span className="text-gray-500">{champion.achievements}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Karate Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{style.name}</h3>
                  <p className="text-indigo-600 text-sm mb-3">Origin: {style.origin}</p>
                  <p className="text-gray-600 text-sm">{style.characteristics}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
