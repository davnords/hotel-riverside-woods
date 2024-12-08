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
import { Coffee, Hotel, Warehouse } from "lucide-react";
import Conveniences from "@/components/Conveniences";
import Navbar from "@/components/Navbar";
import Attractions from "@/components/Attractions"
import Footer from "@/components/Footer"

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
            <p className="text-xl md:text-2xl mb-8">Your Natural Escape Near Sezibwa Falls</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <PhoneButton />
              {/* <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 transition-all duration-200"
                
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button> */}
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
              <TabsList className="grid w-full grid-cols-2 mb-8">
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
                    Indulge in a culinary journey at our restaurant and bar, where we serve a delightful blend of local Ugandan flavors and international cuisine. Whether you’re craving traditional dishes crafted with authentic ingredients or global favorites prepared to perfection, our menu offers something for everyone.
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

        {/* Location Section */}
        <section id="location">
          <Location />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        <Footer />
      </main>
    </>
  );
}
