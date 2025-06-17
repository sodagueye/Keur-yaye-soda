import { FaPhone, FaMobile } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import BaseLayout from "@/layouts/base-layout";

export default function Contact() {
  return (
    <BaseLayout>
    <div className="min-h-screen flex justify-center items-center px-4 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        {/* Partie gauche : Informations */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center bg-white p-4 h-32 shadow rounded">
              <FaLocationDot className="text-xl font-bold" />
              <h6 className="font-bold font-serif mt-1">Siège</h6>
              <p className="text-sm text-center">Golf sur Yeumbeul</p>
            </div>
            <div className="flex flex-col items-center bg-white p-4 h-32 shadow rounded">
              <FaPhone className="text-xl font-bold" />
              <h6 className="font-bold font-serif mt-1">Téléphone</h6>
              <p className="text-sm text-center">77-5-43-67-89</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center bg-white p-4 h-32 shadow rounded">
              <FaMobile className="text-xl font-bold" />
              <h6 className="font-bold font-serif mt-1">Fax</h6>
              <p className="text-sm text-center">33-3-43-56-78</p>
            </div>
            <div className="flex flex-col items-center bg-white p-4 h-32 shadow rounded">
              <MdOutlineMail className="text-xl font-bold" />
              <h6 className="font-bold font-serif mt-1">Email</h6>
              <p className="text-sm text-center break-words">yayesoda@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Partie droite : Formulaire */}
        <div className="w-full md:w-1/2 bg-[#91725d] text-white p-6 rounded">
          <h2 className="text-center text-2xl font-semibold mb-6">Nous Contacter</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Prénom"
                className="w-full px-4 py-2 bg-white text-black rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-2 bg-white text-black rounded focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Votre Email"
              className="w-full px-4 py-2 bg-white text-black rounded focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="w-full px-4 py-2 h-32 bg-white text-black rounded resize-none focus:outline-none"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-[#91725d] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </BaseLayout>
  );
}
