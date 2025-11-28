<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Events\UserRegistered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    // Inscription
    public function register(Request $request)
    {
        $validated = $request->validate([
            'user_name' => 'required|string|max:255',
            'email'     => 'required|email|unique:users,email',
            'password'  => ['required','confirmed', Password::defaults()],
            'is_news_letter_subscriber' => 'nullable|boolean',
        ]);

        $user = User::create([
            'user_name' => $validated['user_name'],
            'email'     => $validated['email'],
            'password'  => Hash::make($validated['password']),
            'role'      => 'user',
            'is_news_letter_subscriber' => $validated['is_news_letter_subscriber'] ?? false,
        ]);

        // Déclenchement de l'événement pour envoyer le mail de bienvenue
        // event(new UserRegistered($user));

        // Création d'un token pour l'utilisateur
        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token
        ], 201);
    }

    // Connexion
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    // Déconnexion
    public function logout(Request $request)
{
    $user = $request->user();

    if ($user) {
        // Supprime le token actuel
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    return response()->json(['message' => 'User not authenticated'], 401);
}

}
