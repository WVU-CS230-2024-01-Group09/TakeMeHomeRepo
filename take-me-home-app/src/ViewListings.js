import React from 'react';
import { Link } from 'react-router-dom';

function ViewListings() {
    const listings = [
        {
            id: 1,
            name: 'Mike',
            date: '2024-07-04',
            location: 'New York',
            time: '07:00 AM',
            destination: 'Los Angeles'
        },
        {
            id: 2,
            name: 'Nada Mikky',
            date: '2024-04-05',
            location: 'Towers',
            time: '09:00 AM',
            destination: 'Pittsburgh'
        }
    ];

    return (
        <div className="container">
            <style>
                {`
                body {
                    font-family: 'Times New Roman', Times, serif;
                    background-color: lightgoldenrodyellow;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    max-width: 600px;
                    padding: 30px;
                    border: 3px solid #ccc;
                    border-radius: 5px;
                    background-color: midnightblue;
                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                    color: rgb(179, 171, 204);
                }
                h2 {
                    text-align: center;
                    color: goldenrod;
                    font-size: 45px;
                }
                .offer {
                    background-color: midnightblue;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }
                .offer h3 {
                    color: goldenrod;
                }
                .offer p {
                    color: white;
                    margin: 5px 0;
                }
                .links a, .links button {
                    color: aliceblue;
                    text-decoration: none;
                    padding: 8px 12px;
                    margin: 5px;
                    background-color: #1da1f2;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                }
                .links a:hover, .links button:hover {
                    background-color: #3495ea;
                }
                `}
            </style>
            <h2>LISTING VIEW</h2>
            {listings.map(listing => (
                <div className="offer" key={listing.id}>
                    <h3>Offer {listing.id}</h3>
                    <p><strong>Name:</strong> {listing.name}</p>
                    <p><strong>Date:</strong> {listing.date}</p>
                    <p><strong>Location:</strong> {listing.location}</p>
                    <p><strong>Time:</strong> {listing.time}</p>
                    <p><strong>Destination:</strong> {listing.destination}</p>
                </div>
            ))}
            <div className="links">
                <Link to="/add-listing" style={{ textDecoration: 'none', color: 'aliceblue' }}>Add New Offer</Link>
                <Link to="/home" style={{ textDecoration: 'none', color: 'aliceblue' }}>Go Home</Link> {/* New button for returning to the homepage */}
            </div>
        </div>
    );
}

export default ViewListings;
