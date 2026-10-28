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
import Link from "next/link"

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=10764857979203730488"
const GOOGLE_RATING = "4.6"
const GOOGLE_REVIEW_COUNT = 49

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

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={
            i < rating
              ? "h-4 w-4 text-yellow-400 fill-yellow-400"
              : "h-4 w-4 text-gray-300 fill-gray-300"
          }
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    text: "Great place to stay! The staff is so friendly! The food is great! The rooms and the view are beautiful! Thank you",
    author: "Paulina",
    date: "October 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJqwcmMq7atHdVrZ8TUhY0e_itw3yf495KSp00hp8P3kpcMIg=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    text: "We really loved our stay at Riverside Woods Ssezibwa. We had such a nice evening with delicious food made by the people on the hotel, where we ate outside, at our balcony listening to the magical sounds of nature. The host is really kind and it is easy to feel that he cared for us and our stay, guiding us what to experience nearby and making sure we felt at home. We really recommend this place if you want a beautiful experience in the loving nature of Uganda.",
    author: "Ssenvuma Rogers",
    date: "September 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLJqAeQp5EmY0FAVmPBL4Ul93N5TK7fCNEHsv6z1NF2HOzPxA=w72-h72-p-rp-mo-br100",
  },
  {
    text: "An amazing, serene getaway facing the Ssezibwa River! Beautiful green spaces, great hospitality, and very comfortable rooms. It's the perfect place to relax, listen to nature, and explore the nearby Ssezibwa Falls. Had a fantastic experience spending the weekend at Riverside Woods. The natural setting is beautiful, and the barbecue at \"Camp David\" was absolutely delicious. It's an easy, peaceful retreat just a short distance off the Kampala-Jinja highway, making it the perfect stopover or weekend hangout. The service was excellent, and the views from the verandas are unmatched. Recommended!",
    author: "Lillian Katumba",
    date: "July 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV5-8Ldai7JMBNPXT9BQzvAk-QRs0uTN09oVnlARJNSHkZxOZZdiA=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    text: "The meals are the thing that gives me the most reason to come whenever I want something to eat. Not forgetting the fancy accommodation.",
    author: "Shivon Bahar",
    date: "July 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK58-bXI1o833AkkKPLIo5ChALNEJHKFJy3248dtzR2mNyS6w=w72-h72-p-rp-mo-br100",
  },
  {
    text: "While searching for accommodation near Ssezibwa Falls, I came across Riverside Woods Resort and was so glad I decided to spend two nights there. Ssezibwa Falls is only about a 25-minute walk from the resort. The resort offers a large, beautiful green area for camping with wonderful views of the surrounding nature (there's also the option of a campfire for groups), as well as wonderfully equipped rooms & cottages. The bathroom was well-equipped and very clean. Wi-Fi and a delicious breakfast with organic vegetables straight from the garden, eggs, and chapati are included in the price. My experience at Riverside Wood Resort was entirely positive, and I felt very comfortable and welcome there, thanks in part to the friendliness of the host.",
    author: "Friederike Weinhandl",
    date: "March 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJnl_sDofGMfezvXgNuTWw25j0z2zM6MI4nI4YViIDEvK0WW_w=w72-h72-p-rp-mo-br100",
  },
  {
    text: "This place is quite amazing in scenery and silence. I rested very well in one of the cottages. The green vegetation is so calming. I have been to this place several times and I plan to return sometime this year. Customer care was exceptional.",
    author: "Fr. John Kyebasuuta",
    date: "March 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLV9JssQLiM3y4cxxjwg9lzTwYK4rZRCEPpdKixFycLFit7mQ=w72-h72-p-rp-mo-br100",
  },
  {
    text: "We spent a few days there in February 2026 with a group of 16 people. The service was impeccable, the food was delicious and the management were always on hand. Everything went perfectly. A lovely evening by the campfire to unwind. We thoroughly enjoyed our time there.",
    author: "mich t",
    date: "March 2026",
    rating: 4,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVC4qnqjR9pj9SLXqu8UZiaTpTBi77NV7HLfe-38jPI0Vb3wivi=w72-h72-p-rp-mo-br100",
  },
  {
    text: "The best place I have been to. I came on vacation from Sweden with my family and my kids loved the place. I recommend everyone to try it out. The ambiance is top notch, the gardens are well taken care of. And the food was great too.",
    author: "Ivan Kamyuka",
    date: "February 2026",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXdnI2BavK8Er-gYilSEI8pMAPQ74uWewUtOeeDxpRP8EBjfew7=w72-h72-p-rp-mo-br100",
  },
  {
    text: "What a beautiful stay! The cottage was cosy and spotless, with the most comfortable beds. The organic food was amazing, honestly some of the best I've ever had. The peace and quiet of the countryside was exactly what I needed to unwind and recharge. A perfect escape, I can't wait to come back!",
    author: "Noeline Namuyiga",
    date: "2025",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbLFck9XFclWOTIwjOOCeou_c-FaQsMlYFAA8GVH5qdCmlsv-v5w=w72-h72-p-rp-mo-br100",
  },
  {
    text: "Beautiful green woodsy hide out with great service, kind staff members as a cherry on top. The food is very palatable. You and family and friends will want to return here often. Enjoy.",
    author: "Cynthia Kizito",
    date: "2025",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJMOrN_ktg4sMybvIbxbR8GIJc_BWflGBpzj6sWPZshcoaryg=w72-h72-p-rp-mo-br100",
  },
  {
    text: "It's one of the best places to tour and cool off the stress of the week or month or day. Indeed it's home away from home.",
    author: "Mufubenga Semwogerere",
    date: "2024",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXp6Tt4cuCJjaU1rjgN7i_No9aYuNFHoaW8C6hLsMocvTq8GlAk=w72-h72-p-rp-mo-br100",
  },
  {
    text: "My husband and I visited for 2 days and spent our days having endless conversations at the balcony while eating ourselves silly. I must say, whoever priced Riverside's services did a great job. The fish, meats, juices, breakfast were all five-star. Customer care top notch, phone calls very helpful, environment serene. We must return soon. Thank you woods.",
    author: "Muhindo Annet",
    date: "2023",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKHqWMxdfdvwWrJbitGic4oNwPy91oZ0E41vbpwvkvFver65ac=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    text: "Nice place to relax. Well planned with fast WiFi. I visited the place on 5th June 2023. I was served by Dollar, a welcoming and charming lady. Expect the best when you visit.",
    author: "Miiro David",
    date: "2023",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU2a_gIom4m7c_kq1_ct_7Sqe7QuTawqcyOwsmp5GTqm9Rk9bNo=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    text: "Good customer care, good ambiance, best food, camping and accommodation. I was surely impressed.",
    author: "Arnold Ashaba",
    date: "2022",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKkXpFwyJK8v42aQ0Fc5qiG0rOKtK2XrAip1yjxfSS90c_rW_U=w72-h72-p-rp-mo-br100",
  },
  {
    text: "This is a beautiful place! It's clean and has a lot of comfort items to make you feel at home. We were in town for a stressful event and went back to very peaceful rooms. The best stay ever. The environment was pleasant and welcoming. Both check-in and check-out were professionally handled and easy.",
    author: "Wycliff Clinton",
    date: "2021",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUPtaWFK0uVXj7u0DD-WDgi9Rl1vUKf2EtJa2eS_qNrHGOIuxn4=w72-h72-p-rp-mo-br100",
  },
  {
    text: "If you are travelling between Kampala and Jinja and looking for accommodation in a quiet environment, safe of course, head here. The rooms consist of mixed accommodation; single, double and twins plus a dormitory. Cottages with grass thatch have a superb view of the Ssezibwa swamp and sunrise, and I would recommend them for honeymooners. Camping ground available and tours are arranged to Ssezibwa Falls, the sugar plant and tea plantation. Booking essential!",
    author: "Mamerito Ssenfuma",
    date: "2021",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVFmX15yA0y4hsCOsJTOK6OnaQyTPPIRDZsdOxPkMHSmqafWGtF=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    text: "The best place to be for a getaway holiday! Nice meals, very hospitable staff, very beautiful and peaceful sanctuary with an excellent view!!",
    author: "Bbosa Geofrey",
    date: "2021",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVf4qGrNBGCSelSBIVU4Ulpea3WwgKWINWbjPDdCbWhumQuywZ2=w72-h72-p-rp-mo-br100",
  },
  {
    text: "I had a very great time at Riverside Woods: the camping, bicycle riding, nice food, visit to Ssezibwa Falls. It's a place I would recommend anyone to visit, or to do group parties and outings.",
    author: "Mugume Jim",
    date: "2021",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKHqJ5xTzQCw2qwOncog0s6ywOPQ6Wsr0-tilxD77ticcDXdQ=w72-h72-p-rp-mo-br100",
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
        <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
          Real reviews from our guests on Google
        </p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <GoogleIcon />
          <span className="font-semibold">{GOOGLE_RATING} / 5</span>
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            {GOOGLE_REVIEW_COUNT} reviews on Google
          </Link>
        </div>

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
                    <Stars rating={testimonial.rating} />
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
