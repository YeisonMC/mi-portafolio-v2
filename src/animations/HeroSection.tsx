import { motion, type Variants } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Soy <span className="gradient-text">Yeissen Macalupu</span>
              </h1>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
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
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              Técnico Superior en Diseño y Desarrollo de Software con 2 años de
              experiencia. Actualmente estudiando Ciencias de la Computación en
              la UPC. Apasionado por crear experiencias web excepcionales y
              soluciones innovadoras..
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="btn-secondary flex items-center gap-2"
              >
                Ver Proyectos
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="CV - YEISSEN MACALUPU - DESARROLLADOR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  Descargar CV
                  <FiDownload className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Rigth Content */}
          <div className=""></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
