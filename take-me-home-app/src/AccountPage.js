import React, { useEffect, useState } from 'react';
import './styles.css'; // Importing the CSS file for styling
import { useAuth } from './useAuth';
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function AccountPage() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedPreferences, setEditedPreferences] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    if (userData) {
      setEditedName(userData.name || '');
      setEditedPreferences(userData.preferences || '');
      setEditedPhoneNumber(userData.phoneNumber || '');
    }
  }, [userData]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSave = async () => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        ...userData,
        name: editedName,
        preferences: editedPreferences,
        phoneNumber: editedPhoneNumber,
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <h1>Account Page</h1>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          {editing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Name"
              />
              <textarea
                value={editedPreferences}
                onChange={(e) => setEditedPreferences(e.target.value)}
                placeholder="Preferences"
              ></textarea>
              <input
                type="tel"
                value={editedPhoneNumber}
                onChange={(e) => setEditedPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p>Name: {userData.name}</p>
              <p>Preferences: {userData.preferences}</p>
              <p>Phone Number: {userData.phoneNumber}</p>
              <button onClick={() => setEditing(true)}>Edit</button>
            </>
          )}
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default AccountPage;