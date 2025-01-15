import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const contactInfo = [
    {
      name: 'Email',
      value: 'ka23l@fsu.edu',
      icon: Mail,
      link: 'mailto:ka23l@fsu.edu'
    },
    {
      name: 'Phone',
      value: '+1 (408) 394-5347',
      icon: Phone,
      link: 'tel:+14083945347'
    },
    {
      name: 'LinkedIn',
      value: 'Kedar Awale',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/kedarawale/'
    },
    {
      name: 'GitHub',
      value: '@kedarawale',
      icon: Github,
      link: 'https://github.com/kedarawale'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get in touch" />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

