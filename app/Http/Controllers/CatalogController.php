<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {
        $catalogs = Catalog::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/catalogs/index', [
            'catalogs' => $catalogs,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/catalogs/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('catalogs', 'public');
        }

        Catalog::create($validated);

        return redirect()->route('catalogs.index')->with('success', 'Katalog berhasil ditambahkan.');
    }

    public function edit(Catalog $catalog)
    {
        return Inertia::render('admin/catalogs/edit', [
            'catalog' => $catalog,
        ]);
    }

    public function update(Request $request, Catalog $catalog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($catalog->image) {
                Storage::disk('public')->delete($catalog->image);
            }
            $validated['image'] = $request->file('image')->store('catalogs', 'public');
        } else {
            unset($validated['image']);
        }

        $catalog->update($validated);

        return redirect()->route('catalogs.index')->with('success', 'Katalog berhasil diperbarui.');
    }

    public function destroy(Catalog $catalog)
    {
        if ($catalog->image) {
            Storage::disk('public')->delete($catalog->image);
        }

        $catalog->delete();

        return redirect()->route('catalogs.index')->with('success', 'Katalog berhasil dihapus.');
    }
}
