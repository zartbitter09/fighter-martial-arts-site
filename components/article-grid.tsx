import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      category: "Insights into the Big Conference",
      title: 'That\'s why no fighter is "World Class": Talk about Fighter Rankings',
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Analysis of current fighter rankings and what it takes to reach world-class status.",
    },
    {
      id: 2,
      category: "Rankings",
      title: "The Fighter-Rankings for UFC: Criteria: Only Performance Counts",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "How our comprehensive ranking system evaluates fighters based purely on performance metrics.",
    },
    {
      id: 3,
      category: "Interactive",
      title: "Create Your Own Rankings: My Rankings: So You Can Compile Them Yourself",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Use our interactive tool to create and customize your own fighter rankings.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <Link href={`/article/${article.id}`}>
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="text-indigo-600 text-sm font-medium mb-2">{article.category}</div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 text-white">
          <CardContent className="p-6">
            <h4 className="font-bold mb-2">Latest Results</h4>
            <p className="text-sm opacity-90">UFC 300: Jones defeats Miocic</p>
            <p className="text-sm opacity-90">Bellator 301: Pitbull wins title</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <h4 className="font-bold mb-2 text-gray-900">Upcoming Events</h4>
            <p className="text-sm text-gray-600">UFC 301 - March 15</p>
            <p className="text-sm text-gray-600">ONE Championship - March 22</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <h4 className="font-bold mb-2 text-gray-900">Top Rankings</h4>
            <p className="text-sm text-gray-600">1. Jon Jones (Heavyweight)</p>
            <p className="text-sm text-gray-600">2. Islam Makhachev (Lightweight)</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <h4 className="font-bold mb-2 text-gray-900">Fighter Spotlight</h4>
            <p className="text-sm text-gray-600">Rising star making waves in the octagon</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
