import { motion, type Variants } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    {
      name: "HTML5",
      category: "Desarrollo Web",
      // icon: <SiHtml5 className="w-8 h-8" />,
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1770251792/html-5_wtkpgj.svg",
      color: "from-[#A9725C] to-[#8B5E4A]",
    },
    {
      name: "CSS3",
      category: "Desarrollo Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1770251805/css-3_ewyefj.svg",
      color: "from-[#8B5E4A] to-[#A9725C]",
    },
    {
      name: "JavaScript",
      category: "Programación Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1770251584/js_bblpm3.svg",
      color: "from-[#A9725C] to-[#D4A996]",
    },
    {
      name: "NodeJS",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1770251545/node_epxjbw.svg",
      color: "from-[#A9725C] to-[#C89580]",
    },
    {
      name: "React",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/react_inzxcq.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "Vite",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/vite_kuse9u.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "Tailwind",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1769645700/tailwind_pbczz6.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "Java",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1770251771/java_blqnre.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "Spring boot",
      category: "Backend Web",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771276925/spring-boot_l6rv0l.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "SQL Server",
      category: "Base de Datos",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771280356/icons8-microsoft-sql-server_php2ak.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
    {
      name: "MongoDB",
      category: "Base de Datos",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771282718/mongo_gmw1gc.svg",
      color: "from-[#8B5E4A] to-[#C89580]",
    },
  ];

  const otherSkills = [
    {
      name: "Control de Versiones",
      description: "Git & GitHub",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771282065/github_dkpzpb.svg",
      color: "from-[#A9725C] to-[#8B5E4A]",
    },
    {
      name: "UI/UX Design",
      description: "Figma & Diseño responsive",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771282351/figma_naf3tb.svg",
      color: "from-[#C89580] to-[#A9725C]",
    },
    {
      name: "Buenas Prácticas",
      description: "Clean Code & Documentación",
      icon: "https://res.cloudinary.com/dtsfiwmzt/image/upload/v1771286212/code_jf2xwk.svg",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Habilidades{" "}
            <span className="bg-linear-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
              Técnicas
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 uppercase"
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100  overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <img
                    src={skill.icon}
                    className="w-20 h-20 mx-auto ransform group-hover:scale-110 transition-transform duration-300"
                    alt={`${skill.name}-icon`}
                  />

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
                  {/* <motion.div
                    className="relative mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full bg-linear-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                    />
                  </motion.div> */}
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
            <span className="bg-linear-to-r from-[#A9725C] to-[#C89580] text-transparent bg-clip-text">
              Competencias
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative bg-white  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-6  transform group-hover:rotate-6 transition-transform duration-300`}
                    // className={`w-16 h-16 rounded-2xl bg-linear-to-br ${skill.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {/* {skill.icon} */}
                    <img src={skill.icon} alt={`${skill.name}-icon`} />
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
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-lienar-to-br ${skill.color} opacity-5 rounded-tl-full transform group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
