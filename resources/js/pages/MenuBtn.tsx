import React from "react";
import { usePage, Link } from "@inertiajs/react"; // Ajout de Link
import BaseLayout from "@/layouts/base-layout";

export default function MenuBtn() {
  const { categories } = usePage().props;

  return (
    <BaseLayout>
      <div className="flex flex-wrap justify-center gap-4 pt-10 mt-10">
        {/* Bouton "Tout" */}
        <Link
          href="/menu"
          className="px-4 py-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500 transition"
        >
          Tout
        </Link>

        {categories.length > 0 ? (
          categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/menu?categorie=${cat.id}`} // Lien avec paramètre
              className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
            >
              {cat.nom_categorie}
            </Link>
          ))
        ) : (
          <p>Aucune catégorie trouvée.</p>
        )}
      </div>
    </BaseLayout>
  );
}
