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
        $catalogs = Catalog::orderBy('created_at', 'desc')->get();

        return Inertia::render('user/catalogs/index', [
            'catalogs' => $catalogs,
        ]);
    }
}
