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
import SectionHeading from "@/components/SectionHeading"

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
    <section className="py-24 px-4 md:px-8 bg-muted/60 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="On the grounds"
          title="For Your Convenience"
          description="Everything you need for a comfortable stay at Riverside Woods."
          className="mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {conveniences.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center rounded-2xl border border-transparent bg-background/60 p-6 transition-all duration-300 hover:border-border/70 hover:bg-background hover:shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
