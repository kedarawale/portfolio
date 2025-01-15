'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { projectsData } from '@/types/project'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Laptop, ExternalLink, ChevronDown } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { theme } = useTheme()
  const project = projectsData.find(p => p.id === parseInt(params.id))
  const contentRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = contentRef.current?.querySelectorAll('section')
      
      sections?.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionBottom = sectionTop + section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
          section.classList.add('fade-in')
        } else {
          section.classList.remove('fade-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!project) {
    notFound()
  }

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display opacity-0 animate-fadeIn">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-300">
            {project.description}
          </p>
          <button
            onClick={scrollToContent}
            className="animate-bounce opacity-0 animate-fadeIn animation-delay-600"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 py-16 space-y-24">
        <nav className="sticky top-20 z-10 bg-white dark:bg-gray-900 py-4 mb-8">
          <ul className="flex justify-center space-x-4 text-sm">
            {['overview', 'objective', 'features', 'process', 'technologies', 'gallery', 'impact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`${
                    activeSection === section
                      ? 'text-blue-500 font-semibold'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  } transition-colors duration-200`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="overview" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {project.longDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full
              ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
              <Laptop className="w-4 h-4" />
              <span>{project.platform}</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full
              ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full
                ${theme === 'light'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'}
                transition-colors`}
            >
              Visit Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="objective" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Project Objective</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {project.objective}
          </p>
        </section>

        <section id="features" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.designElements.map((element, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">{element}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Development Process</h2>
          <div className="space-y-8">
            {project.processHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">{highlight}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="technologies" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105
                  ${theme === 'light'
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    : 'bg-blue-900/30 text-blue-400 hover:bg-blue-800/50'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="gallery" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View Larger</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Project Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            This project significantly improved the client's operational efficiency and user engagement. 
            It resulted in a 40% increase in user retention and a 25% boost in overall productivity. 
            The solution's scalability also allowed the client to expand their services to new markets, 
            leading to a substantial growth in their customer base.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-500 mb-2 transition-all duration-300 group-hover:scale-110">40%</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-blue-500">Increase in User Retention</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-500 mb-2 transition-all duration-300 group-hover:scale-110">25%</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-blue-500">Boost in Productivity</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-500 mb-2 transition-all duration-300 group-hover:scale-110">3x</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-blue-500">Customer Base Growth</div>
            </div>
          </div>
        </section>

        <section className="fade-in transition-all duration-500 opacity-0 transform translate-y-10">
          <Link 
            href="/#projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full
              ${theme === 'light'
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                : 'bg-gray-800 hover:bg-gray-700 text-white'}
              transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </section>
      </div>
    </div>
  )
}

