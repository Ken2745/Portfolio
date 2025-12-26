import Section from "../components/Section";
import Card from "../components/Card";
import "./About.css";
import { GraduationCap, FileText } from "lucide-react";

export default function About() {
  return (
    <Section title="About Me">
      <p className="about-subtitle">
        Passionate Software Engineer with hands-on experience in data science, artificial intelligence, and machine learning.
        Currently pursuing a Master’s degree in Data Science and Analytics with a concentration in Engineering and Big Data Analytics,
      </p>

      <div className="about-grid">
        {/* Education Card */}
        <Card>
          <div className="about-card-header">
            <GraduationCap size={20} />
            <h3>Education</h3>
          </div>

          <div className="education-card">
            <h4>Bachelor of Science in Computer Science</h4>

            <p className="education-school">
              Old Dominion University
            </p>

            <div className="education-meta">
              <span>Sep 2022 – Dec 2024</span>
              <span className="gpa-badge">3.4 GPA</span>
            </div>
          </div>
        </Card>

        {/* Resume Card */}
        <Card>
          <div className="about-card-header">
            <FileText size={20} />
            <h3>Resume</h3>
          </div>

          <div className="resume-card">
            <div className="resume-info">
              <h4>Resume / CV</h4>
              <p>Download my professional resume</p>
            </div>

            <a
              href="KSherrodResume.pdf"
              download
              className="resume-download-btn"
            >
              Download
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}
