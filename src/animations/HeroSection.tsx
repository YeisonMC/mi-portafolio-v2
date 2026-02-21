import { motion, type Variants } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaArrowRightLong, FaFolderClosed } from "react-icons/fa6";

import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

import "../styles/rounded.css";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/YeisonMC",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/yeissen-beckam-macalupu-marchan/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:yeissenmacalupu.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-2 bg-[#fde9e1] text-[#d54a2a] rounded-full text-sm font-semibold"
              >
                👋 ¡Hola! Bienvenido a mi portafolio
              </motion.span>

              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Soy <span className="gradient-text">Yeissen Macalupu</span>
              </h1>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-700"
            >
              Desarrollador{" "}
              <span className="relative inline-block">
                <span className="relative z-10">FullStack</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent-300/50 z-0"
                />
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed md:w-10/12 text-justify"
            >
              Técnico Superior en Diseño y Desarrollo de Software con 2 años de
              experiencia. Actualmente estudiando Ciencias de la Computación en
              la UPC.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2"
              >
                Ver Proyectos
                <FaArrowRightLong className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="CV - YEISSEN MACALUPU - DESARROLLADOR - 202502.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <span className="flex items-center gap-2">
                  Descargar CV
                  <FaFolderClosed className="w-5 h-5" />
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-600  leading-relaxed max-w-2xl"
              >
                Sigueme en:
              </motion.p>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700  hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Rigth Content */}
          <motion.div variants={itemVariants} className="mx-auto">
            <div className="rounded-home bg-[#A9725C] w-90 h-90 overflow-hidden flex items-end justify-center">
              <img
                src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d454ec3583c11cf926ec6f_Jumping.svg"
                alt="Persona saltando"
                className="md:w-80 w-80 animate-float"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
