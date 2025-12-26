import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Projects.css";

const projects = [
  {
    title: "Real-Time Air Quality Hotspot Detection and Multi-Sensor Analytics",
    description:
      "This project analyzes real-time air quality data collected from Breeze Technologies sensors deployed across Virginia Beach.",
    tech: ["Python", "Pandas", "Scikit-learn", "LSTM"],
    github:
      "https://github.com/Ken2745/Real-Time-Air-Quality-Hotspot-Detection-and-Multi-Sensor-Analytics",
  },
  {
  title: "Heart Disease Prediction System",
  description:
    "Machine learning system that predicts heart disease risk using clinical data, featuring a responsive frontend and an AI-powered backend for real-time inference.",
  tech: ["Python","FastAPI", "Scikit-learn", "XGBoost", "SVM", "KNN", "Pandas", "NumPy"],
  tech2:["Python", "Scikit-learn", "XGBoost", "SVM", "KNN", "Pandas", "NumPy", "FastAPI", "REST APIs", "HTML", "JavaScript"],
  github: "https://github.com/Ken2745/heartdisease_prediction",
  },

  {
    title: "Strava Performance Analytics",
    description:
      "End-to-end data pipeline and analytics platform using the Strava API.",
      tech: ["Python", "Strava API", "Pandas", "NumPy", "scikit-learn", "SQL", "PostgresSql", "Power BI"],
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
    title: "Diabetes Risk Classification System",
    description:
      "This project develops supervised machine learning models to predict the likelihood of diabetes among adults in the United States.",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "CatBoost","Logistic Regression", "Random Forest"],
    github: "https://github.com/Ken2745/Diabetes-Detection",
  },
    {
    title: "The Coupon App (Safety & Emergency Response Mobile App)",
    description:
      "A safety-focused mobile application designed to assist users during emergencies.",
    tech: ["Java", "Android SDK", "TensorFlow Lite", "Porcupine", "Django", "SQLite", "REST APIs", "Docker"],
    github: "https://github.com/Ken2745/the-coupon-app",
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
