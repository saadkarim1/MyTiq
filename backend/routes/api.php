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

Route::controller(AuthController::class)->group(function () {

    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
    Route::get('/user', 'getAuthencatedUser')->middleware('auth:sanctum');
});

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
    Route::post('events/{eventId}/tickets', 'store');
    Route::get('events/{eventId}/tickets', 'index');
});
