import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import PhoneButton from "@/components/PhoneButton";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Hotel, Warehouse, FileText, UtensilsCrossed, TentTree, Star, ChevronDown } from "lucide-react";
import Conveniences from "@/components/Conveniences";
import Navbar from "@/components/Navbar";
import Attractions from "@/components/Attractions"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button";
import EmailButton from "@/components/EmailButton";
import Link from "next/link";
import FAQ from "@/components/FAQ"
import Videos from "@/components/Videos"
import SectionHeading from "@/components/SectionHeading"

const roomImages = [
  "/rooms/IMG_6169.JPG",
  "/rooms/IMG_6170.JPG",
  "/rooms/IMG_6168.JPG",
  "/rooms/IMG_6165.JPG",
];

const foodImages = [
  "/hotel/restaurant_2.jpeg",
  "/food/picture-1.jpeg",
  "/food/picture-2.jpeg",
  "/food/picture-3.jpeg",
  "/food/picture-4.jpeg",
];

const facilityImages = [
  "/hotel/IMG_6122.JPG",
  "/hotel/IMG_6163.JPG",
  "/hotel/IMG_6164.JPG",
  "/hotel/IMG_6167.JPG",
  "/hotel/IMG_6173.JPG",
  "/hotel/IMG_6176.JPG",
  "/hotel/IMG_6177.JPG",
  "/hotel/IMG_6178.JPG",
  "/hotel/IMG_6180.JPG",
];


const campingImages = [
  "/camping/1.jpg",
  "/camping/2.jpg",
  "/camping/3.jpg",
  "/camping/4.jpg",
  "/camping/5.jpg",
  "/camping/6.jpg",
  "/camping/7.jpg",
];

const documents = [
  {
    icon: UtensilsCrossed,
    title: "Food Menu",
    description: "Explore our delicious offerings",
    cta: "View Menu",
    href: "/prices/food-menu.jpg",
  },
  {
    icon: Coffee,
    title: "Drinks Menu",
    description: "Browse our beverage selection",
    cta: "View Menu",
    href: "/prices/drink-menu.jpg",
  },
  {
    icon: Hotel,
    title: "Accommodation Pricing",
    description: "View our room rates",
    cta: "View Pricing",
    href: "/prices/accomodation-price.jpg",
  },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image}>
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 56rem"
                  className="object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative h-[90vh] min-h-[560px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hotel/IMG_6180.JPG"
              alt="Riverside Woods Resort"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
          </div>
          <div className="relative z-10 text-center text-white px-4 animate-fade-up">
            <p className="eyebrow justify-center !text-white/70 mb-5">
              <span className="h-px w-6 bg-white/50" aria-hidden />
              Mukono, Uganda
            </p>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-5 leading-[1.05]">
              Riverside Woods Resort
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-9 max-w-xl mx-auto">
              Your natural escape near Ssezibwa Falls
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <PhoneButton />
              <EmailButton />
            </div>
            <Link
              href="https://www.google.com/maps?cid=10764857979203730488"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="flex" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.6 from 49 Google reviews
            </Link>
          </div>
          <Link
            href="#about"
            aria-label="Scroll to content"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="h-7 w-7 animate-bounce" />
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 md:px-8 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow justify-center mb-4">
              <span className="h-px w-6 bg-primary/40" aria-hidden />
              Established 2019
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Welcome to Riverside Woods
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Riverside Woods Resort is a tranquil haven born from the dream of three families.
              Whether you are seeking a peaceful day trip, planning a grand celebration, or looking for a serene
              getaway in nature, our resort offers the perfect setting. Enjoy our famous barbecue at &quot;Camp David&quot;,
              relax on covered verandas with stunning valley views, and immerse yourself in the natural beauty
              of Uganda.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 md:px-8 bg-muted/60 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Stay with us"
              title="Experience Riverside Woods"
              description="Thirty-two acres of gardens, cottages and open terraces overlooking the Ssezibwa valley."
              className="mb-12"
            />

            <Tabs defaultValue="rooms" className="w-full">
              <TabsList className="mx-auto mb-10 flex w-full max-w-lg rounded-full bg-background p-1 shadow-sm border border-border/70">
                <TabsTrigger value="rooms" className="flex-1 rounded-full gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none">
                  <Hotel className="hidden sm:block h-4 w-4" />
                  Rooms
                </TabsTrigger>
                <TabsTrigger value="facilities" className="flex-1 rounded-full gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none">
                  <Warehouse className="hidden sm:block h-4 w-4" />
                  Facilities
                </TabsTrigger>
                <TabsTrigger value="camping" className="flex-1 rounded-full gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none">
                  <TentTree className="hidden sm:block h-4 w-4" />
                  Camping
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rooms">
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    Enjoy luxurious rooms and suites designed for your comfort, complete with mosquito nets. On request, our staff ensures a bug-free evening for a peaceful stay.
                  </p>
                  <ImageCarousel images={roomImages} alt="Room" />
                </div>
              </TabsContent>

              <TabsContent value="dining">
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    Indulge in a culinary journey at our restaurant and bar, where we serve a delightful blend of local Ugandan flavors and international cuisine. Whether you are craving traditional dishes crafted with authentic ingredients or global favorites prepared to perfection, our menu offers something for everyone.
                  </p>
                  <ImageCarousel images={foodImages} alt="Food" />
                </div>
              </TabsContent>

              <TabsContent value="facilities">
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    Explore our modern amenities including conference rooms and beautiful gardens.
                  </p>
                  <ImageCarousel images={facilityImages} alt="Facility" />
                </div>
              </TabsContent>

              <TabsContent value="camping">
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    Experience camping in our beautiful facilities near nature.
                  </p>
                  <ImageCarousel images={campingImages} alt="Camping" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos">
          <Videos />
        </section>

        {/* Conveniences Section */}
        <section id="conveniences">
          <Conveniences />
        </section>

        {/* Attractions Section */}
        <section id="attractions">
          <Attractions />
        </section>

        {/* Menu & Pricing Section */}
        <section id="menu-pricing" className="py-24 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Before you arrive"
              title="Menu & Pricing"
              description="Our current menus and room rates, straight from the resort."
              className="mb-12"
            />

            <div className="grid gap-6 md:grid-cols-3">
              {documents.map((doc) => (
                <Card
                  key={doc.title}
                  className="group border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/10">
                        <doc.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6">{doc.description}</p>
                      <Link href={doc.href} className="w-full" target="_blank">
                        <Button variant="outline" className="w-full rounded-full border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground">
                          <FileText className="mr-2 h-4 w-4" />
                          {doc.cta}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location">
          <Location />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Add FAQ section before Footer */}
        <section id="faq">
          <FAQ />
        </section>

        <Footer />
      </main>
    </>
  );
}
