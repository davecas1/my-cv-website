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
      degree: "Master’s Degree in Data Analysis, Process Improvement and Decision Support Engineering",
      institution: "Universidad Politécnica de Valencia",
      duration: "Sep 2023 - Sep 2025",
      description: "Specialized in Machine Learning and volatility/risk modeling for econometric applications",
    },
    {
      degree: "Bachelor's Degree in Business Administration and Management",
      institution: "Universidad Politécnica de Valencia",
      duration: "Sep 2018 - Jun 2022",
      description: "Specialized in Information Systems.",
    },
    {
      degree: "Web Application Development Program",
      institution: "Labora",
      duration: "Dec 2022 - Aug 2023",
      description: "I learned JavaScript, TypeScript, React, Node.js, CSS, HTML and PHP",
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
      { name: "PHP", level : "intermediate"}
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
    data: [
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
  languages: [
    { name: "English", level: "B2" },
    { name: "Italian", level: "B2" },
    { name: "Spanish", level: "Native" },
    { name: "Catalan", level: "Native" },
  ],
  projects: [
    {
      title: "IBEX 35 Volatility Analysis Tool",
      description: [
        "A website that allows users to estimate the daily volatility of any IBEX 35 company using GARCH or Stochastic Volatility models. The site is fully developed in Shiny for R"
      ],
      technologies: ["Rstudio", "Shiny"],
      liveLink: "https://davidveloso.shinyapps.io/estimacin_volatilidad/",
    },
    {
      title: "Best route for the Fallas festival in Valencia.",
      description: [
        "A project I completed with classmates, applying a metaheuristic algorithm to determine the optimal route for visiting one of Valencia’s largest festivals. The project generated media interest and was covered by several newspapers"
      ],
      technologies: ["Python"],
      liveLink: "https://www.larazon.es/comunidad-valenciana/esta-ruta-perfecta-ver-fallas-seccion-especial-valencia_2024031665f5647e9e2a440001232c58.html",
    },
    {
      title: "Image Classifier Development",
      duration: "Feb 2024 - Present",
      description: [
        "Applied Principal Component Analysis (PCA) and Partial Least Squares (PLS) for dimensionality reduction and feature extraction from plant leaf images, improving the model's efficiency and performance.",
        "Developed and trained a Convolutional Neural Network (CNN) using PyTorch to classify images of plant leaves as either healthy or diseased.",
        "Utilized data augmentation techniques to increase model robustness, reducing overfitting and improving generalization.",
        "Visualized the model’s performance and analysis results using ggplot2 and matplotlib, providing insightful data for further improvements.",
        "Integrated OpenCV for image preprocessing, enhancing image quality and ensuring accurate classification.",
        "Leveraged R libraries like caret and pls for additional data analysis and model validation.",
      ],
      technologies: ["Python", "Rstudio", "MySQL", "MongoDB"],
    },
    {
      title: "Fish Image Analysis and Feature Extraction",
      description: [
        "This part of the project focused on descriptive analysis of fish images, applying the Prats-Ferrer and Bharati-MacGregor approaches across all three color channels. Textural transforms were used to extract relevant features, capturing structural and surface patterns of the specimen. Feature selection prioritized the most informative variables to feed into unsupervised defect detection using MSPC, enabling anomaly identification without labeled data. The workflow combined rigorous statistical methods with practical image analysis to characterize fish morphology and detect subtle defects."
      ],
      technologies: ["Rstudio", "Matlab"],
    },
    {
      title: "Hyperspectral Image Analysis in Pharmaceutical Compounds",
      description: [
        "This project is focused on hyperspectral imaging for pharmaceutical analysis, aiming to separate pure compounds from excipients in drug formulations. Three compounds were analyzed: HPMC (Hydroxypropyl Methylcellulose), Griseofulvin (GRISE), and their combination (COMB), across 121 wavelengths. Preprocessing included Standard Normal Variate (SNV) scaling to standardize pixel variance and Savitzky-Golay filtering (polynomial order 2, window size 13) to smooth spectral data. Multivariate Curve Resolution (MCR) and Principal Component Analysis (PCA) were applied using the Prats-Ferrer approach to generate distribution maps of pure spectra. Data visualization converted complex 3D spectral information into clear 2D maps, with distinct colors assigned to each compound."
      ],
      technologies: ["Matlab"]
    }
  ],
};