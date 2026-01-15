import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico interactivo con gráficos en tiempo real y pronósticos extendidos.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Panel de control para gestión de redes sociales con análisis de métricas y programación de publicaciones.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "TypeScript", "Redux", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Portfolio CMS",
      description:
        "Sistema de gestión de contenido para portafolios con editor visual y generación de sitios estáticos.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen pb-20">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block p-3 bg-primary-100 rounded-2xl mb-6"
            >
              <FiCode className="w-8 h-8 text-red-500" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mis <span className="gradient-text">Proyectos</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Una colección de proyectos que demuestran mis habilidades en
              desarrollo web, desde aplicaciones full-stack hasta interfaces de
              usuario innovadoras.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-80 transition-opacity`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <FiGithub className="w-6 h-6 text-gray-900 dark:text-white" />
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <FiExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
