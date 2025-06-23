import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function MoreSportsPage() {
  const additionalSports = [
    {
      name: "Aikido",
      description: "Japanese martial art focusing on redirecting opponent's energy",
      practitioners: "1.2M+",
      origin: "Japan",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Krav Maga",
      description: "Israeli self-defense system developed for military use",
      practitioners: "500K+",
      origin: "Israel",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Capoeira",
      description: "Brazilian martial art combining dance, acrobatics, and music",
      practitioners: "800K+",
      origin: "Brazil",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Kendo",
      description: "Japanese sword fighting using bamboo swords",
      practitioners: "1.5M+",
      origin: "Japan",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Taekwondo",
      description: "Korean martial art emphasizing high kicks and fast techniques",
      practitioners: "80M+",
      origin: "Korea",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Wing Chun",
      description: "Chinese martial art focusing on close-range combat",
      practitioners: "2M+",
      origin: "China",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sambo",
      description: "Russian martial art and combat sport",
      practitioners: "300K+",
      origin: "Russia",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Savate",
      description: "French kickboxing using only feet and hands",
      practitioners: "150K+",
      origin: "France",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Escrima/Arnis",
      description: "Filipino martial arts focusing on weapon-based fighting",
      practitioners: "400K+",
      origin: "Philippines",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const emergingSports = [
    {
      name: "Pankration",
      description: "Ancient Greek martial art combining wrestling and boxing",
      status: "Revival",
    },
    {
      name: "Combat Sambo",
      description: "Military version of Sambo with strikes",
      status: "Growing",
    },
    {
      name: "Lethwei",
      description: "Burmese bare-knuckle boxing",
      status: "International Expansion",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            More Martial Arts
          </h1>
          <p className="text-gray-600 text-lg">Discover the diverse world of combat sports and martial arts</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional & Modern Martial Arts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSports.map((sport, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-0">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{sport.name}</h3>
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                        {sport.origin}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{sport.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-indigo-600 font-medium">{sport.practitioners} practitioners</span>
                      <Link
                        href={`/sports/${sport.name.toLowerCase()}`}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emerging Combat Sports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergingSports.map((sport, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{sport.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{sport.description}</p>
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">{sport.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Explore More Martial Arts</h2>
          <p className="mb-6">
            The world of martial arts is vast and diverse. From ancient traditions to modern combat sports, there's
            always something new to discover and learn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Asian Martial Arts</h3>
              <ul className="space-y-1 opacity-90">
                <li>• Kung Fu</li>
                <li>• Hapkido</li>
                <li>• Silat</li>
                <li>• Kyokushin</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">European Systems</h3>
              <ul className="space-y-1 opacity-90">
                <li>• HEMA</li>
                <li>• Systema</li>
                <li>• Savate</li>
                <li>• Pankration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Modern Systems</h3>
              <ul className="space-y-1 opacity-90">
                <li>• Krav Maga</li>
                <li>• Combatives</li>
                <li>• MMA</li>
                <li>• Self-Defense</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
