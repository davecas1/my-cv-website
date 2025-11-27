export const cvData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://www.johndoe.com", // Optional
  },
  summary:
    "Highly motivated and results-oriented Full Stack Developer with 5+ years of experience in building and deploying scalable web applications. Proficient in React, Node.js, and various database technologies. Passionate about creating intuitive user experiences and writing clean, efficient code.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description: [
        "Led the development of a new customer relationship management (CRM) platform using React, Node.js, and PostgreSQL.",
        "Implemented robust API endpoints and integrated third-party services, improving data synchronization by 30%.",
        "Mentored junior developers and conducted code reviews, fostering a collaborative team environment.",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
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