import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        z-50
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-full px-8 py-3
        shadow-lg
      "
    >
      <ul className="flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="
                text-gray-300 hover:text-white
                transition-colors
              "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

