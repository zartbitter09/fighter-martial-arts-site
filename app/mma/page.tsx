import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, Users } from "lucide-react"

export default function MMAPage() {
  const upcomingFights = [
    {
      id: 1,
      event: "UFC 301",
      date: "2025-07-15",
      mainEvent: "Jon Jones vs Stipe Miocic",
      location: "Las Vegas, NV",
      status: "upcoming",
    },
    {
      id: 2,
      event: "Bellator 302",
      date: "2025-07-22",
      mainEvent: "Patricio Pitbull vs AJ McKee",
      location: "London, UK",
      status: "upcoming",
    },
  ]

  const rankings = [
    { rank: 1, name: "Jon Jones", division: "Heavyweight", record: "27-1-0" },
    { rank: 2, name: "Islam Makhachev", division: "Lightweight", record: "25-1-0" },
    { rank: 3, name: "Alexander Volkanovski", division: "Featherweight", record: "26-3-0" },
    { rank: 4, name: "Leon Edwards", division: "Welterweight", record: "22-3-0" },
  ]

  const news = [
    {
      id: 1,
      title: "UFC 301: Jones Prepares for Heavyweight Title Defense",
      excerpt: "The heavyweight champion is ready for his biggest challenge yet.",
      category: "UFC",
      date: "2025-06-15",
    },
    {
      id: 2,
      title: "Bellator Signs New Heavyweight Prospect",
      excerpt: "Rising star from Europe joins the promotion's heavyweight division.",
      category: "Bellator",
      date: "2025-06-14",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mixed Martial Arts (MMA)
          </h1>
          <p className="text-gray-600 text-lg">The ultimate combat sport combining all martial arts disciplines</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-90">Active Champions</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Events This Month</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">847</div>
              <div className="text-sm text-gray-600">Active Fighters</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">5.2M</div>
              <div className="text-sm text-gray-600">Global Fans</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Fights */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Fights</h2>
            <div className="space-y-4">
              {upcomingFights.map((fight) => (
                <Card
                  key={fight.id}
                  className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{fight.event}</h3>
                        <p className="text-indigo-600 font-medium">{fight.mainEvent}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">
                        {fight.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{fight.date}</span>
                      <span>{fight.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Rankings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">P4P Rankings</h2>
            <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
              <CardContent className="p-0">
                {rankings.map((fighter, index) => (
                  <div
                    key={fighter.rank}
                    className={`p-4 ${index !== rankings.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {fighter.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{fighter.name}</div>
                        <div className="text-sm text-gray-600">{fighter.division}</div>
                      </div>
                      <div className="text-sm text-gray-500">{fighter.record}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Latest News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest MMA News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
