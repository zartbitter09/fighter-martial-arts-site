import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "UFC 301: Jones Successfully Defends Heavyweight Title",
      excerpt:
        "Jon Jones dominated his opponent in a spectacular performance at UFC 301, cementing his legacy as one of the greatest fighters of all time.",
      category: "UFC",
      date: "2025-06-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "New Web3 Fighter NFT Collection Launches",
      excerpt: "Revolutionary blockchain-based fighter collectibles are changing how fans engage with martial arts.",
      category: "Web3",
      date: "2025-06-14",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Bellator Signs Rising Star from Germany",
      excerpt: "Young German fighter makes waves in international MMA scene with impressive knockout record.",
      category: "Bellator",
      date: "2025-06-13",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Latest News
          </h1>
          <p className="text-gray-600">Stay updated with the latest martial arts news and developments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-0">
                <Link href={`/news/${article.id}`}>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-indigo-600 text-sm font-medium">{article.category}</span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
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
