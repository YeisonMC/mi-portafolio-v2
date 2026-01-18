import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/YeisonMC",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/yeissen-beckam-macalupu-marchan/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:yeissenmacalupu.dev@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/projects" },
    { name: "Habilidades", path: "/skills" },
    { name: "Sobre mí", path: "/about" },
  ];

  return (
    <footer className="border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-18 pb-6 sm:pb-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">
                Yeissen Macalupu
              </span>
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2/3">
              Ingeniero de Ciencias de la Computación especializado en diseño y
              desarrollo web.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <MdEmail className="w-5 h-5 mt-0.5 shrink-0 text-primary-500" />
                <a
                  href="mailto:yeissenmacalupu.dev@gmail.com"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  yeissenmacalupu.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MdLocationPin className="w-5 h-5 mt-0.5 shrink-0 text-primary-500" />
                <p>Lima, Perú</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p className="flex items-center gap-1">
              © {currentYear} Developed by Yeissen Macalupu
            </p>
            <p className="text-xs">Diseñado y desarrollado con vite</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
