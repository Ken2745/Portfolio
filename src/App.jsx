import About from "./sections/About";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import GlassLayout from "./components/GlassLayout";
import ScrollBloom from "./components/ScrollBloom";

export default function App() {
  return (
    <main>
      <ScrollBloom/>
      <GlassLayout>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </GlassLayout>
    </main>
  );
}