"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container relative z-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="">Manya Jain</span>
              </h1>
              <h2 className="text-3xl md:text-4xl mt-2 text-muted-foreground font-light">Software Engineer</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-px w-24 bg-primary"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-xl text-muted-foreground">
                I create elegant, user-focused web and mobile applications with React, React Native, and Django.
              </p>

              <p className="text-muted-foreground">
                I'm a passionate software engineer specializing in creating intuitive digital experiences. With
                expertise in frontend and backend development, I blend technical precision with creative problem-solving
                to build software that's both powerful and a joy to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
              <Link 
              href="https://drive.google.com/file/d/1p2JTRN43b8A5zg3l7DKsYy23RqwaUerg/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto hidden md:block"
          >
          </motion.div>
        </div>
      </div>
    </section>
  )
}
