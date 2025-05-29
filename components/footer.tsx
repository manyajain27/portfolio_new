"use client"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Manya Jain. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              All systems online
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}