import type React from "react"
import type { Metadata } from "next"
import { Signika_Negative } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-signika",
})

export const metadata: Metadata = {
  title: "Manya Jain",
  description: "Fullstack developer specializing in React, React Native, and Django",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${signika.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}