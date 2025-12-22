import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Contact.css";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-gray-400 mb-6">
              I’m open to internships, research opportunities, and full-time
              roles in software engineering, data science, and machine learning.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>
                📧{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-purple-400 transition"
                >
                  Ksherrod009@gmail.com
                </a>
              </li>
              <li>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/kenneth-sherrod/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                🧑‍💻{" "}
                <a
                  href="https://github.com/Ken2745"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  GitHub
                </a>
              </li>
             <li>
                 {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-400 transition"
                >
                    Knightdale, North Carolina
                </a>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-white/10 border border-white/20
                  text-white placeholder-gray-400
                  focus:outline-none focus:border-purple-400
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-white/10 border border-white/20
                  text-white placeholder-gray-400
                  focus:outline-none focus:border-purple-400
                "
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-white/10 border border-white/20
                  text-white placeholder-gray-400
                  focus:outline-none focus:border-purple-400
                "
              />

              <button
                type="submit"
                className="
                  w-full py-3 rounded-lg
                  bg-purple-500 text-black font-semibold
                  hover:bg-purple-400 transition
                "
              >
                Send Message
              </button>
            </form>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
}

