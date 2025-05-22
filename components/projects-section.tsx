"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg?height=300&width=400&text=E-commerce+Platform",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg?height=300&width=400&text=Task+Management+App",
  },
  {
    id: "project-3",
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media analytics with data visualization, reporting tools, and scheduling capabilities.",
    techStack: ["React", "D3.js", "Firebase", "Material UI"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg?height=300&width=400&text=Social+Media+Dashboard",
  },
  {
    id: "project-4",
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application with workout tracking, nutrition planning, and progress visualization.",
    techStack: ["React Native", "Expo", "Redux", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg?height=300&width=400&text=Mobile+Fitness+App",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-12 md:py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work, showcasing my skills in frontend and backend development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-hover"
          >
            <div className="bg-card border rounded-xl overflow-hidden h-full flex flex-col shadow-sm transition-all duration-300 hover:shadow-lg">
              {/* Card Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={300}
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 p-5 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {/* {project.techStack.length > 3 && (
                    <Badge variant="outline">+{project.techStack.length - 3}</Badge>
                  )} */}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto pt-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a className="dark:text-black" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 dark:text-black" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}