import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export default function RankingsPage() {
  const rankings = [
    {
      rank: 1,
      name: "Jon Jones",
      division: "Heavyweight",
      record: "27-1-0",
      change: "up",
      points: 1500,
    },
    {
      rank: 2,
      name: "Islam Makhachev",
      division: "Lightweight",
      record: "25-1-0",
      change: "same",
      points: 1485,
    },
    {
      rank: 3,
      name: "Alexander Volkanovski",
      division: "Featherweight",
      record: "26-3-0",
      change: "down",
      points: 1470,
    },
    {
      rank: 4,
      name: "Leon Edwards",
      division: "Welterweight",
      record: "22-3-0",
      change: "up",
      points: 1455,
    },
  ]

  const getTrendIcon = (change: string) => {
    switch (change) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <Minus className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Fighter Rankings
          </h1>
          <p className="text-gray-600">Official pound-for-pound fighter rankings</p>
        </div>

        <Card className="border border-indigo-100 shadow-xl shadow-indigo-500/10">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Rank</th>
                    <th className="px-6 py-4 text-left">Fighter</th>
                    <th className="px-6 py-4 text-left">Division</th>
                    <th className="px-6 py-4 text-left">Record</th>
                    <th className="px-6 py-4 text-left">Points</th>
                    <th className="px-6 py-4 text-left">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((fighter, index) => (
                    <tr key={fighter.rank} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                          {fighter.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fighter.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                          {fighter.division}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{fighter.record}</td>
                      <td className="px-6 py-4 font-mono text-indigo-600">{fighter.points}</td>
                      <td className="px-6 py-4">{getTrendIcon(fighter.change)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
