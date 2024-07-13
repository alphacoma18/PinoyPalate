<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// query the database with a join of menu x restaurant x owner


Route::get('/dashboard', function () {
    $menu = DB::table('restaurant')
        ->join('menu', 'restaurant.id', '=', 'menu.restaurant_id')
        ->join('restaurant_owner', 'restaurant.owner_id', '=', 'restaurant_owner.id')
        ->join('cuisine', 'menu.cuisine_id', '=', 'cuisine.id') // Joining with the Cuisine table
        ->select('restaurant.*', 'menu.*', 'restaurant_owner.*', 'cuisine.name AS cuisine_name') // Selecting the cuisine name
        ->get();
    return Inertia::render('Dashboard', ['menu' => $menu]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
