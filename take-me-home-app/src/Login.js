// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Assuming useAuth is correctly set up for this example
import { useAuth } from './useAuth';
import './App.css';
function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signIn(email, password);
            navigate('/home'); // Navigate on success
        } catch (error) {
            // Handle login failure
            console.error(error.message);
        }
    };

    return (
        <div className="bg"> {/* Background image */}
            <div className="content"> {/* Centers the login form */}
                <div className="container"> {/* The blue box */}
                    <div className="title">
                        <h1>Login</h1> {/* Title inside the blue box */}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="submit" value="Log in" />
                    </form>
                    <div className="links">
                        <a href="www.google.com">Forgot password?</a> &mdash; <a href="www.google.com">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

