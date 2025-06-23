import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FIGHTER</h3>
            <p className="text-gray-400 text-sm">Your ultimate source for martial arts news, rankings, and analysis.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sports</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mma" className="text-gray-400 hover:text-white">
                  MMA
                </Link>
              </li>
              <li>
                <Link href="/boxing" className="text-gray-400 hover:text-white">
                  Boxing
                </Link>
              </li>
              <li>
                <Link href="/kickboxing" className="text-gray-400 hover:text-white">
                  Kickboxing
                </Link>
              </li>
              <li>
                <Link href="/karate" className="text-gray-400 hover:text-white">
                  Karate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Content</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-white">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-gray-400 hover:text-white">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-gray-400 hover:text-white">
                  Rankings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Fighter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
