import Link from "next/link"

export default function SubNavigation() {
  return (
    <nav className="bg-gradient-to-r from-gray-50 to-indigo-50/30 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto">
          <Link href="/ufc" className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-3">
            UFC
          </Link>
          <Link href="/schedule" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Schedule
          </Link>
          <Link href="/results" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Results
          </Link>
          <Link href="/rankings" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Rankings
          </Link>
          <Link href="/fighters" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Fighters
          </Link>
          <Link href="/statistics" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Statistics
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            News
          </Link>
          <Link href="/highlights" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Highlights
          </Link>
          <Link href="/gyms" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            Gyms
          </Link>
        </div>
      </div>
    </nav>
  )
}
