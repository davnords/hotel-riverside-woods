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

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

const testimonials = [
  {
    text: "The best place I have been to. I came on vacation from Sweden with my family and my kids loved the place. I recommend everyone to try it out. The ambiance is top notch, the gardens are well taken care of. And the food was great too.",
    author: "Ivan Kamyuka",
    date: "1 month ago",
    avatar: null,
  },
  {
    text: "Beautiful green woodsy hide out with great service, kind staff members as a cherry on top. The food is very palatable. You and family and friends will want to return here often. Enjoy.",
    author: "Cynthia Kizito",
    date: "5 months ago",
    avatar: null,
  },
  {
    text: "What a beautiful stay! The cottage was cosy and spotless, with the most comfortable beds. The organic food was amazing, honestly some of the best I've ever had. The peace and quiet of the countryside was exactly what I needed to unwind and recharge. A perfect escape, I can't wait to come back!",
    author: "Noeline Namuyiga",
    date: "7 months ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbLFck9XFclWOTIwjOOCeou_c-FaQsMlYFAA8GVH5qdCmlsv-v5w=w144-h144-p-rp-mo-br100",
  },
  {
    text: "My husband and I visited for 2 days and spent our days having endless conversations at the balcony while eating ourselves silly. I must say, whoever priced Riverside's services did a great job. The fish, meats, juices, breakfast were all five-star. Customer care top notch, phone calls very helpful, environment serene. We must return soon. Thank you woods.",
    author: "Muhindo Annet",
    date: "3 years ago",
    avatar: null,
  },
  {
    text: "This is a beautiful place! It's clean and has a lot of comfort items to make you feel at home. We were in town for a stressful event and went back to very peaceful rooms. The best stay ever. The environment was pleasant and welcoming. Both check-in and check-out were professionally handled and easy.",
    author: "Wycliff Clinton",
    date: "4 years ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUPtaWFK0uVXj7u0DD-WDgi9Rl1vUKf2EtJa2eS_qNrHGOIuxn4=s80-rp-mo-br100",
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
          Real reviews from our guests on Google
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
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex flex-row space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar ?? undefined} alt={testimonial.author} />
                          <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-semibold">{testimonial.author}</span>
                          <span className="text-sm text-gray-500">{testimonial.date}</span>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
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