export const cvData = {
  personalInfo: {
    name: "David Veloso Castelló",
    title: "Data Scientist and Machine Learning Engineer",
    email: "davidvelosocastello@gmail.com",
    phone: "+34 661 883 905 and +39 351 444 0139",
    location: "Valencia, Spain",
    linkedin: "https://www.linkedin.com/in/davecas1",
    github: "https://github.com/davecas1",
  },
  summary:
    "Background in business administration with graduate-level training in data analysis, process optimization, and decision science. Research experience at Politecnico di Milano in Enrico Zio’s laboratory, operating advanced simulation frameworks. Thesis work in volatility extended into market risk dynamics. Technical base in stochastic-volatility models, GARCH-type structures, statistical inference, and machine-learning methods for fintech and quantitative risk. Output centers on building and refining models while integrating economic mechanisms to maintain decision relevance.",
  experience: [
    {
      title: "Researcher Assistant",
      company: "Politecnico di Milano.",
      duration: "Feb 2025 - Aug 2025",
      description: [
        "Learned and applied advanced simulation methods (AK-MCS, Subset Simulation, Line Sampling, Bayesian Line Sampling) for reliability and risk analysis.",
        "Implemented simulation workflows in MATLAB, including model setup, execution, and diagnostic routines.",
        "Performed statistical post-processing and sensitivity analysis in MATLAB and R to extract uncertainty, performance metrics, and model-behavior insights.",
        "Supported methodological development within the research group by validating simulation results and documenting reproducible procedures.",
      ],
      technologies: ["Matlab", "R"],
    },
    {
      title: "Data Analyst Internship",
      company: "ODEC",
      duration: "Oct 2021 - Dec 2021",
      description: [
        "Data processing for studies and surveys, with emphasis on continuous customer-satisfaction series.",
        "Programming and data analysis in Python within structured environments (Visual Studio Code, Docker), using MySQL for ingestion, cleaning, and transformation.",
        "ETL implementation: extraction from multiple sources, normalization and transformation, loading into stable analytical structures.",
        "Automated file handling and consistency checks across tables and dissemination platforms.",
        "Machine-learning development: linear and regularized regression, tree-based models and ensembles (Random Forest, Gradient Boosting, XGBoost), probabilistic models, clustering (k-means, DBSCAN), dimensionality reduction (PCA), and full evaluation/tuning pipelines for internal analytical workflows.",
      ],
      technologies: ["Python", "Visual Studio Code", "MySQL", "Docker"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      duration: "Sep 2017 - May 2019",
      description: "Specialized in Distributed Systems and Artificial Intelligence.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      duration: "Sep 2013 - May 2017",
      description: "Graduated with honors.",
    },
  ],
  skills: {
    frontend: [
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "JavaScript", level: "advanced" },
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
    ],
    backend: [
      { name: "Node.js", level: "beginner" },
      { name: "Python", level: "intermediate" },
      { name: "Django", level: "beginner" },
    ],
    databases: [
      { name: "PostgreSQL", level: "beginner" },
      { name: "MongoDB", level: "beginner" },
      { name: "MySQL", level: "intermediate" },
    ],
    devops: [
      { name: "Docker", level: "beginner" },
      { name: "AWS", level: "beginner" },
      { name: "Git", level: "beginner" },
    ],
    tools: [
      { name: "VS Code", level: "intermediate" },
      { name: "Conda", level: "beginner" },
    ],
    data: [ // New category for data-related skills
      { name: "SQL", level: "intermediate" },
      { name: "Data Analysis", level: "advanced" },
      { name: "ETL", level: "intermediate" },
      { name: "Power BI", level: "intermediate" },
      { name: "R", level: "advanced" },
      { name: "RStudio", level: "advanced" },
      { name: "Statgraphics", level: "advanced" },
      { name: "SPSS", level: "intermediate" },
      { name: "Matlab", level: "advanced" },
      { name: "Minitab", level: "advanced" },
    ],
  },
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website to showcase projects, skills, and experience. Built with modern web technologies.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
      githubLink: "https://github.com/johndoe/portfolio",
      liveLink: "https://www.johndoe.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "Developed a full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.",
      technologies: ["Next.js", "Node.js", "Stripe API", "MongoDB", "Redux"],
      githubLink: "https://github.com/johndoe/ecommerce-platform",
      liveLink: "https://ecommerce.johndoe.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application allowing users to create, assign, and track tasks within teams.",
      technologies: ["React", "Firebase", "Chakra UI", "TypeScript"],
      githubLink: "https://github.com/johndoe/task-manager",
      liveLink: "https://taskmanager.johndoe.com",
    },
  ],
};