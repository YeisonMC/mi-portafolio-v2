import { motion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  // Variants consistentes con HeroSection y About
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const projects = [
    {
      title: "Moda Market - Ecommerce",
      description:
        "Plataforma E-commerce para ropa de moda con catálogo dinámico, filtros por categoría, búsqueda de productos y diseño responsive.",
      image:
        "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1768582339/Moda-Market_003_ixytco.jpg",
      technologies: ["Vite", "React", "Tailwind CSS"],
      github: "https://github.com/YeisonMC",
      demo: "https://frontend-modamarket.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/YeisonMC",
      demo: "https://frontend-modamarket.vercel.app/",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico interactivo con gráficos en tiempo real y pronósticos extendidos.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      github: "https://github.com/YeisonMC",
      demo: "https://frontend-modamarket.vercel.app/",
    },
  ];

  return (
    //  py-20
    <div className="min-h-screen">
      <div className="section-container">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Icon Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
          >
            <FiCode className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Mis <span className="gradient-text">Proyectos</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Una colección de proyectos que demuestran mis habilidades en
            desarrollo web, desde aplicaciones full-stack hasta interfaces de
            usuario innovadoras.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-dark-700">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300 z-10" />

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay with Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  {/* GitHub Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <FiGithub className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>

                  {/* Demo Link */}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <FiExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                      // flex items-center gap-x-1
                    >
                      {/* <img
                        src="https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/vite_kuse9u.svg"
                        alt=""
                        className="size-3.5"
                      /> */}
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
  );
};

export default Projects;
