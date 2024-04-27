import React from 'react';
// Import axios to ensure the http request is done successfully to delete.
import axios from 'axios';

const DeleteListing = ({ id }) => {
    const handleDelete = async () => {

        try {

            // Double-check the host. I'm not sure but it should work locally
            await axios.delete(`http://localhost:3000/listings/${id}`);

            // Report deleted successfully
            console.log('Listing deleted successfully');

        } catch (error) {

            // Report there was an error.
            console.error('Error deleting listing:', error);

        }
    };

    return (
        <button onClick={handleDelete}>Delete Listing</button>
    );
};

export default DeleteListing;