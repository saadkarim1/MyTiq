<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function index($eventId)
    {
        $event = Event::findOrFail($eventId);
        $tickets = $event->tickets();

        return response()->json($tickets, 200);
    }

    public function store(Request $request, $eventId)
    {
        try {
            $event = Event::findOrFail($eventId);

            $ticket = Ticket::create([
                "event_name" => $event->title,
                'event_id' => $event->id,
                "user_id" => Auth::user()->id,
                "price" => $event->price,
                "location" => $event->location,
                "date" => $event->date,
            ]);
            // $event->capacity = $event->capacity - 1;
            // $event->update($event->all());

            return response()->json($ticket, 201);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }
}
