<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProduitsController;

use App\Http\Controllers\HomeController;
// use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/reservation', function () {
    return Inertia::render('Reservation');
});
Route::get('/Contact', function () {
    return Inertia::render('Contact');
});
Route::get('/menu', [ProduitsController::class, 'index'])->name('menu');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
