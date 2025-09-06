# Laravel Backend Setup Commands

## 🗄️ **Step 1: Database Setup**

### **Create Database:**
```bash
# In your Laravel project directory
php artisan tinker
```

Then in tinker:
```php
DB::statement('CREATE DATABASE IF NOT EXISTS caterxperience');
exit
```

### **Run Migrations:**
```bash
php artisan migrate
```

## 🔐 **Step 2: Install Sanctum**

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

## 📝 **Step 3: Create API Routes**

Create or update `routes/api.php` with this content:

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;

// Authentication routes
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Password reset routes
Route::post('/password/email', [PasswordResetLinkController::class, 'store']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
```

## 👤 **Step 4: Update User Model**

Update `app/Models/User.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
```

## 🎯 **Step 5: Create Authentication Controller**

```bash
php artisan make:controller Auth/AuthenticatedSessionController
```

Then add this to `app/Http/Controllers/Auth/AuthenticatedSessionController.php`:

```php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function destroy(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
```

## 🧪 **Step 6: Create Test User**

```bash
php artisan tinker
```

Then in tinker:
```php
$user = new App\Models\User();
$user->name = 'Test User';
$user->email = 'test@example.com';
$user->password = bcrypt('password');
$user->role = 'admin';
$user->save();
exit
```

## 🔄 **Step 7: Update Frontend **

Once backend is working, update your frontend components to use real API calls.

## ✅ **Test Commands:**

```bash
# Test if Laravel is working
php artisan serve

# Test database connection
php artisan tinker
DB::connection()->getPdo();
exit

# Test API routes
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```
