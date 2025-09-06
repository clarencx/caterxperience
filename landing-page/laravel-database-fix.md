# Laravel Database Connection Fix

## 🔧 **Quick Fix: Switch to SQLite**

### **1. Update Laravel .env file:**
```env
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=caterxperience
# DB_USERNAME=root
# DB_PASSWORD=
```

### **2. Create SQLite Database:**
```bash
# In your Laravel project directory
touch database/database.sqlite
```

### **3. Run Migrations:**
```bash
php artisan migrate
```

### **4. Create API Routes (routes/api.php):**
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

### **5. Install Sanctum:**
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### **6. Update User Model (app/Models/User.php):**
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

### **7. Create Authentication Controller:**
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

## 🚀 **After Setup:**
1. **Remove mock code** from frontend
2. **Test real API calls** to Laravel backend
3. **Create test users** in Laravel
4. **Test authentication flow**

## 🎯 **Alternative: Fix MySQL**
If you prefer MySQL:
1. **Start MySQL service** in Laravel Herd
2. **Check database credentials** in .env
3. **Create database** if it doesn't exist
4. **Run migrations**
