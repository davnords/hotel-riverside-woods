import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const testimonials = [
  {
    text: "The perfect weekend getaway! Camp David's BBQ was incredible, and the views of Ssezibwa Falls made our family celebration unforgettable. The staff went above and beyond to make our stay special.",
    author: "David Nordström",
    location: "Tourist",
    avatar: "/people/david-nordstrom.png",
  },
  {
    text: "A hidden gem near Kampala. We rented bikes to explore the area and had a fantastic time at Mabira Forest. The camping facilities are excellent, and the evening BBQ under the stars was magical.",
    author: "Nina Nordström",
    location: "Tourist",
    avatar: "/people/nina-nordstrom.jpeg",
  },
  {
    text: "We booked the entire resort for our company retreat. The combination of nature, comfortable accommodation, and excellent facilities made it perfect for both team building and relaxation.",
    author: "Karl Nordström",
    location: "Tourist",
    avatar: "/people/karl-nordstrom.jpeg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Quote className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Guest Experiences
          </h2>
        </div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear what our guests have to say about their stay at Riverside Woods
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-row space-x-3 mb-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold">{testimonial.author}</span>
                        <span className="text-sm text-gray-500">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>


                    <p className="text-gray-600 mb-4">{testimonial.text}</p>

                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
} 