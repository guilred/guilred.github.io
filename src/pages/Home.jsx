import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import WipProjectCard from '../components/WipProjectCard.jsx'
import { projects } from '../data/projects.js'
import { wipProjects } from '../data/wipProjects.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMeta(
    "Guilred's Portfolio",
    "Guilred's portfolio: finished projects and works in progress.",
  )

  return (
    <>
      <Hero />

      <section aria-labelledby="finished-projects-title">
        <h2 id="finished-projects-title">Finished Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="wip-projects-title">
        <h2 id="wip-projects-title">Works In Progress</h2>
        <div className="wip-stack">
          {wipProjects.map((project) => (
            <WipProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
