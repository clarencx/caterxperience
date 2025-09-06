# Quick Fix Commands

## 🚀 **Step 1: Switch to SQLite (Easiest)**

### **Update your Laravel .env file:**
```env
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=caterxperience
# DB_USERNAME=root
# DB_PASSWORD=
```

### **Create SQLite database:**
```bash
# In your Laravel project directory
touch database/database.sqlite
```

### **Run migrations:**
```bash
php artisan migrate
```

## 🔐 **Step 2: Install Sanctum**

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

## 📝 **Step 3: Add API Routes**

Create or update `routes/api.php`:

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
```

## 🎯 **Step 4: Create Authentication Controller**

```bash
php artisan make:controller Auth/AuthenticatedSessionController
```

Add this to `app/Http/Controllers/Auth/AuthenticatedSessionController.php`:

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

## 👤 **Step 5: Update User Model**

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

## ✅ **Test It:**

```bash
# Test login
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'

# Test password reset
curl -X POST http://localhost:8000/api/password/email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```
