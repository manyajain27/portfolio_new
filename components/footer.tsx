"use client"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Manya Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
