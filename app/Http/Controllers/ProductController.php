<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('variant')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('admin/products/index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        $variants = Variant::orderBy('name')->get();

        return Inertia::render('admin/products/create', [
            'variants' => $variants,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'variant_id' => 'required|exists:variants,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price_regular' => 'required|numeric|min:0',
            'price_jar' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit(Product $product)
    {
        $variants = Variant::orderBy('name')->get();

        return Inertia::render('admin/products/edit', [
            'product' => $product->load('variant'),
            'variants' => $variants,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'variant_id' => 'required|exists:variants,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price_regular' => 'required|numeric|min:0',
            'price_jar' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $validated['image'] = $request->file('image')->store('products', 'public');
        } else {
            unset($validated['image']);
        }

        $product->update($validated);

        return redirect()->route('products.index')->with('success', 'Produk berhasil diperbarui.');
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('products.index')->with('success', 'Produk berhasil dihapus.');
    }
}
