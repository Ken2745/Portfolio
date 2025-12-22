import { motion } from "framer-motion";

export default function Section({ title, children, id }) {
  return (
    <section
      id={id}
      className="px-6 py-24"
    >
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-4xl md:text-5xl
            font-bold text-center
            mb-12
            bg-gradient-to-r from-purple-400 to-blue-400
            bg-clip-text text-transparent
          "
        >
          {title}
        </motion.h2>
      )}

      {children}
    </section>
  );
}


