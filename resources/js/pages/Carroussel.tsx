import React, { useState, useEffect } from "react";
import asset6 from "../pages/asset6.jpeg";
import asset7 from "../pages/asset7.jpeg";
import asset5 from "../pages/asset5.jpeg";

const images = [asset6, asset7, asset5];

export default function Carroussel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[450px]">

        {/* Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Texte centré */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
         <h1 className="text-white italic text-4xl md:text-5xl font-semibold drop-shadow-lg">
            Keur Yaay Soda
          </h1>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-30"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-30"
        >
          ❯
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-indigo-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
