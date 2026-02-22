import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <article className="flex-1">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </article>
      <Footer />
    </main>
  );
}

export default App;
