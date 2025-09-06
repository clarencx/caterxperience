import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosClient from '../axiosClient';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please enter both email and password.',
            });
            return;
        }

        try {
            const response = await axiosClient.post('/login', {
                email,
                password,
            });

            if (response.data) {
                const user = response.data.user || response.data;
                const token = response.data.token || response.data.access_token;

                localStorage.setItem('token', token);
                localStorage.setItem('user', btoa(JSON.stringify(user)));
                localStorage.setItem('role', user.role || 'user');

                // Role-based navigation
                const role = user.role || 'user';
                switch (role) {
                    case 'admin':
                        navigate('/admin/dashboard');
                        break;
                    case 'stylist':
                        navigate('/stylist/dashboard');
                        break;
                    case 'cook':
                        navigate('/cook/dashboard');
                        break;
                    case 'head waiter':
                        navigate('/waiter/dashboard');
                        break;
                    default:
                        navigate('/client/dashboard');
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message || 'Invalid credentials. Please try again.',
            });
        }
    };

    return (
        <div className="login-page">
            <div className="overlay" />
            <div className="login-box">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <FaEnvelope />
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <FaLock />
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="forgot">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/password-reset'); }}>Forgot password?</a>
                    </div>
                    <button type="submit" className="login-submit">Login Now</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
