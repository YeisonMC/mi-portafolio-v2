import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { ImSpinner8 } from "react-icons/im";

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {/* Loader centrado en pantalla */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-20">
          <ImSpinner8 className="animate-spin text-4xl text-orange-500" />
        </div>
      )}

      {/* Escena 3D */}
      <Spline
        scene="https://prod.spline.design/5xSaSir3rhZlqxvk/scene.splinecode"
        onLoad={() => setIsLoading(false)}
        className="w-full h-full"
      />

      {/* CAPA DE PROTECCIÓN (Overlay):
          Esto oscurece un poco el 3D para que tu texto blanco se lea bien encima.
          Ajusta la opacidad (bg-black/50) según necesites. 
      */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
    </div>
  );
}
