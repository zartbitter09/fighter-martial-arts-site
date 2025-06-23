import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, Users } from "lucide-react"

export default function BJJPage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "IBJJF World Championship",
      date: "2025-08-25",
      location: "Long Beach, CA",
      divisions: ["Gi", "No-Gi"],
      status: "upcoming",
    },
    {
      id: 2,
      event: "ADCC World Championship",
      date: "2025-09-10",
      location: "Las Vegas, NV",
      divisions: ["No-Gi Only"],
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "Marcus Almeida", nickname: "Buchecha", weight: "Ultra Heavy", belt: "Black Belt" },
    { name: "Gordon Ryan", nickname: "The King", weight: "Super Heavy", belt: "Black Belt" },
    { name: "Bia Mesquita", nickname: "", weight: "Medium Heavy", belt: "Black Belt" },
    { name: "Mikey Musumeci", nickname: "Darth Rigatoni", weight: "Rooster", belt: "Black Belt" },
  ]

  const positions = [
    { name: "Guard", description: "Bottom position controlling opponent's posture" },
    { name: "Mount", description: "Top position sitting on opponent's torso" },
    { name: "Back Control", description: "Behind opponent with hooks in" },
    { name: "Side Control", description: "Perpendicular control from the side" },
  ]

  const belts = [
    { rank: "White", description: "Beginner level", timeframe: "0-2 years" },
    { rank: "Blue", description: "Fundamental techniques", timeframe: "2-4 years" },
    { rank: "Purple", description: "Advanced techniques", timeframe: "4-6 years" },
    { rank: "Brown", description: "Expert level", timeframe: "6-8 years" },
    { rank: "Black", description: "Master level", timeframe: "8+ years" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Brazilian Jiu-Jitsu (BJJ)
          </h1>
          <p className="text-gray-600 text-lg">The gentle art - Ground fighting and submission grappling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Belt Ranks</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Major Tournaments</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">3M+</div>
              <div className="text-sm text-gray-600">Practitioners Worldwide</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">180</div>
              <div className="text-sm text-gray-600">Countries Practicing</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Championships</h2>
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
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">WORLD CLASS</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{event.date}</span>
                      <div className="flex space-x-2">
                        {event.divisions.map((div, idx) => (
                          <Badge key={idx} variant="outline" className="border-indigo-200 text-indigo-700 text-xs">
                            {div}
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
                      <div className="font-semibold text-gray-900">
                        {champion.name} {champion.nickname && `"${champion.nickname}"`}
                      </div>
                      <div className="text-sm text-indigo-600">{champion.weight}</div>
                      <div className="text-sm text-gray-500">{champion.belt}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fundamental Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positions.map((position, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{position.name}</h3>
                    <p className="text-gray-600 text-sm">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Belt System</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {belts.map((belt, index) => (
                  <div key={index} className={`p-4 ${index !== belts.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{belt.rank} Belt</div>
                        <div className="text-sm text-gray-600">{belt.description}</div>
                      </div>
                      <div className="text-sm text-indigo-600">{belt.timeframe}</div>
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
