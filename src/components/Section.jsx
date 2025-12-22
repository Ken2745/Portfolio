import { motion } from "framer-motion";

export default function Section({ title, children, id }) {
  return (
    <section
      id={id}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>
      )}

      {children}
    </section>
  );
}

