import * as React from "react"
import { cn } from "@/lib/utils"

interface ProseProps extends React.HTMLAttributes<HTMLElement> {
  as?: "article" | "div" | "section"
  variant?: "default" | "none"
}

const Prose = React.forwardRef<HTMLElement, ProseProps>(
  ({ className, as: Component = "article", variant = "default", ...props }, ref) => {
    const proseClasses = variant === "default" 
      ? "prose prose-lg max-w-none"
      : "";

    return React.createElement(Component, {
      ref,
      className: cn(proseClasses, className),
      ...props
    })
  }
)
Prose.displayName = "Prose"

export { Prose } 