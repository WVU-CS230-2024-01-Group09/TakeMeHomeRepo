import React, { useState } from 'react';

// Function to verify the driver's license
async function verifyLicense(driverLicense) {

    // Try to verify the license.
    try {
        // Make an HTTP request to some backend API
        // Assume the API, if any, has an endpoint that'll take the DLN as a parameter.

        // Example of fetch for whatever API we use if any
        const response = await fetch(`/verify-license?license=${driverLicense}`);
        const data = await response.json();

        // Get a boolean value that states if the license is actually valid.

        // How I could handle the response.
        const { valid } = data;

        return valid;

        // Catch the error that would occur if I can't verify the driver's license.
    } catch (error) {
        console.error('Error verifying license:', error.message);
        return false;
    }
}

function VerifyLicense() {

    const [license, setLicense] = useState('');
    const [isValid, setIsValid] = useState(null);

    const handleVerify = async () => {
        const valid = await verifyLicense(license);
        setIsValid(valid);
    };

    return (
        <div>
            <input
                type="text"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                placeholder="Enter driver's license number"
            />
            <button onClick={handleVerify}>Verify License</button>
            {isValid !== null && (
                <p>{isValid ? 'License is valid' : 'License is not valid'}</p>
            )}
        </div>
    );
}

export default VerifyLicense;

// Or just store the license without use of an external API to check ourselves.
/**
 * import React, { useState } from 'react';
 *
 * function VerifyLicense() {
 *     const [license, setLicense] = useState('');
 *     const [storedLicenses, setStoredLicenses] = useState([]);
 *     const [isValid, setIsValid] = useState(null);
 *
 *     const isValidLicense = (license) => {
 *         // Match a pattern to typical DLNs
 *         const regex = /^[a-zA-Z0-9\-]+$/;
 *
 *         // Check if the license number matches the pattern
 *         return regex.test(license);
 *     };
 *
 *     const handleVerify = () => {
 *         // Validate DLN
 *         const valid = isValidLicense(license);
 *         setIsValid(valid);
 *
 *         // Store DLN if it's valid
 *         if (valid) {
 *             setStoredLicenses([...storedLicenses, license]);
 *         }
 *     };
 *
 *     return (
 *         <div>
 *             <input
 *                 type="text"
 *                 value={license}
 *                 onChange={(e) => setLicense(e.target.value)}
 *                 placeholder="Enter driver's license number"
 *             />
 *             <button onClick={handleVerify}>Verify License</button>
 *             {isValid !== null && (
 *                 <p>{isValid ? 'License is valid' : 'License is not valid'}</p>
 *             )}
 *             <h2>Stored License Numbers:</h2>
 *             <ul>
 *                 {storedLicenses.map((license, index) => (
 *                     <li key={index}>{license}</li>
 *                 ))}
 *             </ul>
 *         </div>
 *     );
 * }
 *
 * export default VerifyLicense;
 */