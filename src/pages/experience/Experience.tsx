import { motion, type Variants } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador FullStack",
      company: "Empresa Tech",
      period: "2022 - Presente",
      location: "Lima, Perú",
      description:
        "Desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos SQL/NoSQL.",
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
      company: "Startup Innovadora",
      period: "2021 - 2022",
      location: "Remoto",
      description:
        "Creación de interfaces de usuario responsivas y accesibles con enfoque en la experiencia del usuario.",
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
    <div className="min-h-screen py-20">
      <div className="section-container">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria en el desarrollo de software y las tecnologías que
            domino
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br  flex items-center justify-center shadow-lg`}
                >
                  <FiBriefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-dark-700">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
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
