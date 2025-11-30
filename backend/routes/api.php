<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::controller(EventController::class)->group(function () {
    Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
        Route::post('events', 'store');
        Route::delete('events/{eventId}', 'destroy');
        Route::put('events/{eventId}', 'update');
    });
    Route::get('events/{eventId}', 'show');
    Route::get('events',  'index');
});



Route::middleware('auth:sanctum')->controller(TicketController::class)->group(function () {
    Route::post('/events/{id}/tickets', 'store');
});
