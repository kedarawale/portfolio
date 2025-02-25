import SectionTitle from './SectionTitle'

export default function Experiences() {
  const experiencesList = [
    {
      title: "Research Intern",
      company: "Florida State University",
      period: "Jan 2025 - Present",
      responsibilities: [
        "Collaborating in the implementation of GENIE watermarking framework for Graph Neural Networks using TensorFlow and PyG(PyTorch Geometric), developing modular components for watermark embedding and detection in link prediction tasks, to create an open-source package for seamless integration of watermarking capabilities in GNN applications."
      ],
      technologies: ["PyTorch", "GNN", "Machine Learning", "LLM"]
    },
    {
      "title": "Software Developer Intern",
      "company": "Tomorrows AI",
      "period": "Oct 2024 - Jan 2025",
      "responsibilities": [
          "Assisted in building and fine-tuning a specialized LLM model for electronic components using AWS SageMaker, AWS Bedrock. Collaborated on data collection and preprocessing pipelines that processed over 10,000 technical documents.",
          "Contributed to testing and deploying the model using Docker containers and AWS ECR, while helping implement automated testing workflows that reduced deployment time by 20%."
      ],
      "technologies": [
          "AWS",
          "CI/CD",
          "Docker",
          "LLM",
          "RestApi",
          "React",
          "Python",
          "TensorFlow"
      ]
  },
  {
    "title": "Support Analyst",
    "company": "Florida State University",
    "period": "May 2024 - August 2024",
    "responsibilities": [
        "Designed multiple Power BI dashboards for diverse student departments",
        "Implemented DAX formulas for complex calculations and M language for data modeling",
        "Achieved 20% improvement in data accuracy through enhanced dashboard development",
        "Collaborated with department heads to understand requirements and deliver targeted solutions"
    ],
    "technologies": [
        "Python",
        "PostgreSQL",
        "Microsoft Power Apps",
        "Microsoft Power BI"
    ]
},
  {
      "title": "Data Science Intern",
      "company": "Letsgrowmore",
      "period": "Feb 2022 - April 2022",
      "responsibilities": [
          
          "Engineered a customer churn prediction system using random forest and XGBoost algorithms in Python, improving accuracy by 13% compared to previous models. Used AWS SageMaker for model training, PostgreSQL for managing the database, and improved model performance through automatic parameter tuning making the system faster and efficient.",
          "Analyzed customer transaction data using Python and SQL to create clean datasets for business reporting. Built automated data cleaning scripts that reduced manual processing time by 20% and helped identify key customer spending patterns."
      ],
      "technologies": [
          "Python",
          "SQL",
          "Pandas",
          "Scikit-learn",
          "Microsoft Power BI"
      ]
  },
  {
      "title": "Web Developer Intern",
      "company": "Edify Accelerator",
      "period": "Oct 2020 - March 2021",
      "responsibilities": [
          "Developed and implemented user-friendly web pages with full stack backend integration for BloomIndia project",
          "Enhanced website functionality and optimized load times, achieving 15% decrease in bounce rate",
          "Integrated Geo Encoders and GeoMapping technology with Google Maps API",
          "Implemented real-time coordinate mapping through Leaflet for enhanced user experience",
          "Collaborated with cross-functional teams to complete tickets within deadlines"
      ],
      "technologies": [
          "Full Stack Development",
          "Google Maps API",
          "Leaflet",
          "GeoMapping",
          "Web Development"
      ]
  }
  ]

  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience"  />
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {experiencesList.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-blue-100 dark:before:to-blue-950"
            >
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-[6px] shadow-lg shadow-blue-500/50" />
              <div className="card p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm sm:text-base rounded-full mb-2 sm:mb-4">
                        {exp.period}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
                      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Responsibilities</h4>
                    <div className="grid sm:grid-cols-1 gap-2">
                      {exp.responsibilities.map((responsibility, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-500 dark:text-blue-400">•</span>
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm sm:text-base rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

