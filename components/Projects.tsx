import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projectsData } from '@/types/project'

export default function Projects() {
  const projectsList = projectsData

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects"/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsList.map((project) => (
            <Link
              key={project.id}
              href={project.url || `/project/${project.id}`} 
              target={project.url ? "_blank" : "_self"}  // Open external links in new tab
              rel={project.url ? "noopener noreferrer" : ""}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                       transform transition-all duration-300 hover:-translate-y-2 
                       shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                       hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                       dark:shadow-none dark:hover:shadow-2xl"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Project <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

