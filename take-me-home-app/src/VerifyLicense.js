import React, { useState } from 'react';
// Store the license without use of an external API to check ourselves.
  function VerifyLicense() {
      const [license, setLicense] = useState('');
      const [storedLicenses, setStoredLicenses] = useState([]);
     const [isValid, setIsValid] = useState(null);

      const isValidLicense = (license) => {
          // Match a pattern to typical DLNs
          const regex = /^[a-zA-Z0-9\-]+$/;

          // Check if the license number matches the pattern
          return regex.test(license);
      };

      const handleVerify = () => {
          // Validate DLN
          const valid = isValidLicense(license);
          setIsValid(valid);

          // Store DLN if it's valid
          if (valid) {
              setStoredLicenses([...storedLicenses, license]);
          }
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
              <h2>Stored License Numbers:</h2>
              <ul>
                  {storedLicenses.map((license, index) => (
                      <li key={index}>{license}</li>
                  ))}
              </ul>
          </div>
      );
  }

  export default VerifyLicense;