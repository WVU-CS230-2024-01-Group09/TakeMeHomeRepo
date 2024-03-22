document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Send data to server for account creation
    createUserAccount(email, password);
});

function isValidEmail(email) {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function createUserAccount(email, password) {
    
    fetch('/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => {
            if (response.ok) {
                alert('Account created successfully. Check your email for verification.');
                
            } else {
                throw new Error('Error creating account');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while creating your account. Please try again later.');
        });
}
