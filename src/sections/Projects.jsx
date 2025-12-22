import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Projects.css";

const projects = [
  {
    title: "Real-Time Air Quality Hotspot Detection",
    description:
      "Analyzes real-time air quality data from Breeze sensors to identify pollution hotspots.",
    tech: ["Python", "Pandas", "Scikit-learn", "LSTM"],
    github:
      "https://github.com/Ken2745/Real-Time-Air-Quality-Hotspot-Detection-and-Multi-Sensor-Analytics",
  },
  {
    title: "Safety and Response App",
    description:
      "A safety-focused mobile application designed to assist users during emergencies.",
    tech: ["React", "Firebase", "Node.js"],
    github: "https://github.com/yourusername/safety-app",
  },
  {
    title: "Strava Performance Analytics",
    description:
      "End-to-end data pipeline and analytics platform using the Strava API.",
    tech: ["Python", "ETL", "EDA", "Visualization"],
    github: "https://github.com/Ken2745/Strava-Performance-Analytics",
  },
  {
    title: "AI Grammar Scoring Engine",
    description:
      "AI system that evaluates spoken grammar using speech-to-text and NLP.",
    tech: ["TensorFlow", "NLP", "Audio", "Python"],
    github: "https://github.com/Ken2745/AI_Grammar_Scoring_Engine",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Vite", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mywork">
        <div className="mywork-title">
          <h1>My Projects</h1>
        </div>

        <div className="mywork-container">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card-inner">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </Section>
  );
}
