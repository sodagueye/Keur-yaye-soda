import React from "react";
 import avatar from "../pages/avatar.jpg"; 

const appreciations = [
  {
    name: "Astou Fall",
    message:
      "Keur Yaye Soda est mon restaurant préféré. La nourriture est toujours délicieuse et le service est impeccable. Je recommande vivement !",
  },
  {
    name: "Boubacar Ndiaye",
    message:
      "L'atmosphère chaleureuse et conviviale de Keur Yaye Soda me fait me sentir chez moi. Les plats traditionnels sont préparés à la perfection. Un vrai régal !",
  },
  {
    name: "Khady Mbaye",
    message:
      "Chaque visite à Keur Yaye Soda est une expérience culinaire incroyable. Les saveurs authentiques et les ingrédients frais rendent chaque plat exceptionnel. Bravo à l'équipe !",
  },
];

const Appreciation = () => {
  return (
    <div className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Avis des clients
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {appreciations.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            <img
              src={avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-800">Keur Yaye Soda</strong> {item.message.split("Keur Yaye Soda")[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appreciation;
