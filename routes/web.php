<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HamperController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserAgentController;
use App\Http\Controllers\UserCatalogController;
use App\Http\Controllers\UserProductController;
use App\Http\Controllers\VariantController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/agents', [UserAgentController::class, 'index'])->name('agents');
Route::get('/products', [UserProductController::class, 'index'])->name('products');
Route::get('/catalog', [UserCatalogController::class, 'index'])->name('catalog');

Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->group(function () {
    Route::redirect('/', 'admin/dashboard');
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('variants', VariantController::class);
    Route::resource('products', ProductController::class);
    Route::resource('hampers', HamperController::class);
    Route::resource('catalogs', CatalogController::class);
    Route::resource('agents', AgentController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
