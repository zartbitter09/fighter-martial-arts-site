import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Ticket } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "UFC 301: Jones vs Miocic",
      date: "2025-07-15",
      time: "22:00",
      location: "T-Mobile Arena, Las Vegas",
      status: "upcoming",
      ticketsAvailable: true,
      mainCard: ["Jon Jones vs Stipe Miocic", "Islam Makhachev vs Charles Oliveira"],
    },
    {
      id: 2,
      title: "Bellator 302: European Championship",
      date: "2025-07-22",
      time: "20:00",
      location: "O2 Arena, London",
      status: "upcoming",
      ticketsAvailable: true,
      mainCard: ["Michael Page vs Douglas Lima", "Gegard Mousasi vs Johnny Eblen"],
    },
    {
      id: 3,
      title: "ONE Championship: Revolution",
      date: "2025-08-05",
      time: "14:00",
      location: "Singapore Indoor Stadium",
      status: "upcoming",
      ticketsAvailable: false,
      mainCard: ["Anatoly Malykhin vs Arjan Bhullar", "Angela Lee vs Stamp Fairtex"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600">Don't miss the biggest martial arts events</p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                        {event.status.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Main Card:</h4>
                      <ul className="space-y-1">
                        {event.mainCard.map((fight, index) => (
                          <li key={index} className="text-gray-600 text-sm">
                            • {fight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 lg:ml-6">
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                      <Ticket className="w-4 h-4" />
                      <span>{event.ticketsAvailable ? "Buy Tickets" : "Sold Out"}</span>
                    </button>
                    <button className="border border-indigo-300 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                      View Details
                    </button>
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
