<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index($eventId)
    {
        $event = Event::findOrFail($eventId);
        $tickets = $event->tickets();
        
        return response()->json($tickets, 200);
    }
    
    public function store(Request $request, $eventId) {
        $event = Event::findOrFail($eventId);

    }
}
