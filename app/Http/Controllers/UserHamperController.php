<?php

namespace App\Http\Controllers;

use App\Models\Hamper;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserHamperController extends Controller
{
    public function index()
    {
        $hampers = Hamper::orderBy('created_at', 'desc')->get();

        return Inertia::render('user/hampers/index', [
            'hampers' => $hampers,
        ]);
    }
}
