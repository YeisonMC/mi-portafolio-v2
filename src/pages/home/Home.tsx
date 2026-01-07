import HeroSection from "../../animations/HeroSection";
import About from "../about/About";

const Home = () => {
  return (
    <>
      <section id="home" className="overflow-hidden">
        <HeroSection />
      </section>

      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            Mis Proyectos
          </h2>
          <About />
          <div className="text-gray-400 text-center">En construcción...</div>
        </div>
      </section>
    </>
  );
};

export default Home;
