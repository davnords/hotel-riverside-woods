import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Users, Tent, Bike, ParkingCircle, UtensilsCrossed } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"

const faqs = [
  {
    icon: UtensilsCrossed,
    question: "What is the seating capacity for dining?",
    answer: "We can seat approximately 70-100 people indoors (in the restaurant and meeting room). Additionally, we can seat 15-20 people on the balcony in front of the bar area."
  },
  {
    icon: Users,
    question: "What are the grill arrangements and pricing?",
    answer: "We can accommodate up to 150 persons with 15 special grills. The price is approximately UGX 25,000 per person."
  },
  {
    icon: Tent,
    question: "How many tents can fit in the camping area?",
    answer: "With our extensive terraces at Riverside Woods Ssezibwa, we can accommodate an unlimited number of campers. You can bring your own tent or rent from us."
  },
  {
    icon: Bike,
    question: "Do you offer bicycle rentals?",
    answer: "Yes, we have 20 bicycles available for rent at UGX 20,000 each, perfect for exploring the surrounding area."
  },
  {
    icon: ParkingCircle,
    question: "What are some unique features of Riverside Woods?",
    answer: "Our extensive terraces can accommodate large events with over 500 participants. We also provide ample parking space for all our guests."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently Asked Questions"
          className="mb-12"
        />

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border/70 bg-card px-5 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <faq.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed pl-8 pb-2">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
