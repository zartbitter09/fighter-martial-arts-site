import Image from "next/image"
import SubNavigation from "./sub-navigation"

export default function HeroSection() {
  return (
    <section>
      <SubNavigation />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">FIGHTER-RANKINGS - WINTER 2025</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=700"
                alt="UFC fighters in action"
                width={700}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl shadow-indigo-500/20 ring-1 ring-indigo-500/10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-indigo-600 text-sm font-medium">Breaking News</div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Fighter-Rankings: World Class? From Four to Zero!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              On the international stage, the top fighters were highly successful at the end of the year. This is
              reflected in the rankings. Unlike in winter, no fighter made it to the top category.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
