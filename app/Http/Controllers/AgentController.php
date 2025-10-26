<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentController extends Controller
{
    public function index()
    {
        $agents = Agent::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/agents/index', [
            'agents' => $agents,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/agents/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        Agent::create($validated);

        return redirect()->route('agents.index')->with('success', 'Agen berhasil ditambahkan.');
    }

    public function edit(Agent $agent)
    {
        return Inertia::render('admin/agents/edit', [
            'agent' => $agent,
        ]);
    }

    public function update(Request $request, Agent $agent)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        $agent->update($validated);

        return redirect()->route('agents.index')->with('success', 'Agen berhasil diperbarui.');
    }

    public function destroy(Agent $agent)
    {
        $agent->delete();

        return redirect()->route('agents.index')->with('success', 'Agen berhasil dihapus.');
    }
}
