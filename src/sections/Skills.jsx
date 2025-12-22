import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Skills.css";

const categories = {
  languages: {
  label: "Programming Languages",
  skills: [
    { name: "Python", level: 95, projects: 60, desc: "AI, ML, backend & scripting" },
    { name: "JavaScript", level: 92, projects: 55, desc: "Frontend & backend development" },
    { name: "TypeScript", level: 88, projects: 35, desc: "Type-safe JavaScript" },
    { name: "SQL", level: 90, projects: 40, desc: "Relational databases & analytics" },
    { name: "Java", level: 80, projects: 20, desc: "Object-oriented programming" },
    { name: "C++", level: 75, projects: 15, desc: "Systems & performance-focused code" },
  ],
},

  ai: {
    label: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 95, projects: 50, desc: "Primary language for AI/ML development" },
      { name: "TensorFlow", level: 90, projects: 25, desc: "Deep learning framework" },
      { name: "PyTorch", level: 88, projects: 20, desc: "Research-focused ML framework" },
      { name: "Hugging Face", level: 92, projects: 30, desc: "NLP & transformer models" },
      { name: "LangChain", level: 85, projects: 15, desc: "LLM application framework" },
      { name: "OpenAI API", level: 90, projects: 35, desc: "GPT integration & fine-tuning" },
    ],
  },
  frontend: {
    label: "Frontend",
    skills: [
      { name: "React", level: 95, projects: 45, desc: "Component-based UI library" },
      { name: "Next.js", level: 92, projects: 40, desc: "Full-stack React framework" },
      { name: "TypeScript", level: 88, projects: 35, desc: "Type-safe JavaScript" },
      { name: "Tailwind CSS", level: 90, projects: 30, desc: "Utility-first CSS framework" },
      { name: "Framer Motion", level: 85, projects: 25, desc: "Animation library" },
      { name: "Three.js", level: 75, projects: 10, desc: "3D graphics library" },
    ],
  },
backend: {
  label: "Backend & APIs",
  skills: [
    { name: "Node.js", level: 90, projects: 40, desc: "JavaScript runtime for scalable backends" },
    { name: "Express.js", level: 88, projects: 35, desc: "Minimalist REST API framework" },
    { name: "Django", level: 85, projects: 25, desc: "High-level Python web framework" },
    { name: "FastAPI", level: 92, projects: 30, desc: "High-performance Python APIs" },
    { name: "REST APIs", level: 95, projects: 45, desc: "API design & integration" },
    { name: "GraphQL", level: 80, projects: 15, desc: "Flexible query-based APIs" },
  ],
},

tools: {
  label: "Development Tools",
  skills: [
    { name: "Git & GitHub", level: 95, projects: 60, desc: "Version control & collaboration" },
    { name: "VS Code", level: 98, projects: 70, desc: "Primary development environment" },
    { name: "Postman", level: 90, projects: 35, desc: "API testing & documentation" },
    { name: "Docker Desktop", level: 85, projects: 30, desc: "Local container management" },
    { name: "Jupyter Notebook", level: 92, projects: 45, desc: "Data science & experimentation" },
    { name: "Power BI", level: 80, projects: 20, desc: "Data visualization & dashboards" },
  ],
},

cloud: {
  label: "Cloud & DevOps",
  skills: [
    { name: "AWS", level: 85, projects: 20, desc: "Cloud infrastructure & services" },
    { name: "Docker", level: 90, projects: 35, desc: "Containerized applications" },
    { name: "GitHub Actions", level: 80, projects: 25, desc: "CI/CD automation pipelines" },
    { name: "Linux", level: 88, projects: 40, desc: "Server & environment management" },
    { name: "Nginx", level: 75, projects: 15, desc: "Reverse proxy & web server" },
    { name: "Vercel", level: 92, projects: 30, desc: "Frontend deployment platform" },
  ],
},

};

export default function Skills() {
  const [active, setActive] = useState("ai");

  return (
    <Section id="skills" title="Technical Stack">
      <p className="skills-subtitle">
        Technologies and tools I use to build innovative solutions
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
                  <span>{skill.projects} projects</span>
                </div>

                <div className="skill-meta">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>

                <p className="skill-desc">{skill.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="skills-stats">
        <Card><h4>30+</h4><p>Technologies</p></Card>
        <Card><h4>50+</h4><p>Total Projects</p></Card>
        <Card><h4>4+</h4><p>Years Experience</p></Card>
        <Card><h4>8+</h4><p>Certifications</p></Card>
      </div>
    </Section>
  );
}
