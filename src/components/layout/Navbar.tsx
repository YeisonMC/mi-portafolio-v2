import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

const navLinks = [
  { name: "Inicio", id: "home" },
  { name: "Sobre Mi", id: "about" },
  { name: "Experiencia", id: "experience" },
  { name: "Habilidades", id: "skills" },
  { name: "Proyectos", id: "projects" },
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    // Esperamos a que el overlay cierre antes de calcular posición
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 50); // 50ms es suficiente para que AnimatePresence desmonte el overlay - 300  para baja gama
  };
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white border-b border-white/10 py-4 shadow-lg"
            : "bg-transparent py-4"
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
              alt="Logo personal"
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
                  className={`relative px-1 py-2 text-sm font-semibold transition-colors cursor-pointer font-[Raleway] ${
                    isActive
                      ? "text-[#A9725C]"
                      : "text-black hover:text-[#A9725C]"
                  }`}
                >
                  {link.name}

                  {/* Línea Mágica Animada */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#A9725C] shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 40,
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
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
            // transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-semibold font-[Raleway] cursor-pointer ${
                  activeSection === link.id ? "text-[#A9725C]" : "text-black"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
