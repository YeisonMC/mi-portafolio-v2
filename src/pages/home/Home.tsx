import HeroSection from "../../animations/HeroSection";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <>
      <section id="home" className="overflow-hidden">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </>
  );
};

export default Home;
