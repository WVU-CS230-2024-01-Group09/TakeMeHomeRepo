import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './AuthForm.css'; // Ensure this file contains the styles above

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Check your email for a password reset link.');
                navigate('/'); // Redirects to login page
            })
            .catch((error) => {
                console.error('Error sending password reset email:', error);
                alert('Failed to send password reset email.');
            });
    };

    // Inline CSS to override Chrome's autofill
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
                    placeholder="Email address"
                    required
                    style={inputStyle}  // Applying inline styles
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
