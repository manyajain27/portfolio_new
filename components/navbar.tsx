"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Experience", path: "/#experience" },
]

const socialLinks = [
  { name: "GitHub", path: "https://github.com/manyajain27", icon: <Github className="h-5 w-5" /> },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/manya-jain-7a3200284/", icon: <Linkedin className="h-5 w-5" /> },
  { name: "Email", path: "mailto:jainmanya2701@gmail.com", icon: <Mail className="h-5 w-5" /> },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl text-primary dark:text-primary">
          Manya Jain
        </Link>

        {/* Desktop Navigation - UNCHANGED */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://manya-blog.vercel.app/"
            target="_blank"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/blog" && "text-foreground font-medium",
            )}
          >
            Blog
          </Link>

          <div className="flex items-center gap-7">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
            <ModeToggle className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </div>
        </nav>

        {/* Mobile Navigation - FIXED */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="https://manya-blog.vercel.app/"
            target="_blank"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/blog" && "text-foreground font-medium",
            )}
          >
            Blog
          </Link>
          <ModeToggle className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - FIXED */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 p-6 md:hidden animate-in">
          <nav className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={cn(
                      "text-lg font-medium hover:text-primary transition-colors",
                      pathname === link.path && "text-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-muted-foreground">Connect</h3>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}