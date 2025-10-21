<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\VariantController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->group(function () {
    Route::redirect('/', 'admin/dashboard');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('variants', VariantController::class);
    Route::resource('products', ProductController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
