import Header from "@/components/header"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ArticleGrid from "@/components/article-grid"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <ArticleGrid />
      </main>
      <Footer />
    </div>
  )
}
