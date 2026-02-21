import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-9xl font-bold text-[#A9725C]">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Página no encontrada
      </h2>
      <p className="text-gray-500 mt-2 mb-8">La ruta que buscas no existe.</p>
      <button onClick={() => navigate("/")} className="btn-primary">
        Volver al inicio
      </button>
    </motion.div>
  );
};

export default NotFound;
