<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAndUpdateEventRequest;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function index()
    {
        $events = Event::all();
        return response()->json(["events" => $events]);
    }
    public function store(StoreAndUpdateEventRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['user_id'] = 1;

        $event = Event::create($validatedData);

        return response()->json([
            'message' => 'Event created successfully',
            'event' => $event
        ], 201);
    }

    public function update(StoreAndUpdateEventRequest $request, $eventId)
    {
        $event = Event::findOrFail($eventId);

        $event->update($request->all());

        return response()->json($event, 200);
    }

    public function show($eventId)
    {
        $event = Event::findOrFail($eventId);
        return response()->json($event, 200,);
    }

    public function destroy($eventId)
    {
        $event = Event::findOrFail($eventId);
        $event->delete();
        return response()->json("event deleted", 200,);
    }
}
