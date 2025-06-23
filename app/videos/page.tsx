import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, Clock } from "lucide-react"
import Image from "next/image"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "UFC 301: Best Knockouts Compilation",
      duration: "8:45",
      views: "2.1M",
      category: "Highlights",
      thumbnail: "/placeholder.svg?height=200&width=350",
      uploadDate: "2 days ago",
    },
    {
      id: 2,
      title: "Jon Jones Training Camp: Behind the Scenes",
      duration: "15:30",
      views: "856K",
      category: "Training",
      thumbnail: "/placeholder.svg?height=200&width=350",
      uploadDate: "1 week ago",
    },
    {
      id: 3,
      title: "Technique Breakdown: Perfect Submissions",
      duration: "12:15",
      views: "1.3M",
      category: "Analysis",
      thumbnail: "/placeholder.svg?height=200&width=350",
      uploadDate: "3 days ago",
    },
    {
      id: 4,
      title: "Web3 in MMA: The Future of Fan Engagement",
      duration: "6:22",
      views: "425K",
      category: "Technology",
      thumbnail: "/placeholder.svg?height=200&width=350",
      uploadDate: "5 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Video Library
          </h1>
          <p className="text-gray-600">Watch the best martial arts content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100 group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-xs">{video.category}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <span>{video.uploadDate}</span>
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
