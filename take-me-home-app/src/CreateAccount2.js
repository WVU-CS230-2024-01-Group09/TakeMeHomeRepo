import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import './AuthForm.css';

function CreateAccount2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [preferences, setPreferences] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [studentID, setStudentID] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate that the email includes 'wvu' after the '@'
        if (!email.includes('@mix.wvu')) {
            alert('Please enter a valid WVU email address ');
            return; // Stop the form submission if validation fails
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                // Create a document in Firebase to store the new user's information that is displayed in AccountPage.js
                await setDoc(doc(db, 'users', user.uid), {
                    email: email,
                    name: name,
                    preferences: preferences,
                    phoneNumber: phoneNumber,
                    studentID: studentID,
                  });
                // Redirect to the homepage upon successful account creation
                navigate('/home');
            })
            .catch((error) => {
                console.error('Error creating account:', error);
                alert('Failed to create account: ' + error.message);
            });
    };

    // Inline CSS to override Chrome's autofill styles
    const inputStyle = {
        backgroundColor: 'white',
        color: '#000',
        boxShadow: '0 0 0px 1000px white inset',
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email (must be a WVU email)"
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={inputStyle}
                />
                <textarea
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    placeholder="Preferences (optional)"
                    style={inputStyle}
                ></textarea>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                    style={inputStyle}
                />
                <input
                    type="number"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                    placeholder="Student ID"
                    required
                    style={inputStyle}
                />
                <h4>Password must be at least 6 characters long.</h4>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount2;
