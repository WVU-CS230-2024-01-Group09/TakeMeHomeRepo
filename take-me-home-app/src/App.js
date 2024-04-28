import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import ForgotPassword from './ForgotPassword';
import CreateAccount2 from './CreateAccount2';
import PlaceholderPage from './PlaceholderPage'; // Import the PlaceholderPage component
import { ProvideAuth } from './useAuth';
import AddListing from './AddListing';
import ViewListings from './ViewListings';
import AccountPage from './AccountPage';

function App() {
    return (
        <ProvideAuth>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/create-account" element={<CreateAccount2 />} />
                    <Route path="/add-listing" element={<AddListing />} /> {/* Placeholder route for Add Listing */}
                    <Route path="/view-map" element={<PlaceholderPage title="View Map" />} /> {/* Placeholder route for View Map */}
                    <Route path="/view-listings" element={<ViewListings />} />
                    <Route path="/account-page" element={<AccountPage />} />
                </Routes>
            </Router>
        </ProvideAuth>
    );
}

export default App;