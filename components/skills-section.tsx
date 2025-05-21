"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Django", "Express", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Testing Library", "Agile", "Figma"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-card border rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
