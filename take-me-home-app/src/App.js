// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import { ProvideAuth } from './useAuth';

function App() {
    return (
        <ProvideAuth>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </ProvideAuth>
    );
}

export default App;



