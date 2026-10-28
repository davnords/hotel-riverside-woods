import Image from "next/image"
import SectionHeading from "@/components/SectionHeading"

const attractions = [
    {
        image: "/ssezibwa/IMG_6140.JPG",
        title: "Ssezibwa Falls",
        distance: "25-minute walk",
        description:
            "A sacred site in Buganda culture, these beautiful falls are just a short walk from the resort. Experience the powerful waters and learn about their cultural significance.",
    },
    {
        image: "/mabira-forest.jpg",
        title: "Mabira Forest Reserve",
        distance: "Short drive",
        description:
            "One of Uganda's largest natural forests, offering hiking trails, zipline adventures, and rich biodiversity. Just a short drive from the resort.",
    },
]

export default function Attractions() {
    return (
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Just outside"
                    title="Nearby Attractions"
                    description="Discover the natural wonders and cultural heritage surrounding our resort."
                    className="mb-12"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {attractions.map((attraction) => (
                        <article
                            key={attraction.title}
                            className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={attraction.image}
                                    alt={attraction.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 32rem"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                                <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                                    {attraction.distance}
                                </span>
                            </div>
                            <div className="p-7">
                                <h3 className="font-display text-3xl font-semibold mb-3">{attraction.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {attraction.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
