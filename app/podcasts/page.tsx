import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Clock, Headphones } from "lucide-react"
import Image from "next/image"

export default function PodcastsPage() {
  const podcasts = [
    {
      id: 1,
      title: "The Fighter's Mind: Mental Preparation",
      host: "Dr. Sarah Chen",
      duration: "45:30",
      episode: "Episode 127",
      description:
        "Exploring the psychological aspects of martial arts and how fighters prepare mentally for competition.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      publishDate: "2025-06-14",
      downloads: "15K",
    },
    {
      id: 2,
      title: "Web3 Warriors: Blockchain in Combat Sports",
      host: "Alex Rodriguez",
      duration: "38:15",
      episode: "Episode 89",
      description: "How blockchain technology and NFTs are revolutionizing the martial arts industry.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      publishDate: "2025-06-12",
      downloads: "8.2K",
    },
    {
      id: 3,
      title: "Legends of the Octagon",
      host: "Mike Thompson",
      duration: "52:45",
      episode: "Episode 203",
      description: "Interviews with legendary fighters sharing their stories and experiences.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      publishDate: "2025-06-10",
      downloads: "22K",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Podcasts
          </h1>
          <p className="text-gray-600">Listen to in-depth discussions about martial arts</p>
        </div>

        <div className="space-y-6">
          {podcasts.map((podcast) => (
            <Card
              key={podcast.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={podcast.thumbnail || "/placeholder.svg"}
                      alt={podcast.title}
                      width={200}
                      height={200}
                      className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                        {podcast.episode}
                      </Badge>
                      <span className="text-sm text-gray-500">{podcast.publishDate}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                    <p className="text-indigo-600 font-medium mb-3">Hosted by {podcast.host}</p>
                    <p className="text-gray-600 mb-4">{podcast.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{podcast.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Headphones className="w-4 h-4" />
                        <span>{podcast.downloads} downloads</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Play</span>
                      </button>
                      <button className="border border-indigo-300 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
