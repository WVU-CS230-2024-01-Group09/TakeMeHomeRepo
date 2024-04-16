import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddListing() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [tripDate, setTripDate] = useState('');
    const [destination, setDestination] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [meetupLocation, setMeetupLocation] = useState('');
    const [seats, setSeats] = useState('');
    const [smoking, setSmoking] = useState('');
    const [carType, setCarType] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const offer = {
            name,
            tripDate,
            destination,
            meetingTime,
            meetupLocation,
            seats,
            smoking,
            carType,
            notes
        };
        console.log("Offer Submitted:", offer);
        navigate('/listing-published');
    };

    // Styles
    const containerStyle = {
        fontFamily: 'Times New Roman',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://social.wvu.edu/files/5402f54b-285c-4b11-8d46-81007bf9ab0d/856x482?cb=9073b7ecee930f3a4d0184083b4a5fc6)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const formStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        maxWidth: '800px',
        padding: '30px',
        border: '3px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'rgba(25, 25, 112, 0.8)', // Adjusting this for better visibility over the background
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: 'rgb(179, 171, 204)',
        margin: 'auto'
    };

    const notesStyle = {
        gridColumn: '1 / span 2', // Makes the notes input span both columns
        backgroundColor: 'white', // Ens
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        boxSizing: 'border-box',
        backgroundColor: 'white', // Force background color to be white
        color: 'black' // Ensure text color is black for visibility
    };


    const submitButtonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '3px',
        backgroundColor: '#1da1f2',
        color: 'aliceblue',
        border: 'none',
        cursor: 'pointer',
        gridColumn: '1 / span 2', // Center the button below all inputs
        marginTop: '20px' // Added margin for better spacing
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={{ color: 'goldenrod', gridColumn: '1 / span 2', textAlign: 'center' }}>ADD YOUR RIDE OFFER</h2>
                <div>
                    <h5>Enter your Full Name:</h5>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required style={inputStyle} />
                    <h5>Date of the trip:</h5>
                    <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Trip Date" required style={inputStyle} />
                    <h5>Trip destination:</h5>
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" required style={inputStyle} />
                    <h5>Enter the meet-up time:</h5>
                    <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} placeholder="Meeting Time" required style={inputStyle} />
                </div>
                <div>
                    <h5>Meet-up Location:</h5>
                    <input type="text" value={meetupLocation} onChange={(e) => setMeetupLocation(e.target.value)} placeholder="Meet-up Location" required style={inputStyle} />
                    <h5>How many seats are available in your car?</h5>
                    <select value={seats} onChange={(e) => setSeats(e.target.value)} required style={inputStyle}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <h5>Is smoking allowed in your car?</h5>
                    <select value={smoking} onChange={(e) => setSmoking(e.target.value)} required style={inputStyle}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <h5>Type of car:</h5>
                    <input type="text" value={carType} onChange={(e) => setCarType(e.target.value)} placeholder="Type of car" style={inputStyle} />
                </div>
                <textarea placeholder="Enter notes" value={notes} onChange={(e) => setNotes(e.target.value)} style={{ ...inputStyle, ...notesStyle }}></textarea>
                <input type="submit" value="Publish" style={submitButtonStyle} />
            </form>
        </div>
    );
}

export default AddListing;
