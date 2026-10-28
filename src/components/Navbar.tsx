'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Hotel,
    UtensilsCrossed,
    MapPin,
    Phone,
    Map,
    Film,
    Menu,
    Check,
} from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    {
        title: "Rooms & Dining",
        icon: Hotel,
        href: "#experience",
    },
    {
        title: "Amenities",
        icon: UtensilsCrossed,
        href: "#conveniences",
    },
    {
        title: "Videos",
        icon: Film,
        href: "#videos",
    },
    {
        title: "Attractions",
        icon: Map,
        href: "#attractions",
    },
    {
        title: "Location",
        icon: MapPin,
        href: "#location",
    },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    const [hasCopied, setHasCopied] = useState(false);
    const phoneNumber = "+256 701 430625";

    const copyPhoneNumber = async () => {
        await navigator.clipboard.writeText(phoneNumber);
        setHasCopied(true);
        toast.success('Phone number copied!')
        setTimeout(() => setHasCopied(false), 2000);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            const offset = 80 // Height of the navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/85 backdrop-blur-md border-b border-border/70 shadow-[0_1px_20px_-12px_rgba(0,0,0,0.3)]"
                    : "bg-gradient-to-b from-black/40 to-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        className={cn(
                            "font-display text-2xl font-semibold tracking-tight transition-colors",
                            isScrolled ? "text-foreground" : "text-white"
                        )}
                    >
                        Riverside Woods
                    </a>

                    {/* Navigation Items */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.title}
                                className={cn(
                                    "relative px-3 py-2 text-sm font-medium transition-colors",
                                    "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                                    isScrolled
                                        ? "text-muted-foreground hover:text-foreground after:bg-primary"
                                        : "text-white/85 hover:text-white after:bg-white"
                                )}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <Button
                        size="sm"
                        className={cn(
                            "hidden md:flex items-center gap-2 rounded-full px-5",
                            !isScrolled && "bg-white text-foreground hover:bg-white/90"
                        )}
                        onClick={copyPhoneNumber}
                    >
                        {hasCopied ? (
                            <Check className="h-4 w-4 text-green-600" />
                        ) : (
                            <Phone className="h-4 w-4" />
                        )}
                        Contact us
                    </Button>

                    {/* Mobile Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "md:hidden",
                                    isScrolled ? "text-foreground" : "text-white hover:bg-white/15 hover:text-white"
                                )}
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="pt-20">
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Button
                                        key={item.title}
                                        variant="ghost"
                                        className="flex items-center gap-3 w-full justify-start h-12"
                                        onClick={() => {
                                            scrollToSection(item.href)
                                        }}
                                    >
                                        <item.icon className="h-4 w-4 text-primary" />
                                        {item.title}
                                    </Button>
                                ))}
                                <Button
                                    className="flex items-center gap-2 w-full mt-3 h-12 rounded-full"
                                    onClick={copyPhoneNumber}
                                >
                                    {hasCopied ? (
                                        <Check className="h-4 w-4" />
                                    ) : (
                                        <Phone className="h-4 w-4" />
                                    )}
                                    Contact us
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    )
}
