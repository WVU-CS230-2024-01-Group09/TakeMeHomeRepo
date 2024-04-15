import React, { useContext, createContext, useState } from 'react';
import { auth } from './firebaseConfig'; // Ensure correct import of your Firebase auth configuration
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const authContext = createContext();

function useProvideAuth() {
    const [user, setUser] = useState(null);

    // Existing signIn function using Firebase authentication
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                setUser(response.user); // Set the user in state
                return response.user; // Return the user for any additional handling
            }).catch(error => {
                // Optionally, handle errors here such as updating state to show an error message
                console.error("Authentication error:", error);
                throw error; // Rethrow the error so it can be caught and handled where signIn is called
            });
    };

    // Method to trigger password reset email
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent
                console.log("Password reset email sent.");
                // You might want to return some success message or perform other actions here
            })
            .catch(error => {
                // Handle errors in sending the password reset email
                console.error("Error sending password reset email:", error);
                throw error; // It allows catching this error in the component that called resetPassword
            });
    };

    // Return the user object, signIn and resetPassword methods
    return {
        user,
        signIn,
        resetPassword, // Include resetPassword in the returned object
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};
