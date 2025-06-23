import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function MagazinePage() {
  const articles = [
    {
      id: 1,
      title: "The Evolution of MMA: From Underground to Mainstream",
      author: "Jessica Martinez",
      category: "Feature",
      readTime: "12 min read",
      excerpt:
        "A comprehensive look at how mixed martial arts transformed from underground fights to a global phenomenon.",
      image: "/placeholder.svg?height=300&width=400",
      publishDate: "2025-06-15",
    },
    {
      id: 2,
      title: "Training in the Metaverse: Virtual Reality Martial Arts",
      author: "David Kim",
      category: "Technology",
      readTime: "8 min read",
      excerpt: "How VR and Web3 technologies are revolutionizing martial arts training and fan engagement.",
      image: "/placeholder.svg?height=300&width=400",
      publishDate: "2025-06-13",
    },
    {
      id: 3,
      title: "Nutrition Secrets of Elite Fighters",
      author: "Dr. Amanda Foster",
      category: "Health",
      readTime: "10 min read",
      excerpt: "Inside the dietary strategies that fuel the world's top martial artists.",
      image: "/placeholder.svg?height=300&width=400",
      publishDate: "2025-06-11",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Fighter Magazine
          </h1>
          <p className="text-gray-600">In-depth articles and features about the martial arts world</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-0">
                <Link href={`/magazine/${article.id}`}>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">{article.category}</Badge>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-indigo-600 font-medium">By {article.author}</span>
                      <span className="text-gray-500">{article.publishDate}</span>
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
