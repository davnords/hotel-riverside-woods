import SectionHeading from "@/components/SectionHeading"

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
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Watch"
                    title="Riverside Woods in Motion"
                    description="A few clips from the resort, straight from our social media."
                    className="mb-12"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <figure
                            key={video.src}
                            className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <video
                                className="w-full aspect-video bg-black"
                                src={video.src}
                                poster={video.poster}
                                controls
                                playsInline
                                preload="none"
                            />
                            <figcaption className="p-6">
                                <h3 className="font-semibold text-xl mb-2">{video.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
