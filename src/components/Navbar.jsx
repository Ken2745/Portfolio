import { motion } from "framer-motion";
import "./Navbar.css";

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
      whileHover={{ y: -2 }}
      className="
        fixed top-6 right-6 z-50
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        rounded-full
        px-6 py-2
        shadow-[0_0_25px_rgba(124,58,237,0.15)]
      "
    >
      <ul className="flex items-center gap-2 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <motion.a
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative px-4 py-2 rounded-full
                text-gray-300 hover:text-white
                transition-all duration-300
                hover:bg-white/15
              "
            >
              {item.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
