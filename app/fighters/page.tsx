import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function FightersPage() {
  const fighters = [
    {
      id: 1,
      name: "Jon Jones",
      nickname: "Bones",
      division: "Heavyweight",
      record: "27-1-0",
      age: 37,
      height: "6'4\"",
      reach: '84.5"',
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 2,
      name: "Islam Makhachev",
      nickname: "The Eagle's Heir",
      division: "Lightweight",
      record: "25-1-0",
      age: 33,
      height: "5'10\"",
      reach: '70"',
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 3,
      name: "Alexander Volkanovski",
      nickname: "The Great",
      division: "Featherweight",
      record: "26-3-0",
      age: 36,
      height: "5'6\"",
      reach: '71.5"',
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Fighter Profiles
          </h1>
          <p className="text-gray-600">Comprehensive profiles of top martial artists</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fighters.map((fighter) => (
            <Card
              key={fighter.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-0">
                <Link href={`/fighters/${fighter.id}`}>
                  <div className="relative">
                    <Image
                      src={fighter.image || "/placeholder.svg"}
                      alt={fighter.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">{fighter.division}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{fighter.name}</h3>
                    <p className="text-indigo-600 text-sm mb-3">"{fighter.nickname}"</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Record:</span>
                        <span className="font-semibold">{fighter.record}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Age:</span>
                        <span className="font-semibold">{fighter.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Height:</span>
                        <span className="font-semibold">{fighter.height}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reach:</span>
                        <span className="font-semibold">{fighter.reach}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
