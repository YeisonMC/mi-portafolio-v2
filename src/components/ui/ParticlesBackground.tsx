import { useEffect } from "react";
// @ts-ignore
import CanvasParticles from "canvasparticles-js";

const ParticlesBackground = () => {
  useEffect(() => {
    // 1. Usamos el ID del canvas como selector (con el #)
    const particles = new CanvasParticles("#canvas-particles", {
      // Configuración exacta de tu captura
      mouse: {
        interactionType: 1, // 1 = Shift (Las partículas huyen del mouse)
        connectDistMult: 0.8,
        distRatio: 1,
      },
      particles: {
        maxWork: Infinity,
        color: "#C9C9C9", // Tu color Naranja
        connectDistance: 120,
        relSpeed: 0.8,
      },

      background: "#0A0A0A", // Dejamos que el CSS controle el color de fondo

      //   resetOnResize: true, // Importante: para que no se rompa al cambiar tamaño de ventana
    });

    // 2. Iniciamos la animación
    particles.start();
  }, []);

  return (
    <canvas
      id="canvas-particles" // <--- Este ID es vital
      // CAMBIOS CSS:
      // - absolute: para que se quede pegado al padre relativo
      // - z-0: nivel base
      // - bg-slate-950: el color de fondo va AQUÍ, en el canvas
      className="absolute inset-0 w-full h-full z-0 bg-slate-950"
    />
  );
};

export default ParticlesBackground;
