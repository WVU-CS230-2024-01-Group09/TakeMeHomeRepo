import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css';

function CreateAccount2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/home');  // Redirect to the homepage upon successful account creation
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
        boxShadow: '0 0 0px 1000px white inset'
    };

    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={inputStyle}  // Apply inline styles here
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={inputStyle}  // Apply inline styles here
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount2;
