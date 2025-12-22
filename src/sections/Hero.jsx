import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen flex flex-col items-center justify-center
        text-center px-6
      "
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Kenneth <span className="text-purple-400">Sherrod</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
      >
        Computer Science Graduate · Data Science & Analytics Graduate Student  
        <br />
        Building intelligent, scalable, data-driven applications.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="
            px-6 py-3 rounded-xl
            bg-purple-500 text-black font-semibold
            hover:bg-purple-400 transition
          "
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="
            px-6 py-3 rounded-xl
            border border-white/30
            text-white
            hover:bg-white/10 transition
          "
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
