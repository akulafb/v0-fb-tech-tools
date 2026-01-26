import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ToolCardProps {
  name: string
  description: string
  url: string
  logo: string
  bgColor?: string
}

export function ToolCard({ name, description, url, logo }: ToolCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="h-full border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 overflow-hidden">
        <div className="flex h-full flex-col items-center text-center p-4 gap-3">
          {/* Large High-Res Logo */}
          <div className="relative w-full flex items-center justify-center py-2">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24">
              <img
                src={logo || "/placeholder.svg"}
                alt={`${name} logo`}
                className="h-full w-full object-contain"
                crossOrigin="anonymous"
              />
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <ExternalLink className="h-3 w-3 text-primary" />
              </div>
            </div>
          </div>
          
          {/* Compact Content */}
          <div className="flex flex-col gap-1.5 w-full">
            <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-[11px] leading-snug text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </a>
  )
}
