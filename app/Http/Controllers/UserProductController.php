<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserProductController extends Controller
{
    public function index(Request $request)
    {
        $variantFilter = $request->query('variant');

        $query = Product::with('variant')
            ->orderBy('created_at', 'desc');

        if ($variantFilter) {
            $query->whereHas('variant', function ($q) use ($variantFilter) {
                $q->where('name', 'like', '%' . $variantFilter . '%');
            });
        }

        $products = $query->get();
        $variants = Variant::withCount('products')->orderBy('name')->get();
        $currentVariant = null;

        if ($variantFilter) {
            $currentVariant = Variant::where('name', 'like', '%' . $variantFilter . '%')->first();
        }

        return Inertia::render('user/products/index', [
            'products' => $products,
            'variants' => $variants,
            'currentVariant' => $currentVariant,
            'variantFilter' => $variantFilter,
        ]);
    }
}
