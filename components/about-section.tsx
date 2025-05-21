"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-70" />
          <div className="relative aspect-square max-w-md mx-auto bg-card border rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-muted flex items-center justify-center mb-6">
                  <span className="text-5xl font-bold">MJ</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Manya Jain</h3>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="space-y-4 text-lg">
            <p>
              I'm a passionate software engineer specializing in creating elegant, user-focused web and mobile
              applications. With expertise in React, React Native, and Django, I blend technical precision with creative
              problem-solving.
            </p>
            <p>
              My approach centers on clean, maintainable code and intuitive user experiences. I believe great software
              should be both powerful and a joy to use, which guides every project I undertake.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge through technical writing and mentorship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
