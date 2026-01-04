<?php

namespace App\Http\Controllers;

use App\Models\Hamper;
use App\Models\HamperCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HamperController extends Controller
{
    public function index()
    {
        $hampers = Hamper::with('category')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('admin/hampers/index', [
            'hampers' => $hampers,
        ]);
    }

    public function create()
    {
        $categories = HamperCategory::orderBy('name')->get();

        return Inertia::render('admin/hampers/create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:hamper_categories,id',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'is_favorite' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hampers', 'public');
        }

        Hamper::create($validated);

        return redirect()->route('hampers.index')->with('success', 'Hampers berhasil ditambahkan.');
    }

    public function edit(Hamper $hamper)
    {
        $hamper->load('category');
        $categories = HamperCategory::orderBy('name')->get();

        return Inertia::render('admin/hampers/edit', [
            'hamper' => $hamper,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Hamper $hamper)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:hamper_categories,id',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'is_favorite' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {
            if ($hamper->image) {
                Storage::disk('public')->delete($hamper->image);
            }
            $validated['image'] = $request->file('image')->store('hampers', 'public');
        } else {
            unset($validated['image']);
        }

        $hamper->update($validated);

        return redirect()->route('hampers.index')->with('success', 'Hampers berhasil diperbarui.');
    }

    public function destroy(Hamper $hamper)
    {
        if ($hamper->image) {
            Storage::disk('public')->delete($hamper->image);
        }

        $hamper->delete();

        return redirect()->route('hampers.index')->with('success', 'Hampers berhasil dihapus.');
    }
}
