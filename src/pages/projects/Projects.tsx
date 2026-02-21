import { motion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

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
      technologies: [
        {
          name: "Vite",
          icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/vite_kuse9u.svg",
        },
        {
          name: "React",
          icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/react_inzxcq.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
        },
      ],
      github: "https://github.com/YeisonMC",
      demo: "https://frontend-modamarket.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="section-container">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mis{" "}
            <span className="bg-linear-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
              Proyectos
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-600 uppercase">
            Proyectos que demuestran mis habilidades.
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
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/20 to-accent-500/20 z-10" />
                <div className="absolute inset-0 bg-linear-to-br from-gray-900/75 to-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-20">
                  {/* GitHub Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <FiGithub className="w-6 h-6 text-gray-900" />
                  </motion.a>

                  {/* Demo Link */}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <FiExternalLink className="w-6 h-6 text-gray-900" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-sm mb-4 min-h-12">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 flex items-center gap-x-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      <img
                        src={tech.icon}
                        alt={`${tech.name}-icon`}
                        className="size-4"
                      />
                      {tech.name}
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
