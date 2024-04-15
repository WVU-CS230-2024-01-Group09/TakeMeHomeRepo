// HomePage.js
import React from 'react';
import './styles.css'; // Importing the CSS file for styling
import './map.js';
import './map.html';
import './ListingHandler.js';
import { Link } from 'react-router-dom';
import './AuthForm.css';

function HomePage() {
    return (
        <div className="auth-form-container"> {/* Same class for consistent background styling */}
            <div className="auth-form"> {/* Blue box styling */}
                <h1>Welcome to the Home Page!</h1>
                <h3>About:</h3>
                <p>Take Me Home is a rideshare service created with the purpose of providing students at West Virginia University a means to get or provide a ride home for break.</p>
                <Link to="/add-listing" style={{ textDecoration: 'none' }}>
                    <button>Add Listing</button>
                </Link>
                <Link to="/view-map" style={{ textDecoration: 'none' }}>
                    <button>View Map</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
