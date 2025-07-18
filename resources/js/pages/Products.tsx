import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import BaseLayout from "@/layouts/base-layout";
  import { Button } from "@/components/ui/button";


type Produit = {
  id: number;
  nom_produit: string;
  description: string;
  prix: string;
  image_url: string;
  categorie_id: number;
};

type Categorie = {
  id: number;
  nom_categorie: string;
};

type ProductsProps = {
  produits: Produit[];
  categories: Categorie[]; 
};

const Products = ({ produits, categories }: ProductsProps) => {
  
  const { url } = usePage();
  const searchParams = new URLSearchParams(url.split('?')[1]);
  const activeCategoryId = searchParams.get('categorie'); 

  return (
    <>
      <BaseLayout>
        <Head title="Menu" />
        <div className="max-w-7xl mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Notre Menu</h1>

          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
           
            <Link
              href="/menu" 
              className={`px-4 py-2 rounded-full shadow transition
              ${!activeCategoryId ? 'bg-indigo-600 text-white' : 'bg-gray-400 text-white hover:bg-gray-500'}`
              }
            >
              Tout
            </Link>

           
            {categories.length > 0 ? (
              categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/menu?categorie=${cat.id}`} 
                  className={`px-4 py-2 rounded-full shadow-md transition
                  ${activeCategoryId && parseInt(activeCategoryId) === cat.id ? 'bg-indigo-600 text-white' : 'bg-[#91725d] text-white hover:bg-[#7a5f4b]'}`
                  }
                >
                  {cat.nom_categorie}
                </Link>
              ))
            ) : (
              <p>Aucune catégorie trouvée.</p>
            )}
          </div>

       
          {produits.length === 0 && (
            <div className="text-center text-gray-600 mt-10">
              Aucun produit ne correspond à cette sélection.
            </div>
          )}

         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produits.map((produit) => (
              <div key={produit.id} className="bg-white border rounded-lg shadow hover:shadow-md">
                <img
                  src={produit.image_url}
                  alt={produit.nom_produit}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-center">{produit.nom_produit}</h2>
                  <p className="text-sm text-gray-600 mt-1 text-center">{produit.description}</p>
                  <p className="text-center font-bold mt-2">{produit.prix} FCFA</p>

                  <Button className="mt-3 w-full bg-[#91725d] hover:bg-[#7a5f4b] text-white">
                    Ajouter au panier
                  </Button>
                   
                </div>
              </div>
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Products;
