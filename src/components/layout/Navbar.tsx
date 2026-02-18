import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Inicio", id: "home" },
  { name: "Sobre Mi", id: "about" },
  { name: "Experiencia", id: "experience" },
  { name: "Habilidades", id: "skills" },
  { name: "Proyectos", id: "projects" },
  // { name: "Contacto", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Lógica simple de ScrollSpy (Detectar sección activa)
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset para que detecte antes de llegar

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura del Navbar para que no tape el título
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? // bg-slate-950/80
              "bg-white border-b border-white/10 py-4 shadow-lg"
            : // "backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
              "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          {/* LOGO - Al hacer click sube al inicio */}
          <button
            onClick={() => scrollToSection("home")}
            className="relative z-50 cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/dtsfiwmzt/image/upload/v1767752258/logo-name-header-YKTrYP3W_1_go1ic7.svg"
              alt=""
              className="w-20"
            />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? "text-primary" : "text-black hover:text-primary"
                  }`}
                >
                  {link.name}

                  {/* Línea Mágica Animada */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black text-2xl z-50 cursor-pointer"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-amber-100 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-bold ${
                  activeSection === link.id ? "text-orange-500" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
