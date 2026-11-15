import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import SkillsTicker from "./layouts/SkillsTicker/SkillsTicker";
import About from "./layouts/About";
import Experience from "./layouts/Experience";
import Projects from "./layouts/Projects/Projects";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute -top-65 -right-45 h-155 w-205 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,.22),transparent)] blur-2xl"
        aria-hidden="true"
      />
      <Header />
      <main id="top">
        <Hero />
        <SkillsTicker />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
