import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Users, Medal } from "lucide-react"

export default function JudoPage() {
  const upcomingEvents = [
    {
      id: 1,
      event: "World Judo Championships",
      date: "2025-09-20",
      location: "Budapest, Hungary",
      categories: ["Individual", "Team"],
      status: "upcoming",
    },
    {
      id: 2,
      event: "Grand Slam Paris",
      date: "2025-08-15",
      location: "Paris, France",
      categories: ["IJF World Tour"],
      status: "upcoming",
    },
  ]

  const champions = [
    { name: "Teddy Riner", weight: "+100kg", country: "France", achievements: "2x Olympic Gold" },
    { name: "Clarisse Agbegnenou", weight: "-63kg", country: "France", achievements: "Olympic Gold 2021" },
    { name: "Shohei Ono", weight: "-73kg", country: "Japan", achievements: "2x Olympic Gold" },
    { name: "Distria Krasniqi", weight: "-48kg", country: "Kosovo", achievements: "Olympic Gold 2021" },
  ]

  const techniques = [
    { name: "Ippon Seoi Nage", type: "Throw", description: "One-arm shoulder throw" },
    { name: "Osoto Gari", type: "Throw", description: "Major outer reap" },
    { name: "Juji Gatame", type: "Armlock", description: "Cross armlock" },
    { name: "Hadaka Jime", type: "Choke", description: "Rear naked choke" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Judo
          </h1>
          <p className="text-gray-600 text-lg">The gentle way - Olympic martial art emphasizing throws and grappling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Medal className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm opacity-90">Olympic Weight Classes</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-600">IJF Events This Year</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">20M+</div>
              <div className="text-sm text-gray-600">Practitioners Worldwide</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">200</div>
              <div className="text-sm text-gray-600">IJF Member Countries</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Tournaments</h2>
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
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">IJF SANCTIONED</Badge>
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
                      <div className="text-sm text-indigo-600">{champion.weight}</div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Judo Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{technique.name}</h3>
                  <Badge variant="outline" className="border-indigo-200 text-indigo-700 mb-3">
                    {technique.type}
                  </Badge>
                  <p className="text-gray-600 text-sm">{technique.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
