import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TreePine, Map, Mountain } from "lucide-react"

export default function Attractions() {
    return (
        <section className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Map className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Nearby Attractions
                    </h2>
                </div>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Discover the natural wonders and cultural heritage surrounding our resort
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative h-[200px]">
                                <Image
                                    src="/ssezibwa/IMG_6140.JPG" // You'll need this image
                                    alt="Sezibwa Falls"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Sezibwa Falls</h3>
                                <p className="text-gray-600">
                                    A sacred site in Buganda culture, these beautiful falls are just a short 
                                    walk from the resort. Experience the powerful waters and learn about 
                                    their cultural significance.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative h-[200px]">
                                <Image
                                    src="/mabira-forest.jpg" // You'll need this image
                                    alt="Mabira Forest"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Mabira Forest Reserve</h3>
                                <p className="text-gray-600">
                                    One of Uganda's largest natural forests, offering hiking trails, 
                                    zipline adventures, and rich biodiversity. Just a short drive 
                                    from the resort.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
} 