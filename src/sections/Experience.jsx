import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Experience.css";

const experiences = [
  {
    role: "AI / ML Engineer",
    company: "Freelance / Independent",
    date: "2024 – Present",
    description: [
      "Developed AI-driven applications using Python, TensorFlow, and PyTorch.",
      "Built ML pipelines for data preprocessing, model training, and evaluation.",
      "Applied LSTM and ARIMA models for time-series forecasting projects.",
    ],
  },
  {
    role: "Data Science Graduate Student",
    company: "Old Dominion University",
    date: "2024 – Present",
    description: [
      "Focused on machine learning, big data analytics, and AI systems.",
      "Completed projects in air quality prediction and crash fatality analysis.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Academic & Personal Projects",
    date: "2022 – 2024",
    description: [
      "Built full-stack applications using React, Node.js, and SQL.",
      "Designed REST APIs and deployed containerized apps with Docker.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />

            <Card>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="date">{exp.date}</span>

                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
