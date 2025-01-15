import SectionTitle from './SectionTitle'

export default function Education() {
  const educationList = [
    {
      degree: "Master's in Computer Science",
      school: "Florida State University",
      year: "2023 - 2025",
      coursework: [
        "Advanced Algorithms",
        "Advance Database Systems",
        "Software Engineering",
        "Advance Data Science",
        "Advance Operating Systems",
        "Data Mining",
        "Computer Networks and Administration",
        "Artificial Intelligence"
      ]
    },
    {
      degree: "Honors in Data Science",
      school: "Savitribai Phule Pune University",
      year: "2021 - 2023",
      coursework: [
        "Machine Learning",
        "Statistics",
        "Data Visualization",
        "Artificial Intelligence for Big Data Analytics"
      ]
      
    },
    {
      degree: "Bachelor's in Computer Engineering",
      school: "Savitribai Phule Pune University",
      year: "2019 - 2023",
      coursework: [
        "Object-Oriented Programming",
        "Web Development Technologies",
        "Software Design Patterns",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks"
      ]
      
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" />
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-blue-100 dark:before:to-blue-950"
            >
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-[6px] shadow-lg shadow-blue-500/50" />
              <div className="card p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full mb-2">
                        {edu.year}
                      </span>
                      <h3 className="text-2xl font-bold font-display">{edu.degree}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{edu.school}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-500">•</span>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

