<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index($eventId)
    {
        $event = Event::findOrFail($eventId);
        $tickets = $event->tickets();

        return response()->json($tickets, 200);
    }

    // $table->foreignId('user_id')->constrained()->onDelete('cascade');
    //         $table->string('event_name');
    //         $table->foreignId('event_id')->constrained()->onDelete('cascade');
    //         $table->float('price');
    //         $table->string('location');
    //          $table->date('date'); 
    public function store(Request $request, $eventId)
    {
        $event = Event::findOrFail($eventId);

        $ticket = Ticket::create([
            "event_name" => $event->title,
            'event_id' => $event->id,
            "user_id" => $event->user_id,
            "price" => $event->price,
            "location" => $event->location,
            "date" => $event->date,
        ]);
        // $event->capacity = $event->capacity - 1;
        // $event->update($event->all());

        return response()->json($ticket, 201);
    }
}
