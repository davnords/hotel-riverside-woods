import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    eyebrow?: string
    title: string
    description?: string
    align?: "center" | "left"
    className?: string
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    const centered = align === "center"

    return (
        <div
            className={cn(
                "max-w-2xl",
                centered ? "mx-auto text-center" : "text-left",
                className
            )}
        >
            {eyebrow && (
                <p className="eyebrow mb-4">
                    <span className="h-px w-6 bg-primary/40" aria-hidden />
                    {eyebrow}
                </p>
            )}
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    )
}
