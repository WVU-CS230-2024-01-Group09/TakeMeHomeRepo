import React, { useContext, createContext, useState } from 'react';
import { auth } from './firebaseConfig'; // Ensure this imports your Firebase auth configuration correctly
import { signInWithEmailAndPassword } from "firebase/auth";

const authContext = createContext();

function useProvideAuth() {
    const [user, setUser] = useState(null);

    // Updated signIn function to use Firebase authentication
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                setUser(response.user); // Set the user in state
                return response.user; // Return the user for any additional handling
            }).catch(error => {
                // Optionally, handle errors here such as updating state to show an error message
                console.error("Authentication error:", error);
                throw error; // Rethrow the error so you can catch it where signIn is called
            });
    };

    // Return the user object and auth methods
    return {
        user,
        signIn,
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

