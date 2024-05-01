import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from './useAuth'; // Import useAuth hook

function ViewListings() {
    // Access user object from useAuth hook
    const { user } = useAuth();
    // State variables to manage listings and editing
    const [listings, setListings] = useState([]);
    const [selectedListing, setSelectedListing] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editListing, setEditListing] = useState(null);

    // Fetch listings from Firestore on component mount
    useEffect(() => {
        const fetchListings = async () => {
            const listingsCollection = collection(db, "listings");
            const snapshot = await getDocs(listingsCollection);
            const listingsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setListings(listingsData);
        };

        fetchListings();
    }, []);

    // Function to handle viewing a listing
    const handleViewListing = (listing) => {
        setSelectedListing(listing);
    };

    // Function to close the selected listing popup
    const handleClosePopup = () => {
        setSelectedListing(null);
    };

    // Function to handle editing a listing
    const handleEditListing = (listing) => {
        // Check if the logged-in user created the listing
        if (user && listing.createdBy === user.uid) {
            // If the logged-in user created the listing, set the editListing state and setIsEditing to true
            setEditListing(listing);
            setIsEditing(true);
        } else {
            // If the logged-in user did not create the listing, display an error message
            alert('You are not authorized to edit this listing.');
        }
    };

    // Function to handle saving the edited listing
    const handleSaveListing = async (event) => {
        event.preventDefault();
        try {
            const listingRef = doc(db, 'listings', editListing.id);
            await updateDoc(listingRef, editListing); 
            alert('Listing updated successfully');
            setIsEditing(false);
            setEditListing(null);
        } catch (error) {
            console.error("Error updating listing: ", error);
            alert('Failed to update listing: ' + error.message);
        }
    };

    // Function to handle deleting a listing
    const handleDeleteListing = async (listing) => {
        try {
            await deleteDoc(doc(db, "listings", listing.id));
            alert('Listing deleted successfully');
            setSelectedListing(null); 
        } catch (error) {
            console.error("Error deleting listing: ", error);
            alert('Failed to delete listing: ' + error.message);
        }
    };

    // JSX rendering
    return (
        <div style={containerStyle}>
            <h2 style={{ color: 'goldenrod', fontSize: '45px', textAlign: 'center' }}>LISTING VIEW</h2>
            <div style={listContainerStyle}>
                {listings.length > 0 ? (
                    <div style={listStyle}>
                        {listings.map(listing => (
                            <div key={listing.id} style={listItemStyle}>
                                <p><strong>Name:</strong> {listing?.name}</p>
                                <p><strong>Date:</strong> {listing?.tripDate?.toDate().toLocaleDateString()}</p>
                                <p><strong>Location:</strong> {listing?.destination}</p>
                                <button onClick={() => handleViewListing(listing)} style={viewButtonStyle}>View</button>
                                {user && listing?.createdBy === user.uid && (
                                    <button onClick={() => handleEditListing(listing)} style={editButtonStyle}>Edit</button>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No listings available.</p>
                )}
            </div>
            <div style={buttonContainerStyle}>
                <Link to="/add-listing" style={linkStyle}>Add New Offer</Link>
                <Link to="/home" style={linkStyle}>Go Home</Link>
            </div>
            {selectedListing && (
                <div style={popupStyle}>
                    <button onClick={handleClosePopup} style={closeButtonStyle}>X</button>
                    <h3>{selectedListing?.name}</h3>
                    <p><strong>Date:</strong> {selectedListing?.tripDate?.toDate().toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {selectedListing?.destination}</p>
                    <p><strong>Time:</strong> {selectedListing?.meetingTime}</p>
                    <p><strong>Seats:</strong> {selectedListing?.seats}</p>
                    <p><strong>Smoking Allowed:</strong> {selectedListing?.smoking}</p>
                    <p><strong>Car Type:</strong> {selectedListing?.carType}</p>
                    <p><strong>Notes:</strong> {selectedListing?.notes}</p>
                    <p><strong>Contact Email:</strong> {selectedListing?.creatorEmail}</p>
                </div>
            )}
            {isEditing && editListing && (
                <div style={popupStyle}>
                    <button onClick={() => setIsEditing(false)} style={closeButtonStyle}>X</button>
                    <h3>Edit Listing</h3>
                    <form onSubmit={handleSaveListing}>
                        {/* Input fields for editing listing */}
                        <input type="submit" value="Save" style={saveButtonStyle} />
                    </form>
                    <button onClick={() => handleDeleteListing(editListing)} style={deleteButtonStyle}>Delete Listing</button>
                </div>
            )}
        </div>
    );
}

// Inline styles
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    height: '100%',
    padding: '40px',
    color: 'rgb(179, 171, 204)',
    position: 'relative', 
    backgroundImage: 'url(https://wallpapercave.com/wp/wp2912980.jpg)',
};

const listContainerStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 100px)', 
};

const listItemStyle = {
    width: 'calc(25%)',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#00112b',
    borderRadius: '5px',
    flexDirection: 'column',
    color: '#fffc4a',
};

const viewButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#405aa1',
    borderRadius: '3px',
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    marginTop: '10px',
};

const editButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#ff0000', 
    borderRadius: '3px',
    cursor: 'pointer',
    border: 'none',
    color: 'white', 
    marginTop: '10px',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '30px',
    width: '100%',
};

const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const linkStyle = {
    textDecoration: 'none',
    color: 'aliceblue',
    padding: '8px 12px',
    backgroundColor: '#1da1f2',
    borderRadius: '3px',
    cursor: 'pointer',
    margin: '5px'
};

const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'aliceblue',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    zIndex: '999',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px',
    backgroundColor: '#405aa1',
    borderRadius: '50%',
    cursor: 'pointer',
    border: 'none',
    color: 'aliceblue',
};

const saveButtonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '3px',
    backgroundColor: '#405aa1',
    color: 'aliceblue',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
};

const deleteButtonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '3px',
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
};

export default ViewListings;