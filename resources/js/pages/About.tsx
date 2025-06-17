 import React from "react";
 import { RiErrorWarningLine } from "react-icons/ri";
 import { IoLocationOutline } from "react-icons/io5";
 import { HiOutlineClock } from "react-icons/hi2";
 import { GrGallery } from "react-icons/gr";
 import about1 from "../pages/assets/about1.png";
 import about2 from "../pages/assets/about2.jpg";
 import about3 from "../pages/assets/about3.jpg";
 import BaseLayout from "@/layouts/base-layout";

function About() {
  return (
     <BaseLayout>
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-8">
        {/* Présentation */}
        <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
          <RiErrorWarningLine className="text-3xl text-blue-600 mb-2 md:mb-0" />
          <div>
            <h4 className="text-xl font-semibold mb-2">Quelques mots sur Keur Yaay Soda</h4>
            <p className="text-gray-700 text-justify leading-relaxed">
             Bienvenue chez Keur Yaay Soda, une oasis culinaire au cœur de <br></br>
              Grand Yoff. Notre restaurant est bien plus qu'un simple lieu de <br></br>
              repas ; c'est une célébration de la culture et des saveurs<br></br>
              africaines, spécialement inspirées des traditions sénégalaises.<br></br>
              "Keur Yaay" signifie "la maison de maman" en wolof, et ici, nous<br></br>
              nous efforçons de recréer l'ambiance chaleureuse et accueillante<br></br>
              d'un repas familial sénégalais. Chez Keur Yaay Soda, chaque plat<br></br>
              est préparé avec amour et passion, en utilisant des ingrédients<br></br>
              frais et authentiques pour vous offrir une expérience<br></br>
              gastronomique inoubliable. Notre menu varié propose une sélection<br></br>
              de plats traditionnels tels que le Thieboudienne, le Yassa, et le<br></br>
              Mafé, tous cuisinés selon des recettes transmises de génération en<br></br>
              génération. Que vous soyez un amateur de cuisine africaine ou un<br></br>
              novice curieux, nos plats sont conçus pour ravir vos papilles et<br></br>
              vous transporter au Sénégal le temps d'un repas.<br></br>
            </p>
          </div>
        </div>

        {/* Adresse */}
        <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
          <IoLocationOutline className="text-3xl text-green-600 mb-2 md:mb-0" />
          <div>
            <h4 className="text-lg font-medium">Adresse</h4>
            <p className="text-gray-700">Golf Sud</p>
          </div>
        </div>

        {/* Horaires */}
        <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
          <HiOutlineClock className="text-3xl text-yellow-500 mb-2 md:mb-0" />
          <div>
            <h4 className="text-lg font-medium mb-2">Horaires d'ouverture</h4>
            <select className="border border-gray-300 rounded-md p-2 w-full md:w-72">
              <option selected>Aujourd'hui</option>
              <option value="0">Lundi - 1:00AM à 11:55PM</option>
              <option value="1">Mardi - 1:00AM à 11:55PM</option>
              <option value="2">Mercredi - 1:00AM à 11:55PM</option>
              <option value="3">Jeudi - 1:00AM à 11:55PM</option>
              <option value="4">Vendredi - 1:00AM à 11:55PM</option>
              <option value="5">Samedi - 1:00AM à 11:55PM</option>
              <option value="6">Dimanche - 1:00AM à 11:55PM</option>
            </select>
          </div>
        </div>

        {/* Galerie */}
        <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
          <GrGallery className="text-3xl text-purple-600 mb-2 md:mb-0" />
          <div className="w-full">
            <h4 className="text-lg font-medium mb-4">Galerie</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[about3, about2, about3, about3, about1, about1, about1].map((img, i) => (
                <img key={i} src={img} alt={`about-${i}`} className="rounded-xl w-full h-40 object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </BaseLayout>
  );
}

export default About;
