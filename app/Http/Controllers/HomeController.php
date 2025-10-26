<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\Hamper;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $featured_products = Product::with('variant')
            ->orderBy('created_at', 'desc')
            ->take(6)
            ->get();

        $featured_hampers = Hamper::orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        $catalogs = Catalog::orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('user/home/index', [
            'featured_products' => $featured_products,
            'featured_hampers' => $featured_hampers,
            'catalogs' => $catalogs,
        ]);
    }
}
