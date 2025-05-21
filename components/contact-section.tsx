"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real implementation
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Thanks for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="container py-12 md:py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-muted-foreground">
            Feel free to reach out through the form or connect with me directly through these channels.
          </p>

          <div className="space-y-4 pt-4">
            <a
              href="mailto:jainmanya2701@gmail.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              jainmanya2701@gmail.com
            </a>
            <a
              href="https://github.com/manyajain27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              manyajain27
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              Manya Jain
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
