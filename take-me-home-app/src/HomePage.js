// HomePage.js
import React from 'react';
import './styles.css'; // Importing the CSS file for styling
import './map.js';
import './map.html';
import './ListingHandler.js';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <h3>About:</h3>
            <p style="background-image: url('logo.png');">Take Me Home is a rideshare service created with the purpose of providing students at West Virginia University a means to get or provide a ride home for break.</p>
            <div>
                <Link to="/ListingHandler.html">Add Listing</Link>
            </div>
            <div>
                <Link to="/map.html">View Map</Link>
            </div>
            
        </div>
    );
}

export default HomePage;
