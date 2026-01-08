// ... imports ...

import { AnimatePresence } from "motion/react";
import Preloader from "./components/ui/Preloader";
import { useState } from "react";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // CAMBIO IMPORTANTE:
    // 1. Quitamos 'bg-slate-950' de aquí (ya lo tiene el canvas).
    // 2. Mantenemos 'relative' para contener al canvas 'absolute'.
    <div className="relative min-h-screen text-white font-sans flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* El fondo va aquí (z-0) */}
          <ParticlesBackground />

          {/* El contenido debe estar POR ENCIMA (z-10) */}
          <div className="relative z-10 w-full flex flex-col flex-grow">
            <Navbar />
            <main className="grow">
              <Home />
            </main>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
