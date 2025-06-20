import BaseLayout from "@/layouts/base-layout";
import { Input } from "@/components/ui/input";


function Reservation() {
  return (
    <BaseLayout>
      <section className="mt-24">
        <div className="w-4/5 mx-auto">
          <div className="bg-white shadow-md p-6 rounded-md">
            <form className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Informations Personnelles</h5>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="w-full md:w-[48%]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <Input type="text" />
                  </div>
                  <div className="w-full md:w-[48%]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <Input type="text" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <Input type="number" />
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-full md:w-[48%]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salles</label>
                    <select className="w-full border-b-2 border-gray-400 bg-transparent py-2 rounded-none focus:outline-none">
                      <option value="">Sélectionner une salle</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i} value={`Salle ${i + 1}`}>Salle {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full md:w-[48%]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tables</label>
                    <select className="w-full border-b-2 border-gray-400 bg-transparent py-2 rounded-none focus:outline-none">
                      <option value="">Sélectionner une table</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i} value={`${i + 1}`}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Commentaires</label>
                  <textarea className="w-full border border-[#91725D] rounded px-3 py-2 h-44 resize-none" />
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                En continuant, vous acceptez les conditions d'utilisation et la politique de confidentialité.
              </p>

              <div className="mt-6">
                <button type="submit" className="w-full bg-[#91725D] hover:bg-[#91725D]/90 text-white font-semibold py-3 rounded-full text-lg">
                  Réserver
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Reservation;
