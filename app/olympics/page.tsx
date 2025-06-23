import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Medal, Target } from "lucide-react"

export default function OlympicsPage() {
  const olympicSports = [
    {
      sport: "Boxing",
      events: 13,
      nextOlympics: "Paris 2024",
      description: "Men's and women's boxing across multiple weight classes",
    },
    {
      sport: "Judo",
      events: 15,
      nextOlympics: "Paris 2024",
      description: "Individual and mixed team competitions",
    },
    {
      sport: "Wrestling",
      events: 18,
      nextOlympics: "Paris 2024",
      description: "Freestyle and Greco-Roman for men and women",
    },
    {
      sport: "Karate",
      events: 8,
      nextOlympics: "LA 2028",
      description: "Kata and Kumite competitions (returning in LA)",
    },
    {
      sport: "Taekwondo",
      events: 8,
      nextOlympics: "Paris 2024",
      description: "Kyorugi (sparring) competitions",
    },
  ]

  const recentMedalists = [
    { name: "Clarisse Agbegnenou", country: "France", sport: "Judo", medal: "Gold", event: "Tokyo 2021" },
    { name: "Gable Steveson", country: "USA", sport: "Wrestling", medal: "Gold", event: "Tokyo 2021" },
    { name: "Galal Yafai", country: "Great Britain", sport: "Boxing", medal: "Gold", event: "Tokyo 2021" },
    { name: "Anastasija Zolotic", country: "USA", sport: "Taekwondo", medal: "Gold", event: "Tokyo 2021" },
  ]

  const upcomingEvents = [
    {
      event: "Paris 2024 Olympics",
      date: "July 26 - August 11, 2024",
      location: "Paris, France",
      martialArts: ["Boxing", "Judo", "Wrestling", "Taekwondo"],
    },
    {
      event: "LA 2028 Olympics",
      date: "July 14 - July 30, 2028",
      location: "Los Angeles, USA",
      martialArts: ["Boxing", "Judo", "Wrestling", "Taekwondo", "Karate"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Olympic Martial Arts
          </h1>
          <p className="text-gray-600 text-lg">Martial arts on the world's biggest sporting stage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Medal className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">62</div>
              <div className="text-sm opacity-90">Total Medal Events</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Martial Arts Sports</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">206</div>
              <div className="text-sm text-gray-600">Participating Nations</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">1,200+</div>
              <div className="text-sm text-gray-600">Olympic Athletes</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Olympic Martial Arts</h2>
            <div className="space-y-4">
              {olympicSports.map((sport, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{sport.sport}</h3>
                        <p className="text-gray-600 text-sm">{sport.description}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">{sport.events} Events</Badge>
                    </div>
                    <div className="text-sm text-indigo-600">Next: {sport.nextOlympics}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Olympic Champions</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {recentMedalists.map((medalist, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index !== recentMedalists.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">{medalist.name}</div>
                      <div className="text-sm text-indigo-600">{medalist.sport}</div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{medalist.country}</span>
                        <span className="text-yellow-600 font-medium">
                          {medalist.medal} - {medalist.event}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Olympic Games</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{event.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{event.date}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Martial Arts Events:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.martialArts.map((sport, idx) => (
                        <Badge key={idx} variant="outline" className="border-indigo-200 text-indigo-700">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
