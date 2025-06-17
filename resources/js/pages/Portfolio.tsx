import React from "react";
import asset16 from "../pages/asset16.jpeg";
import asset17 from "../pages/asset17.jpeg";
import asset18 from "../pages/asset18.jpeg";
import asset19 from "../pages/asset19.jpeg";
import asset20 from "../pages/asset20.jpeg";
import asset21 from "../pages/asset21.jpeg";

const tab = [
  { id: 1, img: asset16 },
  { id: 2, img: asset17 },
  { id: 3, img: asset18 },
  { id: 4, img: asset19 },
  { id: 5, img: asset20 },
  { id: 6, img: asset21 },
];

export default function Portfolio() {
  return (
    <div className="pt-10 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-semibold italic text-center text-gray-800 mb-10">
        Portfolio Keur Yaay Soda
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tab.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={item.img}
              alt="portfolio"
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
