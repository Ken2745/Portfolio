import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Experience.css";

const experiences = [
  {
    role: "Data Science Intern",
    company: "City of Virginia Beach – Department of Information Technology",
    date: "May 2025 – August 2025",
    description: [
      "Designed and implemented a real-time environmental data analytics pipeline using Python and the Breeze Technologies API, ingesting and processing 1.2M+ multivariate time-series sensor records across multiple monitoring locations.",
      "Performed exploratory and time-series analysis to identify air quality trends, anomalies, and high-risk conditions supporting environmental monitoring, early flood detection, and emergency preparedness.",
      "Produced weekly analytical reports and presentations translating complex technical findings into actionable insights for city leadership and operational teams.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "MAG Aerospace",
    date: "June 2023 – August 2023",
    description: [
      "Contributed to defense imaging and simulation pipelines by capturing and processing high-fidelity infrared and multi-camera datasets for 3D virtual reality combat training systems.",
      "Operated and coordinated multi-system imaging stations, ensuring accurate synchronization, data integrity, and repeatable capture workflows across controlled test environments.",
      "Supported end-to-end data workflows from image acquisition and preprocessing to engineering handoff, improving dataset usability for immersive training applications.",
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
