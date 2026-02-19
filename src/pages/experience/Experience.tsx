import { motion, type Variants } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Asistente de Software",
      company: "Green Dreams",
      period: "2026",
      description:
        "Desarrollo diversos proyectos, incluyendo landing pages, aplicaciones web y sistemas web.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    // {
    //   title: "Freelancer | Desarrollador FullStack",
    //   company: "Proyectos Independientes",
    //   period: "2025",

    //   description:
    //     // "2 años de experiencia desarrollando aplicaciones web completas y escalables.",
    //     "Desarrollo diversos proyectos, incluyendo landing pages, aplicaciones web y sistemas web.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "PostgreSQL",
    //     "Tailwind CSS",
    //   ],
    // },
    {
      title: "Estudiante de Ciencias de la Computación",
      company: "Universidad de Ciencias Aplicadas (UPC)",
      period: "2024 - Presente",

      description:
        "Profundizando conocimientos en algoritmos, estructuras de datos y arquitectura de software.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      title: "Desarrollador Frontend",
      company: "Centro GZA InfraVial Perú",
      period: "Marzo - Junio | 2023",

      description:
        // "2 años de experiencia desarrollando aplicaciones web completas y escalables.",
        "Desarrollo diversos proyectos, incluyendo landing pages, aplicaciones web y sistemas web.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      title: "Egresado | Técnico Superior",
      company: "CERTUS",
      period: "2021 - 2024",

      description: "Graduado en Diseño y Desarrollo de Software con honores.",
      technologies: ["React", "TypeScript", "CSS3", "Redux"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const containerVariants2: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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
  return (
    <div className="min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:mb-12 mb-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experiencia{" "}
            <span className="bg-linear-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
              Profesional
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 uppercase">
            Mi trayectoria en el desarrollo de software y las tecnologías que
            domino
          </motion.p>
        </motion.div>
        <motion.div
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          variants={containerVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-[#dbcdc8] from-gray-300 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-[#A9725C] flex items-center justify-center shadow-lg`}
                >
                  <FiBriefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#A9725C] font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
