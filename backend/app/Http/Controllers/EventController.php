<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'title'     => 'required|string|max:255',
        'price'     => 'required|numeric',
        'date'      => 'required|date',
        'location'  => 'required|string|max:255',
        'capacity'  => 'required|integer',
        'image'     => 'nullable|string',
    ]);

    $event = Event::create($validated);

    return response()->json([
        'message' => 'Event created successfully',
        'event' => $event
    ], 201);
}

}
