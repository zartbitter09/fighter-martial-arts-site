import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, Users } from "lucide-react"

export default function MuayThaiPage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "ONE Friday Fights",
      date: "2025-07-19",
      location: "Bangkok, Thailand",
      mainEvent: "Rodtang vs Superlek",
      status: "upcoming",
    },
    {
      id: 2,
      event: "Rajadamnern Stadium",
      date: "2025-07-26",
      location: "Bangkok, Thailand",
      mainEvent: "Saenchai vs Yodlekpet",
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "Rodtang Jitmuangnon", nickname: "The Iron Man", weight: "Flyweight", org: "ONE Championship" },
    { name: "Superlek Kiatmoo9", nickname: "The Kicking Machine", weight: "Flyweight", org: "ONE Championship" },
    { name: "Saenchai", nickname: "The Fighting Genius", weight: "Lightweight", org: "Legend" },
    { name: "Buakaw Banchamek", nickname: "White Lotus", weight: "Welterweight", org: "Legend" },
  ]

  const techniques = [
    { name: "Teep", type: "Kick", description: "Push kick to maintain distance" },
    { name: "Roundhouse Kick", type: "Kick", description: "Circular kick with shin" },
    { name: "Elbow Strike", type: "Elbow", description: "Close-range elbow techniques" },
    { name: "Knee Strike", type: "Knee", description: "Devastating knee attacks" },
    { name: "Clinch", type: "Grappling", description: "Standing grappling position" },
    { name: "Jab-Cross", type: "Punch", description: "Basic boxing combination" },
  ]

  const stadiums = [
    { name: "Lumpinee Stadium", location: "Bangkok", significance: "Most prestigious venue" },
    { name: "Rajadamnern Stadium", location: "Bangkok", significance: "Historic boxing venue" },
    { name: "Channel 7 Stadium", location: "Bangkok", significance: "Sunday fights broadcast" },
    { name: "Omnoi Stadium", location: "Bangkok", significance: "Wednesday night fights" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Muay Thai
          </h1>
          <p className="text-gray-600 text-lg">The art of eight limbs - Thailand's national sport</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-90">Limbs Used</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">300+</div>
              <div className="text-sm text-gray-600">Fights Per Month</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">2M+</div>
              <div className="text-sm text-gray-600">Practitioners Worldwide</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">120</div>
              <div className="text-sm text-gray-600">Countries Practicing</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Fights</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legendary Champions</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {champions.map((champion, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index !== champions.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">
                        {champion.name} "{champion.nickname}"
                      </div>
                      <div className="text-sm text-indigo-600">{champion.weight}</div>
                      <div className="text-sm text-gray-500">{champion.org}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techniques.map((technique, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{technique.name}</h3>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 mb-2 text-xs">
                      {technique.type}
                    </Badge>
                    <p className="text-gray-600 text-sm">{technique.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Famous Stadiums</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {stadiums.map((stadium, index) => (
                  <div key={index} className={`p-4 ${index !== stadiums.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">{stadium.name}</div>
                      <div className="text-sm text-indigo-600">{stadium.location}</div>
                      <div className="text-sm text-gray-600">{stadium.significance}</div>
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
