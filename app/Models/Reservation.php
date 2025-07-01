<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Client;
class Reservation extends Model
{

     protected $fillable = [
        'date',
        'heure',
        'nombre',
        'client_id',
        'table_id'
    ];
    

        public function reserveClient()
{
    return $this->belongsTo(Client::class, 'client_id');
}
}
