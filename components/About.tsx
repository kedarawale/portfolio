import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="About me"  />
        
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="relative group max-w-md mx-auto">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/Headshot2.png?height=600&width=600"
                  alt="Your Name"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Hello! I'm Kedar Awale, a graduate student, tech enthusiast, and a problem solver, currently pursuing my Master's in Computer Science at Florida State University. With roots in Pune and wings spread across the USA, I love building smart systems that solve real-world problems. I work with a wide range of technologies, from cloud platforms to machine learning, and I enjoy transforming complex data into valuable insights. I'm actively looking for full-time software engineering and machine learning roles starting May 2025.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Currently, I'm working as a Software Developer Intern at Tomorrow's AI, where I focus on MLOps and fine-tuning large language models. My tech journey has been diverse - from building web solutions at Edify Accelerator to analyzing data at Letsgrowmore. Each role has helped me grow as a developer. With AWS certifications in Cloud and Machine Learning, I bring both strong technical knowledge and hands-on experience to any team.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm driven by curiosity and equipped with skills in AI, cloud computing, and software development. I'm always excited to take on new technical challenges and create innovative solutions. If you're looking for someone who combines technical expertise with fresh perspectives and can transform ideas into impactful solutions, let's connect! I'm open to meaningful conversations and potential collaborations.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link 
                href="/resume.pdf"
                className="btn btn-primary text-base px-6 py-3 hover:-translate-y-1"
              >
                Download Resume
              </Link>
              <Link 
                href="https://www.linkedin.com/in/kedarawale/"
                className="btn btn-outline text-base px-6 py-3 hover:-translate-y-1"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

