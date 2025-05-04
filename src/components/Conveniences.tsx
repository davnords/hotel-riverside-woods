import {
  Clock,
  Wifi,
  Bug,
  ShowerHead,
  Car,
  UtensilsCrossed,
  Shirt,
  Shield,
  PhoneCall,
  SquareParking,
  Tent,
  Trees,
  Bike,
  Zap,
  MapPin,
} from "lucide-react"

const conveniences = [
  {
    icon: Tent,
    title: "Camping Space",
    description: "Spacious grounds for private tents",
  },
  {
    icon: Trees,
    title: "Natural Setting",
    description: "Peaceful surroundings with valley views",
  },
  {
    icon: UtensilsCrossed,
    title: "Camp David BBQ",
    description: "Famous barbecue in scenic settings",
  },
  {
    icon: Bike,
    title: "Bike Rentals",
    description: "Explore the surrounding nature",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected while in nature",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 guarded premises",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Generator & reliable utilities",
  },
  {
    icon: SquareParking,
    title: "Parking",
    description: "Ample secure parking space",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Near Ssezibwa Falls & Mabira Forest",
  },
]

export default function Conveniences() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          For Your Convenience
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need for a comfortable stay at Riverside Woods
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {conveniences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 