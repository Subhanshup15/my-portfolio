import React from "react";
import "../App.css";

const skills = {
  backendFrameworks: ["PHP", "Laravel", "CodeIgniter", "MVC Frameworks"],
  apis: ["RESTful API Design & Development", "JSON", "Ajax"],
  database: [
    "MySQL",
    "Database Design",
    "Query Optimization",
    "phpMyAdmin",
    "SQL Developer"
  ],
  frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Angular"],
  tools: ["VS Code", "Git", "Postman"],
  servers: ["Apache", "Live Server (aayushhms.com)"]
};

const experience = [
  {
    role: "Software Developer & Team Lead",
    company: "Bright Sea Technology",
    location: "Pune, Maharashtra",
    period: "September 2023 – 2025",
    responsibilities: [
      "Developed full-stack web applications using PHP, Laravel, CodeIgniter, and MySQL.",
      "Optimized SQL queries and database design, reducing server load by ~30%.",
      "Implemented and secured RESTful APIs (OAuth 2.0) with MySQL performance tuning.",
      "Customized and implemented key modules such as finance, accounts, and role-based access control.",
      "Designed responsive UIs using HTML, CSS, JavaScript, and Bootstrap to improve usability.",
      "Led a small development team, conducted code reviews, and mentored new hires.",
      "Managed end-to-end communication with 100+ clients and handled deployments via cPanel (aayushhm.com)."
    ]
  }
];

const projects = [
  {
    name: "Automated Hospital Operations System (HMS)",
    company: "Bright Sea Technology",
    role: "Full Stack Developer",
    techStack: ["PHP (MVC)", "HTML", "CSS", "JavaScript", "Ajax", "MySQL"],
    description:
      "Scalable web-based hospital management system with automated workflows and real-time access.",
    highlights: [
      "Implemented financial automation and invoice generation.",
      "Added secure role-based permissions for different user types.",
      "Deployed in production for real-time usage."
    ]
  },
  {
    name: "Web-Based Hotel Reservation Platform",
    company: "Bright Sea Technology",
    role: "Full Stack Developer",
    techStack: ["PHP (MVC)", "jQuery", "HTML", "CSS", "JavaScript", "MySQL"],
    description:
      "Responsive hotel reservation platform with integrated table booking and online food ordering.",
    highlights: [
      "Optimized database structures to minimize query latency.",
      "Delivered a mobile-friendly interface for better user experience."
    ]
  },
  {
    name: "PMC PARBHANI AYURVEDIC MEDICINE COLLEGE",
    company: "Bright Sea Technology",
    role: "Full Stack Developer",
    link: "https://pmcparbhani.com/",
    techStack: [" CORE PHP ", "jQuery", "HTML", "CSS", "JavaScript", "MySQL"],
    description:
      "Developed a dynamic and responsive website for an Mbbs college with a fully functional admin panel",
    highlights: [
      "Focused on user-friendly UI/UX, responsive design, and efficient content management..",
      "Delivered a mobile-friendly interface for better user experience.",
      "Ensured proper form validations, secure admin login, and dynamic content loading using jQuery and AJAX.",

    ]
  },
  {
    name: "Personal Portfolio Website (React + CSS)",
    role: "Full Stack Developer",
    techStack: [" React.js ", "JavaScript (ES6)", "CSS3", "Flexbox", "Hooks (useState)"],
    description:
      "Developed a fully responsive personal portfolio website to showcase my profile, professional skills, family details, and completed projects. Implemented a modern UI using React functional components, CSS animations, and modular design patterns.",
    highlights: [
      "Glassmorphism UI with neon border accents.",
      "Image protection (disable download, drag, right-click).",
      "Reusable components for easy scaling.",
      "Smooth animations and responsive layout"
    ]
  }
];

const education = [
  {
    degree: "MCS (Master of Computer Science)",
    institution: "PDEA, Pune",
    university: "Savitribai Phule Pune University",
    year: "2023",
    score: "CGPA 8.3 (approx.)"
  },
  {
    degree: "BCS (Bachelor of Computer Science)",
    institution: "PDEA, Pune",
    university: "Savitribai Phule Pune University",
    year: "2021",
    score: "72.45%"
  },

];

const contactInfo = {
  name: "SUBHANSHU PARDESHI",
  title: "Software Developer & Team Lead",
  email: "subhanshup.15@gmail.com",
  phone: "+91 8668646744",
  location: "Hadapsar, Pune, Maharashtra, India",
  dob: "17 July 1999",
  languages: ["English", "Marathi", "Hindi"]
};

const SkillCard = ({ title, items }) => (
  <div className="card skill-card">
    <h4>{title}</h4>
    <ul className="list inline">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  return (
    <div className="portfolio">

      {/* HERO */}
      <header className="hero" id="home">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I’m</p>
          <h1 className="hero-name">{contactInfo.name}</h1>
          <h2 className="hero-title">{contactInfo.title}</h2>
          <p className="hero-summary">
            Innovative and results-driven Software Developer & Team Lead with
            2+ years of full-stack experience in the PHP ecosystem
            (Laravel, CodeIgniter). Strong in designing robust backend
            architectures, building and securing RESTful APIs, and optimizing
            MySQL database performance for high-traffic applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
        </div>
      </header>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h3 className="section-title">Technical Skills</h3>
        <div className="grid grid-2">
          <SkillCard title="Backend Frameworks" items={skills.backendFrameworks} />
          <SkillCard title="APIs & Integration" items={skills.apis} />
          <SkillCard title="Database & ORM" items={skills.database} />
          <SkillCard title="Frontend / UI" items={skills.frontend} />
          <SkillCard title="Servers" items={skills.servers} />
          <SkillCard title="Tools" items={skills.tools} />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <h3 className="section-title">Experience</h3>
        {experience.map((exp, index) => (
          <div className="card experience-card" key={index}>
            <div className="experience-header">
              <h4>{exp.role}</h4>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-company">
              {exp.company} • {exp.location}
            </p>
            <ul className="list">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      {/* <section className="section" id="projects">
        <h3 className="section-title">Projects</h3>
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div className="card project-card" key={index}>
              <h4>{project.name}</h4>
              <p className="project-meta">
                {project.role} @ {project.company}
              </p>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <ul className="list">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
              <p className="project-description">{project.link}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="section" id="projects">
        <h3 className="section-title">Projects</h3>

        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div className="card project-card" key={index}>

              <h4>{project.name}</h4>
              <p className="project-meta">
                {project.role} @ <strong>{project.company}</strong>
              </p>

              <p className="project-description">{project.description}</p>

              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>

              <ul className="list">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <h3 className="section-title">Education</h3>
        <div className="grid grid-3">
          {education.map((edu, index) => (
            <div className="card education-card" key={index}>
              <h4>{edu.degree}</h4>
              <p className="education-inst">{edu.institution}</p>
              <p className="education-uni">
                {edu.university || edu.board}
              </p>
              <p className="education-year">Year: {edu.year}</p>
              <p className="education-score">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h3 className="section-title">Contact</h3>
        <div className="card contact-card">
          <p><strong>Name:</strong> {contactInfo.name}</p>
          <p><strong>Location:</strong> {contactInfo.location}</p>
          <p><strong>Date of Birth:</strong> {contactInfo.dob}</p>
          <p><strong>Languages:</strong> {contactInfo.languages.join(", ")}</p>
          <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
        </div>
      </section>

    </div>
  );
};

export default Home;