export interface ProjectType {
  id: number
  title: string
  description: string
  image: string
  url: string 
  longDescription: string
  duration: string
  platform: string
  client: string
  objective: string
  designElements: string[]
  processHighlights: string[]
  technologies: string[]
  images: string[]
}

export const projectsData: ProjectType[] = [
    {
      "id": 1,
      "title": "Github Chatbot",
      "description": "AI-powered Github Repository Chatbot enabling interactive repository conversations and code generation",
      "image": "/chatbot.png?height=300&width=400",
      "url": "https://github.com/kedarawale/Github-chatbot",
      "longDescription": "An AI-powered Github Repository Chatbot that enables users to interactively chat with repositories, generate code, and learn concepts through a Streamlit interface. The system achieved a 20% improvement in query response times using OpenAI API and RAG pipeline.",
      "duration": "Not specified",
      "platform": "Web Application",
      "client": "Internal Project",
      "objective": "Create an interactive chatbot system for Github repositories to improve code understanding and generation",
      "designElements": [
        "Streamlit user interface",
        "RAG pipeline integration",
        "Vector store-based querying system",
        "Modular AI agent architecture"
      ],
      "processHighlights": [
        "Implementation of FAISS for efficient querying",
        "Integration of OpenAI API",
        "Development of modular architecture",
        "Custom AI agent development"
      ],
      "technologies": ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"],
      "images": [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      "id": 2,
      "title": "ExamCraft AI",
      "description": "AI-powered exam generator handling 500+ daily queries with customizable options",
      "image": "/examcraft.png?height=300&width=400",
      "url": "https://github.com/kedarawale/ExamCraft-AI",
      "longDescription": "An intelligent exam generation system using LangChain and Google Gemini API, capable of processing 500+ daily queries with customizable options for question types, quantity, difficulty levels, and automated answer generation.",
      "duration": "Not specified",
      "platform": "Web Application",
      "client": "Education Sector",
      "objective": "Create an automated exam generation system with high accuracy and customization options",
      "designElements": [
        "Customizable question parameters",
        "Automated answer generation",
        "ETL pipeline integration",
        "Vector similarity search"
      ],
      "processHighlights": [
        "Implementation of Sentence Transformers",
        "FAISS integration",
        "Context-aware question generation",
        "95% accuracy achievement"
      ],
      "technologies": ["LangChain", "Google Gemini API", "Sentence Transformers", "FAISS"],
      "images": [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      "id": 3,
      "title": "GeoSpatialScan",
      "description": "Advanced spatial search algorithm using KD-trees for efficient spatial analysis",
      "image": "/geospatialscan.png?height=300&width=400",
      "url": "https://github.com/kedarawale/GeoSpatialScan",
      "longDescription": "A sophisticated spatial analysis system implementing KD-trees with efficient pruning techniques, achieving 70% reduction in execution time for point-in-polygon queries on large 2D datasets.",
      "duration": "Not specified",
      "platform": "Software Library",
      "client": "Spatial Analysis Sector",
      "objective": "Develop an efficient spatial search algorithm for complex geometric problems",
      "designElements": [
        "KD-tree implementation",
        "Pruning techniques",
        "Optimized search strategies",
        "Large dataset handling"
      ],
      "processHighlights": [
        "Algorithm optimization",
        "Performance testing",
        "Large-scale data processing",
        "70% execution time reduction"
      ],
      "technologies": ["KD-trees", "Spatial Algorithms", "Geometric Computing"],
      "images": [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      "id": 4,
      "title": "Arch AI",
      "description": "Intelligent content analysis web app using Agentic RAG for multi-URL processing",
      "image": "/arch.png?height=300&width=400",
      "url": "https://github.com/kedarawale/Arch-AI",
      "longDescription": "An intelligent web application that processes multiple web URLs simultaneously, executing multi-step analysis to generate targeted summaries with 85% accuracy, significantly reducing comprehension time for large volumes of online content.",
      "duration": "Not specified",
      "platform": "Web Application",
      "client": "Content Analysis Sector",
      "objective": "Create an efficient content analysis system for processing multiple web sources simultaneously",
      "designElements": [
        "Multi-URL processing",
        "Targeted summary generation",
        "Agentic RAG implementation",
        "Web content analysis"
      ],
      "processHighlights": [
        "Multi-step analysis pipeline",
        "85% accuracy achievement",
        "Content comprehension optimization",
        "Large-scale content processing"
      ],
      "technologies": ["Agentic RAG", "Web Scraping", "Natural Language Processing"],
      "images": [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      "id": 5,
      "title": "Object Recognition using ResNet50",
      "description": "Advanced object recognition system using ResNet50 architecture achieving 93% accuracy on CIFAR-10 dataset",
      "image": "/objectrecognition.png?height=300&width=400",
      "url": "https://github.com/kedarawale",
      "longDescription": "An implementation of object recognition using the ResNet50 architecture, customized with advanced features like upsampling layers, dropout, and batch normalization. The system achieved a remarkable 93% test accuracy on the CIFAR-10 dataset, which contains 60,000 32x32 RGB images [[1]].",
      "duration": "Not specified",
      "platform": "Deep Learning Model",
      "client": "Research Project",
      "objective": "Develop a high-accuracy object recognition system using ResNet50 architecture with optimized performance on the CIFAR-10 dataset",
      "designElements": [
        "ResNet50 architecture implementation",
        "Upsampling layers",
        "Dropout mechanisms",
        "Batch normalization",
        "Feature map refinement"
      ],
      "processHighlights": [
        "93% test accuracy achievement",
        "Implementation of advanced CNN architecture",
        "Overfitting mitigation strategies",
        "Strong generalization capability"
      ],
      "technologies": [
        "Python",
        "Deep Learning",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "OpenCV" 
      ],
      "images": [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
  {
    "id": 5,
    "title": "Customer Churn Analysis Dashboard",
    "description": "Comprehensive PowerBI dashboard for analyzing and predicting customer churn patterns in banking sector",
    "image": "/customerchurn.png?height=300&width=400",
    "url": "https://github.com/kedarawale",
    "longDescription": "A sophisticated PowerBI dashboard leveraging DAX for advanced calculations to analyze multiple customer churn factors. The system processes various metrics including credit scores, tenure, account balances, demographics, and activity levels to generate predictive churn probability metrics, enabling data-driven customer retention strategies.",
    "duration": "Not specified",
    "platform": "Business Intelligence Dashboard",
    "client": "Banking Sector",
    "objective": "Create a comprehensive analytics solution to identify, predict, and reduce customer churn through actionable insights",
    "designElements": [
      "Interactive visualization components",
      "Predictive churn metrics",
      "Multi-factor analysis framework",
      "Customer segmentation views"
    ],
    "processHighlights": [
      "Advanced DAX implementation",
      "Multi-dimensional data integration",
      "Predictive analytics modeling",
      "Customer behavior tracking"
    ],
    "technologies": [
      "PowerBI",
      "DAX",
      "Data Analytics",
      "Predictive Modeling"
    ],
    "images": [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ]
  }
]

