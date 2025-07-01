<?php

namespace App\Models;

use App\Models\Produit;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    //nom_categorie

     protected $fillable = [
        'nom_categorie'
       
    ];

    public function produits()
{
    return $this->hasMany(Produit::class, 'categorie_id');
}

}
