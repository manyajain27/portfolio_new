import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 pb-16">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
