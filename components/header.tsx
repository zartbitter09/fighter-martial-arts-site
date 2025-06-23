import Link from "next/link"
import { Globe, Radio, Play, Mic, Gamepad2, BookOpen, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="shadow-lg shadow-indigo-500/20">
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="text-2xl font-bold">
              FIGHTER
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/news" className="flex items-center space-x-1 hover:text-indigo-200">
                <Globe className="w-4 h-4" />
                <span>NEWS</span>
              </Link>
              <Link href="/live" className="flex items-center space-x-1 hover:text-indigo-200">
                <Radio className="w-4 h-4" />
                <span>LIVE</span>
              </Link>
              <Link href="/videos" className="flex items-center space-x-1 hover:text-indigo-200">
                <Play className="w-4 h-4" />
                <span>VIDEOS</span>
              </Link>
              <Link href="/podcasts" className="flex items-center space-x-1 hover:text-indigo-200">
                <Mic className="w-4 h-4" />
                <span>PODCASTS</span>
              </Link>
              <Link href="/events" className="flex items-center space-x-1 hover:text-indigo-200">
                <Gamepad2 className="w-4 h-4" />
                <span>EVENTS</span>
              </Link>
              <Link href="/magazine" className="flex items-center space-x-1 hover:text-indigo-200">
                <BookOpen className="w-4 h-4" />
                <span>MAGAZINE</span>
              </Link>
              <Link href="/shop" className="flex items-center space-x-1 hover:text-indigo-200">
                <ShoppingBag className="w-4 h-4" />
                <span>SHOP</span>
              </Link>
            </nav>

            <Link href="/login">
              <Button
                variant="secondary"
                size="sm"
                className="bg-indigo-700 hover:bg-indigo-800 text-white border-indigo-500"
              >
                <User className="w-4 h-4 mr-1" />
                ANMELDEN
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
