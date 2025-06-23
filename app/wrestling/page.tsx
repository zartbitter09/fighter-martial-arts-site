import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Users, Medal } from "lucide-react"

export default function WrestlingPage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "World Wrestling Championships",
      date: "2025-09-15",
      location: "Belgrade, Serbia",
      styles: ["Freestyle", "Greco-Roman"],
      status: "upcoming",
    },
    {
      id: 2,
      event: "NCAA Division I Championships",
      date: "2025-03-20",
      location: "Philadelphia, PA",
      styles: ["Folkstyle"],
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "David Taylor", weight: "86kg", style: "Freestyle", country: "USA", achievements: "Olympic Gold 2021" },
    { name: "Mijain Lopez", weight: "125kg", style: "Greco-Roman", country: "Cuba", achievements: "4x Olympic Gold" },
    { name: "Helen Maroulis", weight: "57kg", style: "Freestyle", country: "USA", achievements: "Olympic Gold 2016" },
    {
      name: "Tamyra Mensah-Stock",
      weight: "68kg",
      style: "Freestyle",
      country: "USA",
      achievements: "Olympic Gold 2021",
    },
  ]

  const styles = [
    {
      name: "Freestyle",
      description: "Attacks allowed on entire body, leg attacks permitted",
      origin: "International",
    },
    {
      name: "Greco-Roman",
      description: "No attacks below the waist, upper body only",
      origin: "International",
    },
    {
      name: "Folkstyle",
      description: "American collegiate style, emphasis on control",
      origin: "USA",
    },
  ]

  const techniques = [
    { name: "Double Leg Takedown", type: "Takedown", description: "Attack both legs simultaneously" },
    { name: "Single Leg Takedown", type: "Takedown", description: "Attack one leg" },
    { name: "Suplex", type: "Throw", description: "Lift and throw opponent" },
    { name: "Sprawl", type: "Defense", description: "Defend against takedown attempts" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Wrestling
          </h1>
          <p className="text-gray-600 text-lg">The world's oldest combat sport - Grappling and takedowns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Medal className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">18</div>
              <div className="text-sm opacity-90">Olympic Weight Classes</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Major Tournaments</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">5M+</div>
              <div className="text-sm text-gray-600">Active Wrestlers</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">180</div>
              <div className="text-sm text-gray-600">UWW Member Nations</div>
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
                        {event.styles.map((style, idx) => (
                          <Badge key={idx} variant="outline" className="border-indigo-200 text-indigo-700 text-xs">
                            {style}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Olympic Champions</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {champions.map((champion, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index !== champions.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">{champion.name}</div>
                      <div className="text-sm text-indigo-600">
                        {champion.weight} - {champion.style}
                      </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wrestling Styles</h2>
            <div className="space-y-4">
              {styles.map((style, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{style.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{style.description}</p>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 text-xs">
                      {style.origin}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Techniques</h2>
            <div className="grid grid-cols-1 gap-4">
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
        </div>
      </main>
    </div>
  )
}
