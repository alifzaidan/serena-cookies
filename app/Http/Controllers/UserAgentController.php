<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserAgentController extends Controller
{
    public function index()
    {
        $agents = Agent::orderBy('created_at', 'desc')->get();

        return Inertia::render('user/agents/index', [
            'agents' => $agents,
        ]);
    }
}
