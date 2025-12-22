import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Projects.css";

const projects = [
  {
    title: "Air Quality Prediction",
    description:
      "Predictive modeling and visualization of air pollution trends using real-world NYC and national datasets.",
    tech: ["Python", "Pandas", "Scikit-learn", "ARIMA", "LSTM"],
    github: "https://github.com/yourusername/air-quality-prediction",
  },
  {
    title: "Fatal Vehicle Crash Analysis",
    description:
      "Machine learning models to analyze and predict fatal vehicle crashes using NYC collision data.",
    tech: ["Python", "ML", "EDA", "Data Visualization"],
    github: "https://github.com/yourusername/fatal-crash-analysis",
  },
  {
    title: "AI Grammar Scoring Engine",
    description:
      "An AI-powered system that evaluates spoken grammar using speech-to-text and NLP techniques.",
    tech: ["Python", "TensorFlow", "NLP", "Audio Processing"],
    github: "https://github.com/yourusername/ai-grammar-engine",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Vite", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
