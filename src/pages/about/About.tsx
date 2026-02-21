import { motion, type Variants } from "framer-motion";

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

  const certifications = [
    {
      icon: "👨‍💻",
      name: "Desarrollo de Software",
      description: "Certificado Modular - Programa de Diseño y Desarrollo",
    },
    {
      icon: "🌐",
      name: "Scrum Fundamentals",
      description: "Metodologías Ágiles & Gestión de Proyectos",
    },
    {
      icon: "⚡",
      name: "Semifinalista Ideatón",
      description: "5ta Edición Ideatón - Concurso de Ideas Innovadoras",
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
          className="text-center md:mb-12 mb-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Sobre{" "}
            <span className="bg-linear-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
              Mí
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 uppercase">
            Más sobre mi trayectoria
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Soy, un desarrollador FullStack apasionado por crear
                  experiencias web excepcionales. Con 2 años de experiencia en
                  el mercado TI, me especializo tanto en el desarrollo Frontend
                  como Backend.
                </p>

                <p>
                  Actualmente curso la carrera de{" "}
                  <strong className="text-gray-900">
                    Ciencias de la Computación
                  </strong>{" "}
                  en la Universidad de Ciencias Aplicadas (UPC),
                </p>

                <p>
                  Me considero una persona{" "}
                  <strong className="text-gray-900">autodidacta</strong> que
                  busca estar aprendiendo constantemente. Disfruto enfrentarme a
                  nuevos desafíos y encontrar soluciones innovadoras a problemas
                  complejos.
                </p>

                <p>
                  Busco nuevas oportunidades en el mercado TI que me permitan no
                  solo aportar mi conocimiento y habilidades, sino también{" "}
                  <strong className="text-gray-900">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                📋 Información
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Ubicación
                  </span>
                  <span className="text-gray-900 font-semibold">
                    Lima, Perú
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Universidad
                  </span>
                  <span className="text-gray-900 font-semibold">UPC</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Carrera
                  </span>
                  <span className="text-gray-900 font-semibold">
                    Ciencias de la Computación
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Experiencia
                  </span>
                  <span className="text-gray-900 font-semibold">2 años</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-medium">
                    Idiomas
                  </span>
                  <span className="text-gray-900 font-semibold">ES / EN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          {/* Section Header */}

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            Certificaciones
          </motion.h2>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Animated top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
