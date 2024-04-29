import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

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

    useEffect(() => {
        setMinDate();
    }, []);

    const setMinDate = () => {
        var today = new Date();
        today.setDate(today.getDate()); // Today's date
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("tripDate").setAttribute("min", today);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        var selectedDate = document.getElementById("tripDate").value;
        var today = new Date();
        today.setHours(0, 0, 0, 0); // Set hours to 0 for accurate comparison
        var tripDate = new Date(selectedDate);
    
        // Check if the selected date is in the future
        if (tripDate <= today) {
          alert("Please select a date in the future.");
          return;
        }

        console.log("Form submitted");
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

        try {
            await addDoc(collection(db, "listings"), offer);
            alert('Listing added successfully');
            navigate('/view-listings');
        } catch (error) {
            console.error("Error adding listing: ", error);
            alert('Failed to add listing: ' + error.message);
        }
    };

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
        backgroundColor: 'rgba(25, 25, 112, 0.8)',
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
        backgroundColor: 'white',
        color: 'black'
    };

    const notesStyle = {
        gridColumn: '1 / span 2',
        height: '100px'
    };

    const submitButtonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '3px',
        backgroundColor: '#1da1f2',
        color: 'aliceblue',
        border: 'none',
        cursor: 'pointer',
        gridColumn: '1 / span 2',
        marginTop: '20px'
    };
    
    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required style={inputStyle} />
                <input
                    type="date"
                    id="tripDate"
                    value={tripDate}
                    onChange={e => setTripDate(e.target.value)}
                    placeholder="Trip Date"
                    required
                    style={inputStyle}
                />
                <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" required style={inputStyle} />
                <input type="time" value={meetingTime} onChange={e => setMeetingTime(e.target.value)} placeholder="Meeting Time" required style={inputStyle} />
                <input type="text" value={meetupLocation} onChange={e => setMeetupLocation(e.target.value)} placeholder="Meet-up Location" required style={inputStyle} />
                <select value={seats} onChange={e => setSeats(e.target.value)} required style={inputStyle}>
                    <option value="">Select Seats</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <select value={smoking} onChange={e => setSmoking(e.target.value)} required style={inputStyle}>
                    <option value="">Smoking Allowed?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <input type="text" value={carType} onChange={e => setCarType(e.target.value)} placeholder="Type of car" style={inputStyle} />
                <textarea placeholder="Enter notes" value={notes} onChange={e => setNotes(e.target.value)} style={{ ...inputStyle, ...notesStyle }}></textarea>
                <input type="submit" value="Publish" style={submitButtonStyle} />
            </form>
        </div>
    );
}

export default AddListing;
