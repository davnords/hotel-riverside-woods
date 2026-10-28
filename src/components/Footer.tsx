import { Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const phoneNumbers = ["+256 701 430625", "+256 752 502177", "+256 783 920588"]

const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Rooms & Camping", href: "#experience" },
    { label: "Videos", href: "#videos" },
    { label: "Menu & Pricing", href: "#menu-pricing" },
    { label: "Attractions", href: "#attractions" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand & contact */}
                    <div className="space-y-5">
                        <h3 className="font-display text-2xl font-semibold">Riverside Woods</h3>
                        <div className="space-y-4 text-sm text-primary-foreground/70">
                            <div className="flex items-start gap-3">
                                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col gap-1">
                                    {phoneNumbers.map((number) => (
                                        <Link
                                            key={number}
                                            href={`tel:${number.replace(/\s/g, "")}`}
                                            className="hover:text-primary-foreground transition-colors"
                                        >
                                            {number}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <Link
                                    href="mailto:riversidewoods.ssezibwa@gmail.com"
                                    className="break-all hover:text-primary-foreground transition-colors"
                                >
                                    riversidewoods.ssezibwa@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <p className="leading-relaxed">
                                    Riverside Woods Resort,
                                    <br />
                                    Ssezibwa Falls Road,
                                    <br />
                                    3.9 km off Jinja&ndash;Kampala Road, Uganda
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h3 className="font-semibold text-sm uppercase tracking-[0.14em] text-primary-foreground/60">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5 text-sm text-primary-foreground/70">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit hover:text-primary-foreground transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resort Hours */}
                    <div className="space-y-5">
                        <h3 className="font-semibold text-sm uppercase tracking-[0.14em] text-primary-foreground/60">
                            Resort Hours
                        </h3>
                        <div className="space-y-2 text-sm text-primary-foreground/70">
                            <p>Check-in: 2:00 PM</p>
                            <p>Check-out: 11:00 AM</p>
                        </div>
                    </div>
                </div>

                <Separator className="my-10 bg-primary-foreground/15" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                    <p>© {currentYear} Riverside Woods Resort. All rights reserved.</p>
                    <Link
                        href="https://www.google.com/maps?cid=10764857979203730488"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-foreground transition-colors"
                    >
                        Find us on Google Maps
                    </Link>
                </div>
            </div>
        </footer>
    )
}
