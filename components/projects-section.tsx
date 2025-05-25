"use client"
import { useState, useRef  } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


const projects = [
  {
    id: "project-7",
    title: "Swyde",
    description:
      "Building Swyde, my best project yet. Launching soon!",
    techStack: ["Founder", "React Native","Expo", "TypeScript", "Supabase","Realtime"],
    liveLink: "#",
    githubLink: "#",
    video: "/videos/swyde.mp4",
    coverImage: "/images/swyde.png"
  },
  {
    id: "project-1",
    title: "Tinder Clone",
    description:
      "Developed a fully functional Tinder clone using React Native Expo and Firebase, featuring a swiping card interface, matching algorithm, and live chat functionality for matched users.",
    techStack: ["React Native","Expo", "TypeScript", "Tailwind CSS", "Firebase"],
    liveLink: "#",
    githubLink: "https://github.com/manyajain27/tinder_clone",
    coverImage: "/images/tinder.png",
  },
  {
    id: "project-2",
    title: "Brew Your Experiences",
    description:
      "Designed and developed a website for a travel company to enable users to book customized travel plans. Integrated features like email newsletter subscriptions and framer motion animations for better engagement.",
    techStack: ["React", "JavaScript","Framer Motion", "Django", "Email SMTP", "SEO"],
    liveLink: "https://brewyourexperiences.com",
    githubLink: "https://github.com/manyajain27/brewyourexperiences",
    video: "/videos/bye.mp4",
    coverImage: "/images/bye.png",
  },
  {
    id: "project-3",
    title: "Real-Time Web Chat App",
    description:
      "Created a real-time web chat app completely in django, using django channels and redis for real-time communication. The app supports multiple chat rooms, private messaging, and user authentication.",
    techStack: ["Django", "Django Channels", "Websockets", "Redis"],
    liveLink: "https://real-time-chatapp-3.onrender.com/",
    githubLink: "https://github.com/manyajain27/real_time_chatapp",
    video: "/videos/chatapp.mp4",
    coverImage: "/images/chatapp.png",
  },
  {
    id: "project-4",
    title: "NyaySetu",
    description:
      "Hackathon Project: A platform similar to quora and reddit for lawyers where they can write about the political issues and the viewers can upvote, downvote",
    techStack: ["React", "JavaScript", "Gemini AI", "Clerk"],
    liveLink: "https://nyaysetu.vercel.app",
    githubLink: "https://github.com/manyajain27/nyaysetu",
    video: "/videos/nyaysetu.mp4",
    coverImage: "/images/nyaysetu.png",
  },
  {
    id: "project-5",
    title: "Resume Builder",
    description:
      "Created a resume builder platform in ReactJS and Django. Implemented features allowing users to build and preview resumes in real-time and extract data from uploaded resumes automatically.",
    techStack: ["React", "JavaScript", "Django", "Robust Auth", "PDF to OCR","Gemini AI","JWT"],
    liveLink: "https://resume-builder-taupe-nine.vercel.app/resume",
    githubLink: "https://github.com/manyajain27/Resume-Builder",
    video: "/videos/resume.mp4",
    coverImage: "/images/resume.png",
  },
  {
    id: "project-6",
    title: "CivicSphere",
    description:
      "A platform for skill sharing where users can offer and book services. Developed the backend APIs using Django and integrated with a React frontend.",
    techStack: ["React", "JavaScript", "Django","Flutter","JWT"],
    liveLink: "https://civicsphere.vercel.app",
    githubLink: "https://github.com/manyajain27/civicsphere_backend",
    coverImage: "/images/civicsphere.png",
  },
  {
    id: "project-8",
    title: "Real Estate App",
    description:
      "A real estate app built with React Native and Expo, featuring property listings, user authentication, and a chat system for buyers and sellers.",
    techStack: ["React Native","Expo", "TypeScript", "Tailwind CSS","Appwrite"],
    liveLink: "#",
    githubLink: "https://github.com/manyajain27/real-estate-app-practice",
    coverImage: "/images/realestate.png",
  },
  
]

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

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
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => videoRefs.current[project.id]?.play()}
            onViewportLeave={() => videoRefs.current[project.id]?.pause()}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-hover"
          >
            <div className="bg-card border rounded-xl overflow-hidden h-full flex flex-col shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="h-48 relative overflow-hidden">
                {project.video ? (
                  <video
                    ref={(el) => { videoRefs.current[project.id] = el; }}
                    src={project.video}
                    poster={project.coverImage || undefined}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    muted
                    loop
                    playsInline
                  />
                ) : project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : null}
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    disabled={project.githubLink === "#"}
                  >
                    {project.githubLink === "#" ? (
                      <span className="flex items-center justify-center opacity-60 cursor-not-allowed">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </span>
                    ) : (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    )}
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    className="flex-1"
                    disabled={project.liveLink === "#"}
                  >
                    {project.liveLink === "#" ? (
                      <span className="flex items-center justify-center opacity-60 cursor-not-allowed dark:text-black">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </span>
                    ) : (
                      <a className="dark:text-black" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 dark:text-black" /> Live Demo
                      </a>
                    )}
                  </Button>

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(!showAll)} variant="outline" className="px-6 rounded-full text-primary dark:text-primary text-md border-primary dark:border-secondary border-2">
            {showAll ? "See Less" : "See More"}
          </Button>
        </div>
      )}
    </section>
  )
}