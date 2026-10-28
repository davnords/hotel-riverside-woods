import { Card, CardContent } from "@/components/ui/card"
import { Film } from "lucide-react"

const videos = [
    {
        src: "/videos/riverside-tour.mp4",
        poster: "/videos/riverside-tour.jpg",
        title: "Cozy Cottages",
        description: "A short tour of our thatched cottages, gardens and valley views.",
    },
    {
        src: "/videos/riverside-drone.mp4",
        poster: "/videos/riverside-drone.jpg",
        title: "Drone Shoot",
        description: "The 32-acre grounds from above, with Ssezibwa River and the surrounding hills.",
    },
    {
        src: "/videos/riverside-camping.mp4",
        poster: "/videos/riverside-camping.jpg",
        title: "Camping Experience",
        description: "Tents on the lawn, campfire evenings and farm-to-fork meals with friends.",
    },
]

export default function Videos() {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Film className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Riverside Woods in Motion
                    </h2>
                </div>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    A few clips from the resort, straight from our social media
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <Card key={video.src} className="overflow-hidden">
                            <CardContent className="p-0">
                                <video
                                    className="w-full aspect-video bg-black"
                                    src={video.src}
                                    poster={video.poster}
                                    controls
                                    playsInline
                                    preload="none"
                                />
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                                    <p className="text-sm text-gray-600">{video.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
