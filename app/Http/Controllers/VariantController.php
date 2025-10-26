<?php

namespace App\Http\Controllers;

use App\Models\Variant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VariantController extends Controller
{
    public function index()
    {
        $variants = Variant::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/variants/index', [
            'variants' => $variants,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:variants,name',
            'description' => 'nullable|string',
        ]);

        Variant::create($validated);

        return redirect()->route('variants.index')->with('success', 'Varian berhasil ditambahkan.');
    }

    public function update(Request $request, Variant $variant)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:variants,name,' . $variant->id,
            'description' => 'nullable|string',
        ]);

        $variant->update($validated);

        return redirect()->route('variants.index')->with('success', 'Varian berhasil diperbarui.');
    }

    public function destroy(Variant $variant)
    {
        $variant->delete();

        return redirect()->route('variants.index')->with('success', 'Varian berhasil dihapus.');
    }
}
