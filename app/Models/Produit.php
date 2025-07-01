<?php

namespace App\Models;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{

    protected $fillable = [
       "nom_produit",
       "image",
       "description",
       "prix",
    //    "stock_id",
       "categorie_id"
    ];



    public function categorieProduit()
{
    return $this->belongsTo(Categorie::class, 'categorie_id');
}
    
}
