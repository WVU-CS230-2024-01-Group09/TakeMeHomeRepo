// ListingHandler.js
document.addEventListener("DOMContentLoaded", function () {
    // Ensuring the form element exists
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Retrieve form data
            const name = document.getElementById("name").value;
            const tripDate = document.getElementById("tripDate").value;
            const destination = document.getElementById("destination").value;
            const meetingTime = document.getElementById("meetingTime").value;
            const tripDestination = document.getElementById("tripDestination").value;

            const offer = {
                name: name,
                tripDate: tripDate,
                destination: destination,
                meetingTime: meetingTime,
                tripDestination: tripDestination
            };

            // Handle offer submission (send to backend, store in database)
            handleOfferSubmission(offer);

            // Optionally, clear form fields after submission
            form.reset();
        });
    } else {
        console.error('Form element not found!');
    }

    // Set the minimum date for the tripDate input to today's date
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;  // JavaScript months are zero-based
    let day = today.getDate();

    // Add leading zero if month/day is less than 10
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    const currentDate = year + '-' + month + '-' + day;
    const tripDateInput = document.getElementById('tripDate');
    if (tripDateInput) {
        tripDateInput.setAttribute('min', currentDate);
    } else {
        console.error('Trip date input not found!');
    }
});

function handleOfferSubmission(offer) {
    console.log("Offer Submitted:", offer);
    // Here you would typically make an AJAX request or similar to submit the data to the server
}
