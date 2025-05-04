import { Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Us</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <Link href="tel:+256123456789" className="hover:text-primary transition-colors">
                                    +256 701 430625
                                </Link>
                                <Link href="tel:+256752502177" className="hover:text-primary transition-colors">
                                    +256 752 502177
                                </Link>
                                <Link href="tel:+256783920588" className="hover:text-primary transition-colors">
                                    +256 783 920588
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <Link href="mailto:riversidewoods.ssezibwa@gmail.com" className="hover:text-primary transition-colors">
                                    riversidewoods.ssezibwa@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                
                                <p>Riverside Woods Resort,<br />Ssezibwa Falls Road,<br />3.9km off Jinja-Kampala Road, Uganda</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                            <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link href="#experience" className="hover:text-primary transition-colors">Rooms & Camping</Link>
                            <Link href="#menu-pricing" className="hover:text-primary transition-colors">Menu & Pricing</Link>
                            <Link href="#attractions" className="hover:text-primary transition-colors">Attractions</Link>
                            <Link href="#location" className="hover:text-primary transition-colors">Location</Link>
                            <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                        </div>
                    </div>

                    {/* Resort Hours */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Resort Hours</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Check-in: 2:00 PM</p>
                            <p>Check-out: 11:00 AM</p>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Riverside Woods Resort. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 