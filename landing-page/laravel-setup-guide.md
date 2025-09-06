# Laravel Backend Setup Guide

## 🔧 **Laravel Backend Configuration Required**

### **1. Install Laravel Sanctum (for API authentication)**
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### **2. Configure CORS (in config/cors.php)**
```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:3000', 'http://127.0.0.1:3000'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => true,
```

### **3. API Routes (in routes/api.php)**
```php
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;

// Authentication routes
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Password reset routes
Route::post('/password/email', [PasswordResetLinkController::class, 'store']);
Route::post('/password/reset', [NewPasswordController::class, 'store']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
```

### **4. User Model (add to app/Models/User.php)**
```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    // Add role field to fillable
    protected $fillable = [
        'name', 'email', 'password', 'role'
    ];
}
```

### **5. Authentication Controller (app/Http/Controllers/Auth/AuthenticatedSessionController.php)**
```php
public function store(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token,
    ]);
}
```

### **6. Environment Variables (.env)**
```env
APP_URL=http://caterxperience.test
FRONTEND_URL=http://localhost:3000

# Mail configuration for password reset
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=3000
MAIL_USERNAME=espinameimei@gmail.com
MAIL_PASSWORD=mokzshvwjqoknubh
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS="espinameimei@gmail.com"
MAIL_FROM_NAME="CaterXperience"
```

## 🚀 **Frontend Configuration**

### **Current Setup:**
- ✅ **Vite proxy** configured for `http://caterxperience.test`
- ✅ **Axios client** with Laravel headers and token handling
- ✅ **Login component** ready for Laravel Sanctum
- ✅ **Password reset** using Laravel's built-in API
- ✅ **Environment config** for easy backend switching

### **Development Server:**
```bash
npm run dev
# Runs on http://localhost:3000
# Proxies API calls to http://caterxperience.test
```

## 🔄 **API Endpoints Used:**

1. **POST /api/login** - User authentication
2. **POST /api/password/email** - Send password reset email
3. **GET /api/user** - Get authenticated user (protected)

## 🎯 **Next Steps:**
1. Set up Laravel backend with Sanctum
2. Configure CORS for frontend domain
3. Create user roles and permissions
4. Test authentication flow
5. Set up email configuration for password reset
