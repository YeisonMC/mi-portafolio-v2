import { motion } from "framer-motion";
import { FiCoffee } from "react-icons/fi";

const About = () => {
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
    <>
      <div className="min-h-screen pb-20">
        {/* pt-32 pb-20 */}
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre <span>Mí</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce más sobre mi trayectoria, valores y lo que me apasiona en
              el mundo del desarrollo.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - About Me */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  ¡Hola! 👋
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Soy{" "}
                    <strong className="text-primary-600">
                      Yeissen Macalupu
                    </strong>
                    , un desarrollador FullStack apasionado por crear
                    experiencias web excepcionales. Con 2 años de experiencia en
                    el mercado TI, me especializo tanto en el desarrollo
                    Frontend como Backend.
                  </p>

                  <p>
                    Actualmente curso la carrera de{" "}
                    <strong>Ciencias de la Computación</strong> en la
                    Universidad de Ciencias Aplicadas (UPC), donde profundizo
                    mis conocimientos en algoritmos, estructuras de datos y
                    arquitectura de software.
                  </p>

                  <p>
                    Me considero una persona <strong>autodidacta</strong> que
                    busca estar aprendiendo constantemente. Disfruto enfrentarme
                    a nuevos desafíos y encontrar soluciones innovadoras a
                    problemas complejos.
                  </p>

                  <p>
                    Busco nuevas oportunidades en el mercado TI que me permitan
                    no solo aportar mi conocimiento y habilidades, sino también{" "}
                    <strong>crecer profesional y personalmente</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <FiCoffee className="text-primary-600" />
                  Intereses
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Mi <span className="gradient-text">Trayectoria</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
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
    </>
  );
};

export default About;
