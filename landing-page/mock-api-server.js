import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock user data
const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    role: 'admin'
};

// Mock token
const mockToken = 'mock-jwt-token-12345';

// Routes
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    if (email === 'test@example.com' && password === 'password') {
        res.json({
            user: mockUser,
            token: mockToken
        });
    } else {
        res.status(401).json({
            message: 'Invalid credentials'
        });
    }
});

app.post('/api/password/email', (req, res) => {
    const { email } = req.body;
    
    if (email === 'test@example.com') {
        res.json({
            message: 'Password reset link sent successfully'
        });
    } else {
        res.status(400).json({
            message: 'Email not found'
        });
    }
});

app.get('/api/user', (req, res) => {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.includes(mockToken)) {
        res.json(mockUser);
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Mock API Server running on http://localhost:${PORT}`);
    console.log(`📧 Test login: test@example.com / password`);
    console.log(`🔑 Test password reset: test@example.com`);
});
