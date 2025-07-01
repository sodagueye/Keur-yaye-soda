import React from "react";

export default function ProductsPreview({ produits = [] }) {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Nos Produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produits.length === 0 ? (
          <p>Aucun produit disponible.</p>
        ) : (
          produits.map((produit) => (
            <div key={produit.id} className="bg-white border rounded-lg shadow p-4">
              <img
                src={produit.image_url}
                alt={produit.nom_produit}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{produit.nom_produit}</h3>
              <p className="text-indigo-600 font-bold">{produit.prix} FCFA</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
