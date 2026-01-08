import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Recibimos una función "onFinish" para avisar a la App que terminamos
const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulamos una carga progresiva (puedes ajustar la velocidad aquí)
    const interval = setInterval(() => {
      setCount((prev) => {
        // Si llega a 100, limpiamos el intervalo y terminamos
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 200); // Espera 200ms antes de quitar la pantalla
          return 100;
        }
        // Incremento aleatorio para que parezca carga real
        const jump = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 30); // Cada 30ms actualiza el número

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    // Contenedor principal (z-index muy alto para tapar todo)
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // Animación de salida hacia arriba (Cortina)
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Curva de animación suave
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center">
        {/* Tu Logo Animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold tracking-tighter"
        >
          yes<span className="text-orange-500">en</span>
        </motion.div>

        {/* El Contador Grande */}
        <div className="text-8xl md:text-9xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          {count}%
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
