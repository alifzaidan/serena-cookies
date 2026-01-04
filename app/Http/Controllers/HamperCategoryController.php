<?php

namespace App\Http\Controllers;

use App\Models\HamperCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HamperCategoryController extends Controller
{
    public function index()
    {
        $categories = HamperCategory::withCount('hampers')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('admin/hamper-categories/index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/hamper-categories/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:hamper_categories,name',
        ]);

        HamperCategory::create($validated);

        return redirect()->route('hamper-categories.index')->with('success', 'Kategori hampers berhasil ditambahkan.');
    }

    public function edit(HamperCategory $hamperCategory)
    {
        return Inertia::render('admin/hamper-categories/edit', [
            'category' => $hamperCategory,
        ]);
    }

    public function update(Request $request, HamperCategory $hamperCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:hamper_categories,name,' . $hamperCategory->id,
        ]);

        $hamperCategory->update($validated);

        return redirect()->route('hamper-categories.index')->with('success', 'Kategori hampers berhasil diperbarui.');
    }

    public function destroy(HamperCategory $hamperCategory)
    {
        // Check if category has hampers
        if ($hamperCategory->hampers()->count() > 0) {
            return redirect()->route('hamper-categories.index')->with('error', 'Kategori tidak dapat dihapus karena masih memiliki hampers.');
        }

        $hamperCategory->delete();

        return redirect()->route('hamper-categories.index')->with('success', 'Kategori hampers berhasil dihapus.');
    }
}
