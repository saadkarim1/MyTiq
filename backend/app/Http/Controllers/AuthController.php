<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuthRequest;
use App\Http\Requests\RegisterAuthRequest;
use App\Models\User;
use App\Events\UserRegistered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(RegisterAuthRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'user_name' => $validated['user_name'],
            'email'     => $validated['email'],
            'password'  => $validated['password'],
        ]);

        // Déclenchement de l'événement pour envoyer le mail de bienvenue
        // event(new UserRegistered($user));

        $token = $user->createToken('api-token');

        return response()->json([
            'user'  => $user,
            'token' => $token->plainTextToken
        ], 201);
    }

    // Connexion
    public function login(LoginAuthRequest $request)
    {
        $validated = $request->validated();

        $user = User::whereEmail( $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api-token');

        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken
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
