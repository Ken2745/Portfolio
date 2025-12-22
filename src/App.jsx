import About from "./sections/About";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import GlassLayout from "./components/GlassLayout";
export default function App() {
  return (
    <main>
      <GlassLayout/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}