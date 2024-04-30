import React from 'react';
import './styles.css'; // Importing the CSS file for styling
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Ensure this file contains styles applicable to the components used here

function HomePage() {
    return (
        <div className="auth-form-container"> {/* Reusing styles for layout consistency */}
            <div className="auth-form"> {/* Reusing the blue box style */}
                <h1>Welcome to the Home Page!</h1>
                <h3>About:</h3>
                <p>Take Me Home is a rideshare service created to provide students at West Virginia University a means to get or provide a ride home for break.</p>
                <Link to="/add-listing" style={{ textDecoration: 'none' }}>
                    <button>Add Listing</button>
                </Link>
                <Link to="/view-listings" style={{ textDecoration: 'none' }}> {/* Add the new button for viewing listings */}
                    <button>View Listings</button>
                </Link>
                <Link to="/account-page" style={{ textDecoration: 'none' }}>
                    <button>View Account</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;

