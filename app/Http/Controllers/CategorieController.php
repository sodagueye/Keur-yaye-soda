<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;              
use Inertia\Inertia;                   
use Inertia\Response;

class CategorieController extends Controller
{
    public function index(): Response
    {
        $categories = Categorie::select('id', 'nom_categorie')->get();
        //   dd($categories);

      return Inertia::render('MenuBtn', [ 
            'categories' => $categories,
        ]);
    }
}
