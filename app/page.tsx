import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Social from "@/components/sections/Social";
import Gallery from "@/components/sections/Gallery";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Gallery />
      <Values />
      <Contact />
    </main>
  );
}
