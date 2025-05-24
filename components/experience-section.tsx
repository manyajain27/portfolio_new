"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "exp-1",
    role: "Lead Backend Developer",
    company: "ThinkLocal AI",
    image: "/images/local.png",
    location: "Remote",
    period: "Mar 2025 - Present",
    description:
      "Part of the Django backend team, focusing on building apis for realtime chat.",
    achievements: [
      "Part of the Django backend team, focusing on building apis for realtime chat.",
    ],
    skills: ["Django", "DRF", "Redis", "WebSockets"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer Intern",
    company: "Quickyearning Private Limited",
    image: "/images/QPL.jpg",
    location: "Mumbai, India",
    period: "Nov 2024 - Jan 2025",
    description:
      "Part of the frontend team, focusing on building responsive and user-friendly web applications. ",
    achievements: [
      "Collaborated with the development team to integrate frontend components with backend APIs.",
      "Contributed to 1000+ lines of code for the company's main website.",
      "Ensured effective communication and teamwork in a fast-paced development environment.",
    ],
    skills: ["React", "JavaScript", "Framer Motion"],
  },
  {
    id: "exp-3",
    role: "Full Stack Django Mentee",
    company: "DJ Unicode",
    image: "/images/unicode.jpg",
    location: "DJSCE, Mumbai",
    period: "Aug 2024 - Present",
    description:
      "Worked on multiple Django and React projects, developing both frontend and backend solutions. Collaborated with design and flutter teams to deliver high-quality applications.",
    achievements: [
      "Developed the backend APIs for CivicSphere, a platform for skill sharing",
      "Created a coding game in React for Celestia24, a Unicode event",
      "Helped participants at HackPrep2.0 solve django errors and doubts",
    ],
    skills: ["ReactJs", "Django", "React Native"],
  },
  // {
  //   id: "exp-4",
  //   role: "Technical Com-Committee Member",
  //   company: "DJ Literary Society",
  //   logo: "SV",
  //   logoColor: "#10b981",
  //   location: "DJSCE, Mumbai",
  //   period: "Oct 2024 - May 2025",
  //   description:
  //     "Developing and maintaining a full-stack website for the literary society.",
    
  //   achievements: [
  //     ""
  //   ],
  //   skills: ["React", "JavaScript"],
  // },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
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
                    >
                      <img className="w-12 h-12 rounded-full flex items-center justify-center " src={experience.image}/>
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
