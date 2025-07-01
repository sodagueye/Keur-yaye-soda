<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use App\Models\Categorie; // N'oubliez pas d'importer le modèle Categorie
use Inertia\Inertia;
use Illuminate\Http\Request; // Importez Request pour le filtrage

class ProduitsController extends Controller
{
    public function index(Request $request)
    {
        // 1. Récupérer toutes les catégories
        $categories = Categorie::select('id', 'nom_categorie')->get();

        // 2. Préparer la requête pour les produits
        $query = Produit::query()
            ->select('id', 'nom_produit', 'prix', 'image', 'description', 'categorie_id');

        // 3. Appliquer le filtre si un paramètre 'categorie' est présent dans l'URL
        if ($request->has('categorie')) {
            $query->where('categorie_id', $request->categorie);
        }

        // 4. Exécuter la requête pour obtenir les produits filtrés ou tous les produits
        $produits = $query->get();

        // 5. Mapper les produits pour les préparer pour Inertia (comme vous le faisiez)
        $produits = $produits->map(function ($produit) {
            return [
                'id' => $produit->id,
                'nom_produit' => $produit->nom_produit,
                'prix' => $produit->prix,
                'image_url' => $produit->image ? asset('storage/' . $produit->image) : '',
                'description' => $produit->description,
                'categorie_id' => $produit->categorie_id,
            ];
        });

        // 6. Renvoyer les produits ET les catégories à la vue Inertia
        return Inertia::render('Products', [ // On continue d'utiliser la vue 'Products'
            'produits' => $produits,
            'categories' => $categories, // ON PASSE LES CATÉGORIES ICI
        ]);
    }
}
