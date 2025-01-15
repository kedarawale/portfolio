'use client'

import { useCallback } from 'react'
import { ArrowDownIcon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Add a class to the body for extra smooth scrolling
      document.body.classList.add('smooth-scroll');
      
      // Remove the class after scrolling is complete
      setTimeout(() => {
        document.body.classList.remove('smooth-scroll');
      }, 1500); // Adjust this timeout to match the scroll duration
    }
  }, [])

  return (
    <div className={`min-h-[100vh] flex flex-col items-center justify-center relative
      ${theme === 'light' 
        ? 'bg-gradient-to-b from-blue-50 to-white text-gray-900' 
        : 'bg-gradient-to-b from-black to-gray-900 text-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <div 
          className={`inline-block px-6 py-3 rounded-full mb-8 animate-fadeIn
            ${theme === 'light'
              ? 'bg-white/80 backdrop-blur-sm shadow-lg'
              : 'bg-white/10 backdrop-blur-sm'}`}
        >
          <p className={`text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            Hello, I'm Kedar 👋
          </p>
        </div>
       
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 animate-fadeIn animation-delay-600
          ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          Software Engineer | AWS Certified Machine Learning Engineer | Specializing in AI/MLOps and Full-Stack Development
        </p>
      </div>
      <div className="mt-12 animate-fadeIn animation-delay-900">
        <button 
          onClick={scrollToAbout}
          className={`rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
            ${theme === 'light' 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-white text-black hover:bg-gray-100'}
            animate-gentle-bounce`}
          aria-label="Scroll to About section"
        >
          <ArrowDownIcon className="w-6 h-6" />
        </button>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-24 
        ${theme === 'light'
          ? 'bg-gradient-to-t from-white to-transparent'
          : 'bg-gradient-to-t from-gray-900 to-transparent'}`}>
      </div>
    </div>
  )
}

