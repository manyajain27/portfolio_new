"use client"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

export default function HeroSection() {
  const buildControls = useAnimation()

  useEffect(() => {
    const animateBuild = async () => {
      // Initial build animation sequence
      await buildControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.6 }
      })
      
      // Continuous pulse effect
      buildControls.start({
        scale: [1, 1.02, 1],
        textShadow: [
          "0 0 0px rgba(var(--primary), 0)",
          "0 0 20px rgba(var(--primary), 0.3)",
          "0 0 0px rgba(var(--primary), 0)"
        ],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    }
    
    animateBuild()
  }, [buildControls])

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const buildWord = "build."
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
      <div className="container relative z-10 max-w-4xl text-center">
        <div className="space-y-12">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                i like to{" "}
              </span>
            </h1>
            
            {/* Animated BUILD word */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight relative"
              animate={buildControls}
              initial={{ opacity: 0, y: 30 }}
            >
              <span className="relative inline-block">
                {buildWord.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-primary dark:text-[hsl(43_33%_70%)]"

                    style={{
                      transformOrigin: "center bottom"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </motion.div>

          {/* Animated Accent Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div 
              className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              animate={{
                width: [128, 160, 128],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
  asChild
  size="lg"
  className="group dark:bg-[hsl(43_33%_70%)] dark:text-[#000] dark:hover:bg-[hsl(43_33%_65%)]"
>
                <a href="#projects"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth'
                });
      }}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className=" group">
                <Link
                  href="https://drive.google.com/file/d/1p2JTRN43b8A5zg3l7DKsYy23RqwaUerg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}