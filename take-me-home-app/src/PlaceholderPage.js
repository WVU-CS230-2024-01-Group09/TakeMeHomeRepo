import React from 'react';

function PlaceholderPage({ title }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>This page is a placeholder for the {title} feature.</p>
        </div>
    );
}

export default PlaceholderPage;
