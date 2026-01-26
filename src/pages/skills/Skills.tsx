import { motion, type Variants } from "framer-motion";
import {
  SiFlutter,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
} from "react-icons/si";
import { FaCode, FaGitAlt, FaPalette, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Flutter",
      category: "Desarrollo Móvil",
      icon: <SiFlutter className="w-8 h-8" />,
      color: "from-[#A9725C] to-[#8B5E4A]",
    },
    {
      name: "SQL",
      category: "Bases de Datos",
      icon: <SiMysql className="w-8 h-8" />,
      color: "from-[#A9725C] to-[#C89580]",
    },
    {
      name: "HTML5",
      category: "Estructura Web",
      icon: <SiHtml5 className="w-8 h-8" />,
      color: "from-[#8B5E4A] to-[#A9725C]",
    },
    {
      name: "CSS3",
      category: "Estilos Web",
      icon: <SiCss3 className="w-8 h-8" />,
      color: "from-[#C89580] to-[#A9725C]",
    },
    {
      name: "JavaScript",
      category: "Programación Web",
      icon: <SiJavascript className="w-8 h-8" />,
      color: "from-[#A9725C] to-[#D4A996]",
    },
    {
      name: "PHP",
      category: "Backend Web",
      icon: <SiPhp className="w-8 h-8" />,
      color: "from-[#8B5E4A] to-[#C89580]",
    },
  ];

  const otherSkills = [
    {
      name: "Control de Versiones",
      description: "Git, GitHub, GitLab, Metodologías ágiles",
      icon: <FaGitAlt className="w-8 h-8" />,
      color: "from-[#A9725C] to-[#8B5E4A]",
    },
    {
      name: "UI/UX Design",
      description: "Figma, Adobe XD, Diseño responsive, Accesibilidad",
      icon: <FaPalette className="w-8 h-8" />,
      color: "from-[#C89580] to-[#A9725C]",
    },
    {
      name: "Mejores Prácticas",
      description: "Clean Code, Testing, Documentación, Code Review",
      icon: <FaCheckCircle className="w-8 h-8" />,
      color: "from-[#A9725C] to-[#D4A996]",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="section-container">
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Habilidades{" "}
                <span className="bg-gradient-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
                  Técnicas
                </span>
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Mis Competencias
              </motion.p>
            </motion.div>

            {/* Technical Skills - Desarrollo */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-2"
              >
                <FaCode className="w-8 h-8 text-[#A9725C]" />
                Desarrollo
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="group relative"
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* Icon Container */}
                      <div
                        className={`relative mx-auto w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>

                      {/* Content */}
                      <div className="relative text-center">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.category}
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <motion.div
                        className="relative mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Skills - Otras Competencias */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold mb-8"
              >
                Otras{" "}
                <span className="bg-gradient-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
                  Competencias
                </span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>

                      {/* Content */}
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Decorative Element */}
                      <div
                        className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-5 rounded-tl-full transform group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#A9725C] dark:bg-[#A9725C] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#C89580] dark:bg-[#C89580] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#8B5E4A] dark:bg-[#8B5E4A] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </section>
      </div>
    </div>
  );
};

export default Skills;
