<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $produits = Produit::select('id', 'nom_produit', 'prix', 'image')
            // ->limit(3) // ou supprimez la limite pour tester tous les produits
            ->get()
            ->map(function ($produit) {
                return [
                    'id' => $produit->id,
                    'nom_produit' => $produit->nom_produit,
                    'prix' => $produit->prix,
                    'image_url' => $produit->image ? asset('storage/' . $produit->image) : '',
                ];
            });

        return Inertia::render('welcome', [
            'produits' => $produits,
        ]);
    }
}
