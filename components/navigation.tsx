import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-b border-indigo-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto">
          <Link href="/mma" className="whitespace-nowrap hover:text-purple-200 font-medium">
            MMA
          </Link>
          <Link href="/boxing" className="whitespace-nowrap hover:text-purple-200">
            BOXING
          </Link>
          <Link href="/kickboxing" className="whitespace-nowrap hover:text-purple-200">
            KICKBOXING
          </Link>
          <Link href="/karate" className="whitespace-nowrap hover:text-purple-200">
            KARATE
          </Link>
          <Link href="/judo" className="whitespace-nowrap hover:text-purple-200">
            JUDO
          </Link>
          <Link href="/bjj" className="whitespace-nowrap hover:text-purple-200">
            BJJ
          </Link>
          <Link href="/muay-thai" className="whitespace-nowrap hover:text-purple-200">
            MUAY THAI
          </Link>
          <Link href="/wrestling" className="whitespace-nowrap hover:text-purple-200">
            WRESTLING
          </Link>
          <Link href="/olympics" className="whitespace-nowrap hover:text-purple-200">
            OLYMPICS
          </Link>
          <Link href="/more" className="whitespace-nowrap hover:text-purple-200 flex items-center">
            MORE SPORTS
            <ChevronDown className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
