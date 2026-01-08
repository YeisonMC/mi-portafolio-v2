import HeroSection from "../../animations/HeroSection";
import About from "../about/About";

const Home = () => {
  return (
    <>
      <section id="home" className="overflow-hidden">
        <HeroSection />
      </section>

      <section id="about" className="">
        <About />
      </section>
    </>
  );
};

export default Home;
