<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Region;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Address;
use App\Models\PreferredCuisine;
use Illuminate\Support\Facades\File;

// import and parse region.json


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */

    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        echo "Hello";
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', Rules\Password::defaults()],
            'phone' => ['required', 'string', 'max:255'],
            'region' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'municipality' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            // 'preferredCuisine' => ['required', 'array'],
        ]);

        $region = json_decode(File::get(base_path('database/seeders/Region.json')), true);
        $region = Region::where('acronym', $validated['region'])->first();
        $address = Address::create([
            'region_id' => $region->id,
            'city' => $validated['city'],
            'municipality' => $validated['municipality'],
            'street' => $validated['street'],
        ]);
        $address->save();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'phone' => $validated['phone'],
            'address_id' => $address->id,
        ]);
        $user->save();


        // // create preferred cuisines for each cuisine of user
        // foreach ($validated['preferredCuisine'] as $cuisine) {
        //     $preferredCuisine = new PreferredCuisine();
        //     $preferredCuisine->cuisine_id = $cuisine;
        //     $preferredCuisine->user_id = $user->id;
        //     $preferredCuisine->save();
        // }

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
