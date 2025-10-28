<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\Hamper;
use App\Models\Variant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserCatalogController extends Controller
{
    public function index()
    {
        $variants = Variant::withCount('products')
            ->orderBy('name')
            ->get();

        $catalogs = Catalog::orderBy('created_at', 'desc')->get();
        $hampers = Hamper::orderBy('created_at', 'desc')->get();

        return Inertia::render('user/catalog/index', [
            'variants' => $variants,
            'catalogs' => $catalogs,
            'hampers' => $hampers,
        ]);
    }
}
