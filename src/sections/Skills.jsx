import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Skills.css";

const categories = {
  languages: {
  label: "Programming Languages",
  skills: [
    { name: "Python", level: 95, desc: "AI, ML, backend & scripting" },
    { name: "JavaScript", level: 85, desc: "Frontend & backend development" },
    { name: "TypeScript", level: 80, desc: "Type-safe JavaScript" },
    { name: "SQL", level: 95, desc: "Relational databases & analytics" },
    { name: "Java", level: 95, desc: "Object-oriented programming" },
    { name: "C++", level: 90, desc: "Systems & performance-focused code" },
  ],
},

  ai: {
    label: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 80, desc: "Deep learning framework" },
      { name: "PyTorch", level: 80, desc: "Research-focused ML framework" },
      { name: "Pandas", level: 90, desc: "Data manipulation & analysis" },
      { name: "NumPy", level: 90, desc: "Numerical computing & vectorized operations" },
      { name: "scikit-learn", level: 85, desc: "Classical machine learning algorithms" },
      { name: "Logistic Regression", level: 85, desc: "Supervised classification modeling" },
      { name: "Random Forest", level: 85, desc: "Ensemble learning & feature importance" },,
      { name: "Matplotlib", level: 90, desc: "Data visualization & exploratory analysis" },
      { name: "Seaborn", level: 90, desc: "Statistical data visualization" },
    ],
  },
  frontend: {
    label: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 90, desc: "Semantic markup & responsive design" },
      { name: "React.js", level: 85, desc: "Component-based UI library" },
      { name: "TypeScript", level: 70, desc: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", level: 70, desc: "Utility-first CSS framework" },
      { name: "Framer Motion", level: 70, desc: "Animation library" },
    ],
  },
backend: {
  label: "Backend & APIs",
  skills: [
    { name: "Node.js", level: 85, desc: "JavaScript runtime for scalable backends" },
    { name: "Django", level: 80, desc: "High-level Python web framework" },
    { name: "REST APIs", level: 90, desc: "API design & integration" },
    { name: "GraphQL", level: 70, desc: "Flexible query-based APIs" },
  ],
},

  databases: {
    label: "Databases & Data Tools",
    skills: [
      { name: "MySQL", level: 85, desc: "Relational database management" },
      { name: "PostgreSQL", level: 90, desc: "Advanced SQL & analytics queries" },
      { name: "MongoDB", level: 80, desc: "NoSQL document database" },
      { name: "Databricks", level: 80, desc: "Big data processing & analytics" },
      { name: "Jupyter Notebook", level: 95, desc: "Data analysis & experimentation" },
      { name: "Excel", level: 95, desc: "Data analysis & reporting" },
      { name: "Tableau", level: 85, desc: "Interactive data visualization" },
      { name: "Power BI", level: 85, desc: "Dashboards & business insights" },
    ],
  },

cloud: {
  label: "Cloud & DevOps",
  skills: [
    { name: "AWS", level: 70, desc: "Cloud infrastructure & services" },
     { name: "Azure", level: 70, desc: "Cloud infrastructure & services" },
    { name: "Docker", level: 70, desc: "Containerized applications" },
    { name: "Linux", level: 75, desc: "Server & environment management" },
    { name: "Git & GitHub", level: 90, desc: "Version control & collaboration" },
    { name: "VS Code", level: 95, desc: "Primary development environment" },
  ],
},

};

export default function Skills() {
  const [active, setActive] = useState("ai");

  return (
    <Section id="skills" title="Technical Stack">
      <p className="skills-subtitle">
        
      </p>

      {/* Category Tabs */}
      <div className="skills-tabs">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            className={`skills-tab ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {categories[active].skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="skill-card">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span>{skill.projects} </span>
                </div>

                {/* <div className="skill-meta">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div> */}

                {/* <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div> */}

                <p className="skill-desc">{skill.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="skills-stats">
        <Card><h4>10+</h4><p>Technologies</p></Card>
        <Card><h4>20+</h4><p>Total Projects</p></Card>
        <Card><h4>2+</h4><p>Years Experience</p></Card>
        {/* <Card><h4>8+</h4><p>Certifications</p></Card> */}
      </div>
    </Section>
  );
}
