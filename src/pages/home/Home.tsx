import HeroSection from "../../animations/HeroSection";
import About from "../about/About";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <>
      <section id="home" className="overflow-hidden">
        <HeroSection />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="projects" className="">
        <Projects />
      </section>
    </>
  );
};

export default Home;
