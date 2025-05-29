"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Size = "sm" | "md" | "lg";

interface ScrollToTopButtonProps {
  threshold?: number;
  className?: string;
  size?: Size;
  showTooltip?: boolean;
}

export default function ScrollToTopButton({ 
  threshold = 300,
  className = "",
  size = "md",
  showTooltip = true
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Determine if the button should be visible based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    
    // Run once to check initial state
    handleScroll()
    
    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Size variants
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={cn(
            "fixed bottom-6 right-6 bg-primary dark:text-black text-primary-foreground rounded-full shadow-md flex items-center justify-center z-50 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors",
            sizeClasses[size],
            className
          )}
        >
          <ChevronUp className={cn(
            "transition-transform",
            size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
          )} />
          
          {showTooltip && (
            <span className="absolute -top-9 right-0 bg-background text-foreground text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              Scroll to top
            </span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}