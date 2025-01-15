import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <main>
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

