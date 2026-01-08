import { useState } from "react";
import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/ui/Preloader";
import SplineScene from "./components/ui/SplineScene";
import Home from "./pages/home/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Fondo 3D */}
          {/* <SplineScene /> */}

          {/* Navbar */}
          <Navbar />

          {/* Contenido */}
          <main className="grow">
            <Home />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
