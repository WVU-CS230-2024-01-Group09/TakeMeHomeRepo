import React from 'react';
import './App.css'; 

function App() {
    return (
        <div className="bg"> {/* Background image */}
            <div className="title">
                <h1>Take Me Home Rideshare</h1>
            </div>
            <div className="container">
                <h2>Welcome Mountaineers!</h2>
                <h3>Log in:</h3>
                <form id="loginForm">
                    <input type="email" id="email" placeholder="Email" required />
                    <input type="password" id="password" placeholder="Password" required />
                    <input type="submit" value="Log in" />
                </form>
                <div className="links">
                    <a href="#">Forgot password?</a> &mdash; <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default App;

