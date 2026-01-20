import { motion, type Variants } from "framer-motion";
import { FiCoffee } from "react-icons/fi";

const About = () => {
  // Variants consistentes con HeroSection
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const interests = [
    { icon: "💻", name: "Programación" },
    { icon: "🎨", name: "Diseño UI/UX" },
    { icon: "📚", name: "Lectura Técnica" },
    { icon: "🎮", name: "Gaming" },
    { icon: "🎵", name: "Música" },
    { icon: "✈️", name: "Viajar" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Estudiante de Ciencias de la Computación",
      organization: "Universidad de Ciencias Aplicadas (UPC)",
      description:
        "Profundizando conocimientos en algoritmos, estructuras de datos y arquitectura de software.",
    },
    {
      year: "2022",
      title: "Desarrollador FullStack",
      organization: "Mercado TI",
      description:
        "2 años de experiencia desarrollando aplicaciones web completas y escalables.",
    },
    {
      year: "2021",
      title: "Técnico Superior",
      organization: "CERTUS",
      description: "Graduado en Diseño y Desarrollo de Software con honores.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Sobre <span className="gradient-text">Mí</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Conoce más sobre mi trayectoria, valores y lo que me apasiona en el
            mundo del desarrollo.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - About Me */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                ¡Hola! 👋
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Soy{" "}
                  <strong className="text-primary-600 dark:text-primary-400">
                    Yeissen Macalupu
                  </strong>
                  , un desarrollador FullStack apasionado por crear experiencias
                  web excepcionales. Con 2 años de experiencia en el mercado TI,
                  me especializo tanto en el desarrollo Frontend como Backend.
                </p>

                <p>
                  Actualmente curso la carrera de{" "}
                  <strong className="text-gray-900 dark:text-white">
                    Ciencias de la Computación
                  </strong>{" "}
                  en la Universidad de Ciencias Aplicadas (UPC), donde
                  profundizo mis conocimientos en algoritmos, estructuras de
                  datos y arquitectura de software.
                </p>

                <p>
                  Me considero una persona{" "}
                  <strong className="text-gray-900 dark:text-white">
                    autodidacta
                  </strong>{" "}
                  que busca estar aprendiendo constantemente. Disfruto
                  enfrentarme a nuevos desafíos y encontrar soluciones
                  innovadoras a problemas complejos.
                </p>

                <p>
                  Busco nuevas oportunidades en el mercado TI que me permitan no
                  solo aportar mi conocimiento y habilidades, sino también{" "}
                  <strong className="text-gray-900 dark:text-white">
                    crecer profesional y personalmente
                  </strong>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <FiCoffee className="text-primary-600 dark:text-primary-400" />
                Intereses
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {interests.map((interest) => (
                  <motion.div
                    key={interest.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-dark-800 rounded-xl shadow-sm"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Mi <span className="gradient-text">Trayectoria</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-primary-300 dark:border-primary-700"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg" />

                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-dark-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {item.organization}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
