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
    const [showModal, setShowModal] = useState(false);

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
        setShowModal(true); // Show the modal instead of navigating away
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={{ color: 'goldenrod', gridColumn: '1 / span 2', textAlign: 'center' }}>ADD YOUR RIDE OFFER</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required style={inputStyle} />
                <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Trip Date" required style={inputStyle} />
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" required style={inputStyle} />
                <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} placeholder="Meeting Time" required style={inputStyle} />
                <input type="text" value={meetupLocation} onChange={(e) => setMeetupLocation(e.target.value)} placeholder="Meet-up Location" required style={inputStyle} />
                <select value={seats} onChange={(e) => setSeats(e.target.value)} required style={inputStyle}>
                    <option value="">Select Seats</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <select value={smoking} onChange={(e) => setSmoking(e.target.value)} required style={inputStyle}>
                    <option value="">Smoking Allowed?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <input type="text" value={carType} onChange={(e) => setCarType(e.target.value)} placeholder="Type of car" style={inputStyle} />
                <textarea placeholder="Enter notes" value={notes} onChange={(e) => setNotes(e.target.value)} style={{ ...inputStyle, ...notesStyle }}></textarea>
                <input type="submit" value="Publish" style={submitButtonStyle} />
            </form>

            {/* Modal for successful submission */}
            {showModal && (
                <div style={modalStyle}>
                    <h1>Done!</h1>
                    <p>You have successfully published your ride offer.</p>
                    <button onClick={() => navigate('/view-listings')} style={buttonStyle}>
                        Check the Listing View
                    </button>
                    <button onClick={() => setShowModal(false)} style={buttonStyle}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

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

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: 'white', // Ensures background color is white
    color: 'black' // Ensures text color is black for visibility
};

const notesStyle = {
    gridColumn: '1 / span 2' // Makes the notes input span both columns
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

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: '3px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'lightgoldenrodyellow',
    textAlign: 'center',
    zIndex: 1000 // Ensure modal is above other content
};

const buttonStyle = {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#1da1f2',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
};

export default AddListing;
