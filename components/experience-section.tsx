"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    logo: "TI",
    logoColor: "#4f46e5",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led the development of the company's flagship product, a SaaS platform for data analytics. Implemented new features, improved performance, and mentored junior developers.",
    achievements: [
      "Reduced page load time by 40% through code optimization and lazy loading",
      "Implemented a component library that increased development speed by 30%",
      "Led the migration from class components to functional components with hooks",
    ],
    skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    logo: "DS",
    logoColor: "#0ea5e9",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Worked on multiple client projects, developing both frontend and backend solutions. Collaborated with design and product teams to deliver high-quality applications.",
    achievements: [
      "Developed a real-time dashboard that increased client satisfaction by 25%",
      "Implemented authentication and authorization systems for enterprise clients",
      "Optimized database queries resulting in 50% faster response times",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "StartUp Ventures",
    logo: "SV",
    logoColor: "#10b981",
    location: "Remote",
    period: "2018 - 2020",
    description:
      "Contributed to the development of a mobile application for fitness tracking. Worked in an agile team environment with daily stand-ups and sprint planning.",
    achievements: [
      "Implemented key features that contributed to a 20% increase in user engagement",
      "Collaborated with UX designers to improve the user interface",
      "Fixed critical bugs that improved app stability by 35%",
    ],
    skills: ["React Native", "JavaScript", "Firebase", "Redux"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="container py-12 md:py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and the companies I've had the pleasure to work with.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={experience.id}
                className={cn(
                  "border-l-4 pl-6 mb-6 relative before:absolute before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-2 before:top-7",
                  index === experiences.length - 1 ? "border-l-muted" : "border-l-primary before:z-10",
                )}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold"
                      style={{ backgroundColor: experience.logoColor }}
                    >
                      {experience.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-muted-foreground">
                        <span className="font-medium">{experience.company}</span>
                        <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground" />
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground" />
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4 pl-16">
                    <p>{experience.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
