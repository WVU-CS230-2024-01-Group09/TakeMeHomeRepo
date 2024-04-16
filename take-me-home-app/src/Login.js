import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './useAuth'; // Ensure this path is correct
import './App.css'; // Assuming your CSS file is named App.css
import DatabaseTest from './databasetest';

function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Inline CSS to override Chrome's autofill styles
    const inputStyle = {
        backgroundColor: 'white',
        color: '#000',
        boxShadow: '0 0 0px 1000px white inset'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            navigate('/home'); // Navigate on success
        } catch (error) {
            // Display an alert if login is unsuccessful
            alert('Incorrect email or password.');
            console.error(error.message);
        }
    };

    return (
        <div className="bg">
            <div className="content">
                <div className="container">
                    <div className="title">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            style={inputStyle}  // Apply inline styles here
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            style={inputStyle}  // Apply inline styles here
                        />
                        <input type="submit" value="Log in" />
                    </form>
                    <div className="links">
                        <Link to="/forgot-password">Forgot Password?</Link> &mdash; <Link to="/create-account">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
