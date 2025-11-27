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
        "Led the development of a new customer relationship management (CRM) platform using React, Node.js, and PostgreSQL.",
        "Implemented robust API endpoints and integrated third-party services, improving data synchronization by 30%.",
        "Mentored junior developers and conducted code reviews, fostering a collaborative team environment.",
      ],
      technologies: ["Matlab", "R"],
    },
    {
      title: "Software Developer",
      company: "Innovate Corp.",
      duration: "Mar 2019 - Dec 2021",
      description: [
        "Developed and maintained e-commerce web applications, contributing to a 20% increase in online sales.",
        "Collaborated with UX/UI designers to translate wireframes into responsive and interactive user interfaces.",
        "Optimized application performance, reducing page load times by 15%.",
      ],
      technologies: ["Angular", "Java Spring Boot", "MySQL", "Docker"],
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
      { name: "React", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Redux", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
    ],
    backend: [
      { name: "Node.js", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "Django", level: "beginner" },
      { name: "REST APIs", level: "advanced" },
      { name: "GraphQL", level: "intermediate" },
    ],
    databases: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "Redis", level: "beginner" },
    ],
    devops: [
      { name: "Docker", level: "intermediate" },
      { name: "AWS", level: "intermediate" },
      { name: "Vercel", level: "advanced" },
      { name: "Git", level: "advanced" },
      { name: "CI/CD", level: "intermediate" },
    ],
    tools: [
      { name: "Jira", level: "advanced" },
      { name: "Figma", level: "intermediate" },
      { name: "VS Code", level: "advanced" },
    ],
    data: [ // New category for data-related skills
      { name: "SQL", level: "advanced" },
      { name: "Data Analysis", level: "intermediate" },
      { name: "ETL", level: "beginner" },
      { name: "Power BI", level: "intermediate" },
    ],
  }, // Changed ']' to '}' here
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