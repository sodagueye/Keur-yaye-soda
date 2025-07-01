<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $fillable = [
        'date',
        'status',
        'total',
        'client_id',
        'livreur_id',
    ];

    // public function commandeClient()
    // {
    //     return $this->

    // }
}
