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
import { Coffee, Hotel, Mail, Warehouse, FileText, UtensilsCrossed, TentTree } from "lucide-react";
import Conveniences from "@/components/Conveniences";
import Navbar from "@/components/Navbar";
import Attractions from "@/components/Attractions"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button";
import EmailButton from "@/components/EmailButton";
import Link from "next/link";
import FAQ from "@/components/FAQ"

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

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hotel/IMG_6180.JPG"
              alt="Riverside Woods Resort"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Riverside Woods Resort</h1>
            <p className="text-xl md:text-2xl mb-8">Your Natural Escape Near Ssezibwa Falls</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <PhoneButton />
              <EmailButton />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Welcome to Riverside Woods
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Established in 2019, Riverside Woods Resort is a tranquil haven born from the dream of three families.
              Whether you are seeking a peaceful day trip, planning a grand celebration, or looking for a serene
              getaway in nature, our resort offers the perfect setting. Enjoy our famous barbecue at  &quot;Camp David&quot;,
              relax on covered verandas with stunning valley views, and immerse yourself in the natural beauty
              of Uganda.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experience Riverside Woods
            </h2>

            <Tabs defaultValue="rooms" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="rooms" className="flex items-center gap-2">
                  <Hotel className="h-4 w-4" />
                  <span className="hidden sm:inline">Rooms</span>
                  <span className="sm:hidden">Rooms</span>
                </TabsTrigger>
                {/* <TabsTrigger value="dining" className="flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  <span className="hidden sm:inline">Camp David BBQ</span>
                  <span className="sm:hidden">Dining</span>
                </TabsTrigger> */}
                <TabsTrigger value="facilities" className="flex items-center gap-2">
                  <Warehouse className="h-4 w-4" />
                  <span className="hidden sm:inline">Facilities</span>
                  <span className="sm:hidden">More</span>
                </TabsTrigger>
                <TabsTrigger value="camping" className="flex items-center gap-2">
                  <TentTree className="h-4 w-4" />
                  <span className="hidden sm:inline">Camping</span>
                  <span className="sm:hidden">More</span>
                </TabsTrigger>

              </TabsList>

              <TabsContent value="rooms">
                <div className="space-y-4">
                  <p className="text-center text-gray-600 mb-8">
                    Enjoy luxurious rooms and suites designed for your comfort, complete with mosquito nets. On request, our staff ensures a bug-free evening for a peaceful stay.
                  </p>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {roomImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <Card>
                            <CardContent className="p-0 aspect-video relative">
                              <Image
                                src={image}
                                alt={`Room Image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>

              <TabsContent value="dining">
                <div className="space-y-4">
                  <p className="text-center text-gray-600 mb-8">
                    Indulge in a culinary journey at our restaurant and bar, where we serve a delightful blend of local Ugandan flavors and international cuisine. Whether you are craving traditional dishes crafted with authentic ingredients or global favorites prepared to perfection, our menu offers something for everyone.
                  </p>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {foodImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <Card>
                            <CardContent className="p-0 aspect-video relative">
                              <Image
                                src={image}
                                alt={`Food Image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>

              <TabsContent value="facilities">
                <div className="space-y-4">
                  <p className="text-center text-gray-600 mb-8">
                    Explore our modern amenities including conference rooms and beautiful gardens
                  </p>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {facilityImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <Card>
                            <CardContent className="p-0 aspect-video relative">
                              <Image
                                src={image}
                                alt={`Facility Image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>
              <TabsContent value="camping">
                <div className="space-y-4">
                  <p className="text-center text-gray-600 mb-8">
                    Experience camping in our beautiful facilities near nature
                  </p>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {campingImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <Card>
                            <CardContent className="p-0 aspect-video relative">
                              <Image
                                src={image}
                                alt={`Camping Image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>
            </Tabs>
          </div>
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
        <section id="menu-pricing" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Menu & Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <UtensilsCrossed className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Food Menu</h3>
                    <p className="text-sm text-gray-500 mb-4">Explore our delicious offerings</p>
                    <Link href={'/prices/food-menu.jpg'} className="w-full" target="_blank">
                      <Button
                        className="w-full"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Menu
                      </Button>
                    </Link>

                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Drinks Menu</h3>
                    <p className="text-sm text-gray-500 mb-4">Browse our beverage selection</p>
                    <Link href={'/prices/drink-menu.jpg'} className="w-full" target="_blank">
                      <Button
                        className="w-full"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Hotel className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Accommodation Pricing</h3>
                    <p className="text-sm text-gray-500 mb-4">View our room rates</p>
                    <Link href={'/prices/accomodation-price.jpg'} className="w-full" target="_blank">
                      <Button
                        className="w-full"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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
