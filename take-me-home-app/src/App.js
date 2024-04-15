import React from 'react';
import './App.css'; // Importing the CSS file for styling
// import logo from './logo.svg';
import './map.js';
import DatabaseTest from './databasetest';
// import { Link } from 'react-router-dom'; // FOR SOME REASON USING THIS BREAKS THE SITE

<Route exact path="/home" component={HomePage} /> // this is what lets you type /home into the browser to navigate to the page


function App() {
    return (
        <div className="App">
            <div className="bg"></div> {/* Background image */}
            <div className="content"> {/* Content container for centering */}
                <div className="title">
                    <h1>Take Me Home Rideshare</h1>
                    {/* {<Link to="/map">Map</Link>} */}
                </div>
                <div className="container"> {/* Login container */}
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
        </div>
    );
}




export default App;
